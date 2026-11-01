# StaffSync – Modern Human Resource Management Solution

A MERN-stack HR management web application for the SkillWallet Full Stack Developer project.

## Features
- Role-based access: HR, Manager, Employee
- Employee management
- Leave application and approval workflow
- Attendance marking and tracking
- Company announcements
- Dashboard statistics
- REST API with Express + MongoDB
- React responsive frontend

## Tech Stack
MongoDB, Express.js, React.js, Node.js, JWT, bcryptjs, Axios, Vite

## 1. Requirements
- Node.js 18+ (Node 20 LTS recommended)
- npm
- MongoDB local installation OR a MongoDB Atlas connection string
- VS Code

## 2. Backend setup
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```
Linux/macOS:
```bash
cp .env.example .env
```

Edit `.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/staffsync
JWT_SECRET=change_this_to_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

Seed demo users and sample data:
```bash
npm run seed
```

Demo accounts:
- HR: hr@staffsync.demo / Password123!
- Manager: manager@staffsync.demo / Password123!
- Employee: employee@staffsync.demo / Password123!

## 3. Frontend setup
Open another terminal:
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```
Linux/macOS:
```bash
cp .env.example .env
```
The frontend opens at http://localhost:5173

## 4. What to demonstrate to the mentor
1. Login as HR and show dashboard.
2. Open Employees and add/view employees.
3. Create an announcement.
4. Login as Employee and apply for leave + mark attendance.
5. Login as Manager and approve/reject the leave request.
6. Return to HR dashboard and show updated statistics.

## 5. GitHub submission
Create a GitHub repository named `staffsync-hrms`, then upload the entire `StaffSync` folder. Keep `backend/.env` out of GitHub; `.gitignore` already excludes it.

## 6. Deployment idea
Deploy backend as a Node/Express service and frontend as a static/Vite site. Set the frontend API URL to the deployed backend URL and add the deployed frontend URL to the backend `CLIENT_URL` environment variable.

## 7. SkillWallet submission
On the StaffSync project page, use **Add Demo Link** for the live frontend URL and **Add Github Link** for the GitHub repository URL. Save/update the links, then complete the remaining project sections shown in the right-side progress panel.

> Important: SkillWallet's exact mentor checklist may contain additional hidden/accordion tasks. The implementation in this package covers the functionality described in the visible project overview; if your Workspace/Kanban shows an extra mandatory task, send me a screenshot and I can add it.
