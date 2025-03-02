import React from 'react'
import Chatbot from './components/Chatbot'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div>
      
      <Router>
            <Routes>
                <Route path="/" element={<Chatbot />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App