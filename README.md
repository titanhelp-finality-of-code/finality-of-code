# TitanHelp Ticket System

A full‑stack help desk ticket management system built using a three‑layer architecture.  
This project is developed collaboratively by a 3‑member team using React, Node.js/Express, and Sequelize.

---

## 🚀 Overview

TitanHelp allows users to:

- View all help desk tickets
- Create new tickets with validation
- Track ticket status and priority
- Store data in a relational database
- Maintain user and incident relationships

---

## 🧱 Technology Stack

### **Frontend (Presentation Layer)**
- React
- Fetch/Axios for API calls

### **Backend (Application Layer)**
- Node.js
- Express.js

### **Database (Data Access Layer)**
- SQLite (development)
- Sequelize ORM

---

## 🏗️ Architecture

TitanHelp uses a strict separation of concerns:

Presentation Layer → React UI
Application Layer → Express routes/controllers/services
Data Access Layer → Sequelize models & associations

This ensures:
- Clean code organization  
- Easy team collaboration  
- Minimal merge conflicts  
- Scalable structure  

---

## Setup Instructions

### Create your backend environment file 
After cloning the repo: 

1. Navigate to backend: cd backend 
2. Copy the example environment file: 
- Mac/Linux: cp .env.example .env 
- PowerShell: Copy-Item .env.example .env 
- CMD: copy .env.example .env 
3. Open .env and fill in your own values 

### IMPORTANT NOTES & WHY: 
.env is NOT committed to GitHub because our .gitignore file. 
Only .env.example is shared. This is done becue .env file contains machine‑specific settings and must never be committed to GitHub.

---

## 🧪 Running the Project

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm start

---

## 👥 Team Responsibilities

### Setup Lead
- Project structure
- `app.js`
- `database.js`
- Placeholder files
- GitHub repo setup

### Application Layer Teammate
- Routes
- Controllers
- Services
- Validation
- Error handling

### Data Access Layer Teammate
- Sequelize models
- Associations
- Database schema

### Presentation Layer Teammate
- React components
- Pages
- UI logic
- API integration

---

## 📌 Notes

- Do not modify files outside your assigned layer
- Use feature branches
- All PRs merge into `dev` before `main`
- `.env` files are not committed
# finality-of-code
Group Programming Project - CEN4031



