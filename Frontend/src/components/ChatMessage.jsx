import ChatbotIcon from "./ChatbotIcon";
import { useEffect } from "react";

const ChatMessage = ({ chat, lastUserQuestion }) => {
  const renderTextWithLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Function to modify the text file
  const modifyFile = async (question) => {
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: "unanswered_questions.txt",
        types: [
          {
            description: "Text Files",
            accept: { "text/plain": [".txt"] },
          },
        ],
      });

      const writable = await fileHandle.createWritable();
      const existingContent = await fileHandle.getFile();
      const text = await existingContent.text();

      // Append new question in a new line
      const updatedText = text + "\n" + question;

      await writable.write(updatedText);
      await writable.close();

      console.log("✅ Question saved to file!");
    } catch (error) {
      console.error("❌ Error modifying file:", error);
    }
  };

  useEffect(() => {
    console.log("📢 Chat message received:", chat.text);
    console.log("📢 Last User Question:", lastUserQuestion);

    if (chat.text.includes("I couldn't find an answer, please contact the college.") && lastUserQuestion) {
      console.log("✅ Condition met! Saving question to file...");
      modifyFile(lastUserQuestion);
    }
  }, [chat.text, lastUserQuestion]);

  return (
    !chat.hideInChat && (
      <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>
        {chat.role === "model" && <ChatbotIcon />}
        <p className="message-text">{renderTextWithLinks(chat.text)}</p>
      </div>
    )
  );
};

export default ChatMessage;

