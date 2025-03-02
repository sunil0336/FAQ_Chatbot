const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = "./collegeInfo.js";
FILE_PATH1 = "./unanswered_questions.txt";
// const FILE_PATH = "./unanswered_questions.txt";

// API to get the existing text
app.get("/get-text", (req, res) => {
    if (fs.existsSync(FILE_PATH)) {
        const text = fs.readFileSync(FILE_PATH, "utf8");
        res.json({ text });
    } else {
        res.json({ text: "" });
    }
});

// API to save/update text
app.post("/save-text", (req, res) => {
    const { text } = req.body;
    fs.writeFileSync(FILE_PATH, text, "utf8");
    res.json({ message: "File saved successfully!" });
});


app.post("/save-unanswered", (req, res) => {
    const { questions } = req.body;
    if (!questions) {
        return res.status(400).json({ error: "No questions provided" });
    }

    fs.writeFileSync(QUESTIONS_FILE_PATH, questions.join("\n"), "utf8");
    res.json({ message: "Unanswered questions saved successfully!" });
});



//******** */

app.get("/get-unanswered", (req, res) => {
    fs.readFile(FILE_PATH1, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading file", error: err });
        }
        const questions = data ? data.split("\n").filter(q => q.trim() !== "") : [];
        res.json({ questions });
    });
});



app.listen(3000, () => console.log("Server running on port 3000"));
