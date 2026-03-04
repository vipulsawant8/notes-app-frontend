# Notes App Frontend

Frontend client for the **Notes Management Application**, built with **React, Vite, and Redux Toolkit**.
The application communicates with a secure backend API and provides authenticated note management with a modern UI and structured state management.

The frontend implements **JWT cookie-based authentication, protected routes, form validation, and centralized state management**.

# Core Features

* React + Vite fast development environment
* Redux Toolkit state management
* Axios API client with interceptors
* Cookie-based authentication
* Automatic session initialization
* Protected routes for authenticated users
* Form components with reusable inputs
* Error boundary handling
* Loading state management

# Tech Stack

Frontend technologies used in this project:

* **React**
* **Vite**
* **Redux Toolkit**
* **Axios**
* **JavaScript (ES6+)**
* **CSS**

# Project Structure

```
src/
├── api/
│   └── axios.js
│
├── app/
│   ├── store.js
│   ├── logoutHandler.js
│   └── features/
│       ├── auth/
│       │   └── authSlice.js
│       └── notes/
│           └── noteSlice.js
│
├── components/
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   ├── CreateUserAccountForm.jsx
│   │   ├── ForgotPasswordForm.jsx
│   │   ├── ResetPasswordForm.jsx
│   │   ├── ChangePasswordForm.jsx
│   │   ├── LogoutButton.jsx
│   │   └── AuthInitializer.jsx
│   │
│   ├── form/
│   │   ├── CustomForm.jsx
│   │   ├── InputText.jsx
│   │   ├── InputTextarea.jsx
│   │   ├── InputSelect.jsx
│   │   ├── InputCheckbox.jsx
│   │   ├── InputFile.jsx
│   │   └── SubmitButton.jsx
│   │
│   ├── navbar/
│   │
│   └── common/
│       ├── ErrorBoundary.jsx
│       └── PageLoader.jsx
│
├── assets/
│
├── App.jsx
├── App.css
└── main.jsx
```

# Application Architecture

The frontend follows a **feature-based architecture**.

### 1. API Layer

`src/api/axios.js`

Centralized Axios instance configured for:

* API base URL
* Credential handling for cookies
* Request/response interceptors
* Automatic error handling

This layer abstracts communication with the backend API.

### 2. Global State (Redux Toolkit)

State is organized into **feature slices**.

**Auth Slice**

* User authentication state
* Login status
* Session initialization

**Notes Slice**

* Notes list
* Note CRUD operations
* Loading states

Redux store is configured in:

```
src/app/store.js
```

### 3. Authentication System

Authentication is handled through **secure cookies issued by the backend**.

Workflow:

1. User logs in
2. Backend sets HTTP-only cookies
3. Frontend initializes session using `AuthInitializer`
4. Redux state is updated with authentication status
5. Protected routes become accessible

Key components:

* `LoginForm`
* `CreateUserAccountForm`
* `ForgotPasswordForm`
* `ResetPasswordForm`
* `ChangePasswordForm`
* `LogoutButton`

### 4. Form System

Reusable form architecture located in:

```
src/components/form/
```

Reusable components include:

* InputText
* InputTextarea
* InputSelect
* InputCheckbox
* InputFile
* SubmitButton

Benefits:

* Consistent form UI
* Reusable validation logic
* Reduced code duplication

### 5. Error Handling

Global error handling is implemented with:

```
ErrorBoundary.jsx
```

This prevents the entire application from crashing if a component throws an error.

### 6. Loading State

Loading indicators are handled via:

```
PageLoader.jsx
```

This improves UX during async operations such as:

* authentication
* API requests
* session initialization

# Demo Access

A demo account is available to explore the application without creating a new user.

**Demo Credentials**

Email: `demo@notesapp.test`
Password: `demo12345`

The demo account contains sample notes to demonstrate the application's functionality, including:

* Note creation
* Note updates
* Note deletion
* Authenticated user sessions

These notes are pre-seeded in the database for demonstration purposes.

# Demo Data Notice

All data included in the demo account is **fictional and created solely for demonstration purposes**.

* Names
* Email addresses
* Notes content
* Metadata

None of the data represents real individuals or personal information.

# Email System Notice

The application uses an email service for features such as:

* Account verification
* Password reset

For development and demonstration:

* Emails are routed through **Brevo (Sendinblue)**.
* The sending email account is connected to a **personal Gmail address via SimpleLogin aliasing**.

This setup ensures:

* Personal email privacy
* Controlled email routing
* Safe testing of email flows

No sensitive personal information is stored or exposed in this repository.

# Important

The demo credentials are provided **only for testing the application features**.
They should **not be used in production environments**.

In production environments:

* Demo accounts should be removed.
* Email services should use dedicated production domains.

# Environment Variables

Create a `.env` file in the project root.

Example:

```
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

# Local Development

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

The application will start using **Vite's development server**.

# Backend Integration

This frontend connects to the **Notes App Backend API** which provides:

* Authentication endpoints
* Notes CRUD endpoints
* Email verification
* Password reset

Ensure the backend server is running before starting the frontend.

# Security Considerations

* Authentication tokens stored in **HTTP-only cookies**
* API requests include credentials automatically
* Sensitive operations handled by backend validation
* Frontend only manages UI state and session awareness

# License

MIT License