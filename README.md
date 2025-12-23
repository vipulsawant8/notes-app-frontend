# Notes App — Frontend (React + Redux)

[![Vercel Deployment](https://img.shields.io/badge/vercel-deployed-success?logo=vercel&logoColor=white)](https://notes-app-pi-mauve.vercel.app)
![CI](https://github.com/vipulsawant8/notes-app-frontend/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/github/license/vipulsawant8/notes-app-frontend)

**Live Demo:** https://notes-app-pi-mauve.vercel.app

Frontend for a **Notes application** built with **React**, **Redux Toolkit**, and **Vite**.  
Implements authentication-aware UI, paginated notes listing, pin/unpin behavior, and clean global state management.

Built to demonstrate **production-style frontend architecture patterns**, reusable components, and real-world API integration for portfolio and interview review.

---

## Features

- Authentication flow (login / register / logout)
- Protected routes and layout separation
- Notes CRUD interface
- Pagination support
- Pin / unpin notes
- Sorted notes (pinned first, latest updated)
- Global state management with Redux Toolkit
- Centralized API layer using Axios
- Reusable and scalable form system
- Toast-based notifications
- CI workflow using GitHub Actions

---

## Tech Stack

- React (Vite)
- Redux Toolkit
- React Router
- Axios
- Bootstrap / React-Bootstrap
- ESLint

---
## Backend Service

This frontend communicates with a **separately deployed backend API**.

- **Backend Repository:** https://github.com/vipulsawant8/notes-app-backend
- **Backend Deployment:** Render (Node.js + Express + MongoDB)

The backend handles authentication, authorization, and notes persistence.

---
## Demo Account (For Reviewers)

To make evaluation easy, the app can be tested using demo credentials:

- **Email:** demo.user@notes.test
- **Password:** Demo@1234  

All notes shown in the demo are **fictional test data**, inspired by pop-culture references  
(e.g. *Justice League*, fictional characters, or placeholder content).

⚠️ **No real user data is used.**  
The dataset exists purely for demonstration and UI/UX review and is shared
between the frontend and backend demo environment.

---

## Environment Setup

Create environment files based on the example:

```bash
cp .env.example .env

The backend uses its own environment configuration and is deployed separately.
See the backend repository for backend setup instructions.
