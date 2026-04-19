# 🧠 SmartNotes – AI Powered Notes Organizer (MERN + Gemini AI)

SmartNotes is a production-level full-stack AI application that allows users to upload PDFs/notes, interact with AI (Google Gemini), generate summaries, and download AI-generated content as PDF.

It includes a complete authentication system, protected routes, and AI-powered document processing.

---

## 🚀 Features

### 🔐 Authentication System
- User Register / Login
- JWT Authentication (Secure Routes)
- Password Hashing using bcrypt
- Protected APIs for authorized users

---

### 📄 Notes / PDF Management
- Upload notes / PDF files
- Extract and process text from files
- View uploaded notes
- Delete user-specific notes

---

### 🤖 AI Integration (Gemini API)
- Ask questions from uploaded PDFs
- AI-based summarization of documents
- Smart answers from notes
- Structured content generation using Gemini AI

---

### 📑 PDF Generator
- Convert AI response into downloadable PDF
- Generate structured study notes
- Export AI summaries as documents

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Context API (State Management)
- Axios (API Calls)
- Tailwind CSS / Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt.js

### AI + Utilities
- Google Gemini API
- Multer (File Upload Handling)
- PDFKit / jsPDF (PDF Generation)

---

## 📂 Project Structure

### 🖥️ Client (Frontend)
- assets → images, icons, static files  
- components → reusable UI components  
- pages → Login, Register, Dashboard, Home  
- context → authentication & global state  
- services → API calls (Axios layer)  
- hooks → custom React hooks  
- utils → helper functions  
- App.jsx → main React app  
- main.jsx → entry point  

---

### ⚙️ Server (Backend)
- config → database & Gemini configuration  
- controllers → business logic (auth, notes, AI)  
- models → MongoDB schemas (User, Notes)  
- routes → API routes (auth, notes, ai)  
- middleware → JWT authentication  
- services → external services (Gemini, PDF)  
- utils → helper functions  
- uploads → stored files  
- app.js → express app setup  
- server.js → server entry point  

---

## 🔐 Authentication Flow

1. User registers → password is hashed & stored in DB  
2. User logs in → JWT token generated  
3. Token stored in frontend (localStorage)  
4. Token used for protected routes  
5. Logout clears session  

---

## 🤖 AI Workflow (Gemini)
