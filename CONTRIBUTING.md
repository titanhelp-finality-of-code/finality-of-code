# Recommended Contributing Guidelines
 
This document explains how our team collaborates, how branches are structured, and which files belong to which teammate.  
Please read this before contributing.

### ALSO SEE README.md especially about .env file in "Create your backend environment file"

---

## 🧱 Project Architecture Overview

TitanHelp follows a strict **three‑layer architecture**:

### 1. Presentation Layer (Frontend — React)
- UI components
- Pages/screens
- Client-side validation
- API calls to backend

### 2. Application Layer (Backend — Express)
- Routes
- Controllers
- Services
- Validation
- Error handling

### 3. Data Access Layer (Backend — Sequelize)
- Models
- Associations
- Database schema
- ORM logic

---

## 👥 Team Responsibilities

### **Presentation Layer Teammate**
Owns:
/frontend/src/components
/frontend/src/pages
/frontend/src/services
/frontend/src/hooks
/frontend/src/styles

### **Application Layer Teammate**
Owns:
/backend/src/controllers
/backend/src/services
/backend/src/routes

### **Data Access Layer Teammate**
Owns:
/backend/src/models
/backend/src/models/index.js

---

## 🌿 Branching Strategy

We use a clean, professional Git workflow.

### Main branches:
- `main` → always stable, production-ready
- `dev` → integration branch for all features

### Feature branches:
Create branches **from `dev`** using this format:

feature/<layer>-<short-description>

Examples:
feature/frontend-ticket-form
feature/app-incident-routes
feature/dal-incident-model
feature/setup-backend

---

## 🔁 Workflow

1. Pull latest `dev`
2. Create a feature branch
3. Commit frequently with clear messages
4. Push your branch
5. Open a Pull Request into `dev`
6. Request review from teammates
7. After testing, `dev` merges into `main`

---

## 🧪 Code Quality Expectations

- Keep files inside your layer only
- Use clear naming conventions
- Keep functions small and readable
- Add comments where needed
- Do not commit `.env` or secrets
- Do not commit `node_modules`

---

## 🚫 Do Not Modify
- `backend/src/app.js`
- `backend/src/config/database.js`
- Project folder structure
- Root README.md
- CONTRIBUTING.md

Unless you are the DAL teammate:
- Any file inside `/backend/src/models`

Unless you are the Application teammate:
- Any file inside `/backend/src/controllers`, `/services`, `/routes`

Unless you are the Frontend teammate:
- Any file inside `/frontend/src`

---

## ✔️ Placeholder Comments

Each placeholder file contains a comment like:

```js
// Application Layer: Implement controller logic here
Do not remove these until you implement the file.

📌 Final Notes
Communicate before making structural changes

Keep PRs small and focused

Respect layer boundaries

Ask questions early to avoid rework