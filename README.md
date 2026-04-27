<div align="center">
  
# 🏛️ Sovereign Portal

**The Ultimate Unified Civilian Interface**

[![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-darkgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

*Sovereign Portal is a next-generation MERN-stack architecture designed to bridge the gap between citizens and government resources. A seamless, dynamic, and highly secure hub for schemes, jobs, document vaulting, and AI-enabled grievance redressals.*

</div>

---

## ✨ Features

- **🛡️ Cryptographic Vault:** A highly secure interface simulating DigiLocker functionalities to store and retrieve personal identification documents natively.
- **💼 Dynamic Employment Hub:** An integrated jobs portal specifically curated with algorithmic filtering for Government and Private sector opportunities.
- **📜 National Welfare Schemes:** Live browsing and application tracking for national and state welfare schemes tailored to the user's demographic.
- **⚖️ Active Grievance Redressal:** A real-time REST API-driven tracking system where citizens can submit complaints against civic anomalies and track resolution statuses.
- **🤖 Secure State AI Assistant:** An intelligent chatbot interface designed to answer civilian queries instantaneously regarding policies and portal navigation.

## 🛠️ Technology Stack

**Frontend (Client)**
- React.js (Vite Tooling)
- Custom CSS + Glassmorphism UI Patterns
- Lucide React Icons
- React Router DOM

**Backend (Server)**
- Node.js & Express.js
- MongoDB (Mongoose Schema Modeling)
- CORS & Environment Configs

---

## 🚀 Quick Start (Running Locally)

To get a local copy up and running, follow these simple steps.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed on your machine. You will also need a MongoDB Atlas URI.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/britansh-pandey/Sovereign-Portal.git
   cd Sovereign-Portal
   ```

2. **Setup the Backend**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file inside `backend/` and add your database link:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<your_username>:<your_password>@cluster0...
   AI_API_KEY=your_api_key_here
   ```
   Start the server:
   ```bash
   node server.js
   ```

3. **Setup the Frontend**
   Open a new terminal window:
   ```bash
   cd frontend
   npm install
   ```
   Create a `.env` file inside `frontend/` and add the backend target:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
   Start the Vite compiler:
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Team & Contributions

This project was built collaboratively with separated system architectures:

* **Britansh Prabhat Pandey & Prateek Modi** - Frontend Leads & UI/UX Architects (React, Routing, State Management, Interface Aesthetics).
* **Abhishek Yadav** - Backend & API Developer (Node.js, Express, Controller Logic, JWT Setup).
* **Shivang Saxena** - Database Engineer (MongoDB Schema Modelling, Seed Scripts, Data Integrations).

---

## 🌐 Deployment
The portal is optimized for split deployment:
- **Client Deployment:** Vercel / Netlify
- **API Deployment:** Render / Railway
- **Database Hosting:** MongoDB Atlas Cloud

<div align="center">
  <i>Built with ❤️ as a Mini Project</i>
</div>
