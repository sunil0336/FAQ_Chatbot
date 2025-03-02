
import { useState, useEffect } from "react";
import axios from "axios";

function Button({ onClick, children, disabled, className = "" }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${disabled ? "opacity-50" : ""} ${className}`}
        >
            {children}
        </button>
    );
}

function Card({ children, className = "" }) {
    return (
        <div className={`border bg-gray-800 shadow-lg rounded-lg p-4 ${className}`}>
            {children}
        </div>
    );
}

function CardContent({ children, className = "" }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}

function Textarea({ value, onChange, rows = 5, className = "", placeholder = "" }) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
            className={`w-full p-2 border rounded ${className}`}
        />
    );
}

function AdminDashboard() {
    const [unansweredQuestions, setUnansweredQuestions] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        // Fetch unanswered questions
        axios.get("http://localhost:3000/get-unanswered")
            .then(res => setUnansweredQuestions(res.data.questions.join("\n") || ""))
            .catch(err => console.error("Error fetching unanswered questions:", err));

        // Fetch main text file
        axios.get("http://localhost:3000/get-text")
            .then(res => setText(res.data.text || ""))
            .catch(err => console.error("Error fetching text file:", err));
    }, []);

    const handleSave = async () => {
        setLoading(true);
        try {
            await axios.post("http://localhost:3000/save-text", { text });
            alert("File saved successfully!");
        } catch (error) {
            console.error("Error saving file:", error);
        }
        setLoading(false);
    };

    const handleSaveQuestions = async () => {
        setLoading(true);
        try {
            await axios.post("http://localhost:3000/save-unanswered", { questions: unansweredQuestions.split("\n") });
            alert("Unanswered questions saved successfully!");
        } catch (error) {
            console.error("Error saving unanswered questions:", error);
        }
        setLoading(false);
    };

    return (
        <div className="p-8 bg-gray-900 min-h-screen text-white">
            

            {/* Main Data Section */}
            <Card className="max-w-2xl mx-auto mb-8">
                <CardContent>
                    <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
                    <Textarea
                        rows={10}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full p-2 border rounded bg-gray-700 text-white"
                        placeholder="Enter text here..."
                    />
                    <Button onClick={handleSave} className="mt-4" disabled={loading}>
                        {loading ? "Saving..." : "Save"}
                    </Button>
                </CardContent>
            </Card>

            {/* Unanswered Questions Section */}
            <Card className="max-w-2xl mx-auto">
                <CardContent>
                    <h2 className="text-xl font-bold mb-4">Unanswered Questions</h2>
                    <Textarea
                        rows={10}
                        value={unansweredQuestions}
                        onChange={(e) => setUnansweredQuestions(e.target.value)}
                        className="w-full p-2 border rounded bg-gray-700 text-white"
                        placeholder="Unanswered questions will appear here..."
                    />
                    <Button onClick={handleSaveQuestions} className="mt-4" disabled={loading}>
                        {loading ? "Saving..." : "Save Questions"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default AdminDashboard;




// bg-gray-700 text-white