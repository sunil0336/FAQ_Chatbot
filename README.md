# 📌 Chatbot for FAQ's

## 📖 Project Overview
This project is a chatbot system that allows users to ask questions. If the chatbot cannot find an answer, the last user question is saved in a text file for future improvements. The system consists of a **React frontend** and an **Express backend**.

## 🛠 Problem Statement
Many chatbot systems struggle to handle unknown queries effectively. When a chatbot fails to find an answer, the user is often left without a response. This project addresses this issue by **automatically logging unanswered questions** for manual review and future chatbot training.

## 💡 Solution
1. **Real-time Chatbot Interaction:** Users ask questions, and the chatbot responds instantly.
2. **Auto-Save Unanswered Questions:** If the chatbot cannot answer, the last user question is saved to a file.
3. **Admin Dashboard:** A simple interface to view and manage stored questions.
4. **MERN Stack Implementation:** The project uses MongoDB, Express.js, React.js, and Node.js.

---

## 🎨 Frontend (React.js)
### Features:
✅ Chat interface with real-time responses
✅ Highlights URLs in chatbot replies
✅ Saves unanswered questions automatically
✅ Admin dashboard for managing chatbot data

### Setup:
```bash
cd frontend
npm install
npm start
```
**Note : Need to create .env file and set Gemini API key then this will work

**Technologies Used:**
- React.js (useState, useEffect, axios for API calls)
- React Router for navigation
- Tailwind CSS for styling

---

## 🖥️ Backend (Express.js)
### Features:
✅ API to handle chatbot responses
✅ Logs unanswered questions in a text file (`unanswered_questions.txt`)
✅ Serves chatbot data to the frontend

### Setup:
```bash
cd backend
npm install
node server.js
```

**Technologies Used:**
- React.js for the Frontend 
- Express.js for the backend server
- File system (fs module) for storing unanswered questions



## 🚀 Future Enhancements
✅ Store unanswered questions in MongoDB instead of a text file.
✅ Train the chatbot using stored unanswered questions.

---

