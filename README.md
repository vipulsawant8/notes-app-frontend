# Notes App — Frontend (React + Redux)

Frontend for a **Notes application** built with **React**, **Redux Toolkit**, and **Vite**.  
Implements authentication-aware UI, paginated notes listing, pin/unpin behavior, and clean global state management.

Built to demonstrate **production-style frontend architecture**, reusable components, and real-world API integration for portfolio and interview review.

---

## Badges

![CI](https://github.com/vipulsawant8/notes-app-frontend.git/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/github/license/vipulsawant8/notes-app-frontend)
![Vercel](https://vercelbadge.vercel.app/api/notes-app-frontend)

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

## Demo Account (For Reviewers)

To make evaluation easy, the app can be tested using demo credentials:

- **Email:** demo@notes.app  
- **Password:** demopassword  

All notes shown in the demo are **fictional test data**, inspired by pop‑culture references  
(e.g. *Justice League*, fictional characters, or placeholder content).

⚠️ **No real user data is used.**  
The dataset exists purely for demonstration and UI/UX review.

---

## Environment Setup

Create environment files based on the example:

```bash
cp .env.example .env
```

Set the API base URL and other required values as needed.

> Environment files are ignored by Git. Do not commit secrets.

---

## Run Locally

```bash
npm install
npm run dev
```

---

## Project Structure (High Level)

- `src/app` — Redux store and slices
- `src/components` — Reusable UI components
- `src/pages` — Route-level pages
- `src/layout` — Auth and app layouts
- `src/api` — Axios configuration
- `src/router` — Application routing

---

## Notes for Reviewers

- Frontend connects to a separate Notes API backend
- Focus is on clarity, scalability, and predictable state flow
- Demo data is fictional and resettable
- Built strictly for learning, portfolio, and interview purposes

---
