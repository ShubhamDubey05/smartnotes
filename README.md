# 🧠 SmartNotes – AI Powered Notes Organizer (MERN + Gemini AI)

SmartNotes is a production-level full-stack AI application that allows users to upload PDFs/notes, interact with AI (Google Gemini), generate summaries, and download AI-generated content as PDF.

It includes a complete authentication system, protected routes, and AI-powered document processing.

---

## 🚀 Features

### 🔐 Authentication System
- User Register / Login
- JWT Authentication (Secure Routes)
- Password Hashing using bcrypt
- Protected APIs for authorized users only

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

## 📂 Project Structure (Industry Level)
 SmartNotes/
│
├── client/ (Frontend)
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Images, icons, static files
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Pages (Home, Login, Register, Dashboard)
│   │   ├── context/         # Auth & Global State (Context API)
│   │   ├── services/        # API service layer (Axios calls)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Helper functions
│   │   ├── App.jsx          # Main React App
│   │   └── main.jsx         # Entry point
│
├── server/ (Backend)
│   ├── config/              # DB connection, Gemini config
│   ├── controllers/         # Business logic (Auth, Notes, AI)
│   ├── models/              # Mongoose schemas (User, Notes)
│   ├── routes/              # API routes (auth, notes, ai)
│   ├── middleware/          # JWT authentication middleware
│   ├── services/            # External services (Gemini, PDF)
│   ├── utils/               # Helper functions
│   ├── uploads/             # Uploaded files storage
│   ├── app.js               # Express app setup
│   └── server.js            # Server entry point
│
├── .env                     # Environment variables
├── package.json
└── README.md


---

## 🔐 Authentication Flow

1. User registers → password hashed & stored in DB  
2. User logs in → JWT token generated  
3. Token stored in frontend (localStorage)  
4. Token used for protected routes  
5. Logout clears session  

---

## 🤖 AI Workflow (Gemini)

---

## 🎯 Learning Outcomes

- Full-stack MERN architecture
- Secure authentication system (JWT)
- AI integration using Google Gemini API
- File upload & processing system
- PDF generation from dynamic data
- Scalable industry-level project structure

---

## 🔮 Future Enhancements

- 🧠 AI Chat Assistant (chat with PDFs)
- 🔍 Smart search inside notes
- 📱 Mobile responsive PWA
- ☁️ Cloud storage (AWS / Cloudinary)
- 🎤 Voice-to-notes feature
- 🤝 Collaborative notes sharing
- 📊 Analytics dashboard for notes

---

## 👨‍💻 Developer

- Name: Shubham Dubey  
- Role: MERN Stack Developer  

---

## 📌 Note

This project is actively evolving with AI enhancements and production-level optimizations for better scalability and user experience.