import { useRef } from "react";
const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";
    // Update chat history with the user's message
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
    // Delay 600 ms before showing "Thinking..." and generating response
    setTimeout(() => {
      // Add a "Thinking..." placeholder for the bot's response
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
      // Call the function to generate the bot's response

      // generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);

      generateBotResponse([...chatHistory, { role: "user", text: `give me short and meaningful answer Using the details provided above and if i ask question in another lanhuage then give me asnwer in that language , please address this query: ${userMessage}` }]);

      // generateBotResponse([...chatHistory, { role: "user", text: `give me short and meaningful answer Using the details provided above and if i ask question in another lanhuage then give me asnwer in that language and if you didn't found answer in given data then just say 'I couldn't find an answer, please contact college.', please address this query: ${userMessage}` }]);
    }, 600);
  };
  return (
    <form onSubmit={handleFormSubmit} className="chat-form">
      <input ref={inputRef} placeholder="Message..." className="message-input" required />
      <button type="submit" id="send-message" className="material-symbols-rounded">
      ↩
      </button>
    </form>
  );
};
export default ChatForm;