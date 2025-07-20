# 🔗 URL Shortener

A basic full-stack project to shorten URLs. This application accepts a valid long URL and generates a shortened version that redirects to the original one. It also tracks the number of visits or clicks on each shortened URL.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Frontend:** EJS (Embedded JavaScript Templates)  
- **Tools:** Postman, MongoDB Compass

## 📁 Project Structure

url-shortener/
│
├── controllers/ # Request handlers for routes
├── models/ # Mongoose schemas
├── routes/ # API and view routes
├── service/ # JWT & helper services
├── views/ # EJS frontend templates
├── node_modules/
│
├── connect.js # MongoDB connection config
├── index.js # Main server file
├── package.json # Project metadata and dependencies
├── package-lock.json
├── README.md



## 🚀 Features

- ✅ Shorten any valid URL
- ✅ Redirect to the original URL from the short one
- ✅ Track total number of clicks on each URL
- ✅ JWT-based user authentication
- ✅ User login/signup system
- ✅ EJS templating for basic UI

## 🔐 Authentication

- Signup and login functionality
- Protected routes using JWT tokens
- Auth middleware for route access control

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ishika-codeit/url-shortener.git
   cd url-shortener
