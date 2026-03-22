#  To-Do List API

##  Project Description
This is a RESTful To-Do List API built using Node.js, Express, and MongoDB.  
It allows users to create, view, update, complete, and delete tasks.

---

##  Features
- Create Task
- View All Tasks
- Update Task
- Mark Task as Complete
- Delete Task

---

##  Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose


---
##  Authentication

This project uses JSON Web Token (JWT) for secure authentication and authorization.

### Features:
- User Signup & Login
- Password hashing using bcrypt
- JWT token generation on login
- Protected routes using middleware
- Token-based authentication system

### How it works:
1. User logs in with email & password
2. Server verifies credentials
3. JWT token is generated
4. Token is sent to client
5. Client sends token in headers for protected routes

### Authorization:
- Only authenticated users can access protected APIs
- Token is verified using middleware

### Example Header:
Authorization: Bearer <your_token>
##  Installation

```bash
npm install