# Notes App Frontend

Frontend client for the Notes Management Application built with React,
Redux Toolkit, Axios, and Vite.

Handles authentication, note management, and session handling via
HTTP-only cookies.



# Core Features

-   React SPA (Vite)
-   Redux Toolkit state management
-   Axios API layer with credentials enabled
-   Cookie-based authentication (no token storage in JS)
-   Modular component structure
-   Toast notifications
-   Layout-based routing



# Project Structure

    src/
    ├── api/
    ├── app/
    ├── components/
    ├── config/
    ├── layout/
    ├── middleware/
    ├── pages/
    ├── router/
    ├── utils/
    ├── App.jsx
    └── main.jsx



# Authentication Flow

-   Session hydration via AuthInitializer
-   Login with email, password, deviceId
-   Logout clears backend session + Redux state
-   Password reset & email verification supported

All token handling occurs server-side.



# Notes Management

-   Create new notes
-   Edit existing notes
-   Delete notes
-   Organized note board view
-   State managed via Redux slice



# Environment Variables

Required:

VITE_API_BASE_URL

Must match backend CORS configuration.



# Development

npm install npm run dev

Runs on Vite development server.



# License

MIT License

# Note

Dummy data used for demo purpose. 
- **Email:** demo.user1.chariot057@aleeas.com 
- **Password:** Demo@1234
