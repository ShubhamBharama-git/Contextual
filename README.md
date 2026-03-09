# Contextual

A fullstack social media web app where users can upload images and get AI-generated captions powered by Google Gemini. Built as a learning project to practice fullstack development.

---

## Features

- User registration and login with JWT authentication
- Passwords hashed with bcrypt
- JWT stored in HTTP-only cookies
- Images stored on ImageKit CDN
- Upload an image → Gemini AI generates a caption automatically
- View all posts on the feed (public)
- Protected routes — only logged in users can create posts

---

## Tech Stack

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcrypt
- Multer (file uploads)
- ImageKit ( store images )
- Google Gemini API (caption generation)
- Cookie-parser + CORS

**Frontend**
- React + Vite
- Tailwind CSS
- React Router DOM
- Axios
- Context API

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Google Gemini API key

### Backend Setup

```bash
# clone the repo
git clone https://github.com/ShubhamBharama-git/Contextual.git
cd Contextual

# install dependencies
npm install

# create .env file
touch .env
```

Add these to your `.env`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
```

```bash
# start backend
node server.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## How It Works

1. User registers or logs in → JWT stored in cookie
2. User uploads an image only
3. Backend receives image via Multer → sends to Gemini API
4. Gemini generates a caption → saved to MongoDB with the post
5. Home page fetches all posts and displays them as cards

---

## Author

**Shubham Bharama**
- GitHub: [@ShubhamBharama-git](https://github.com/ShubhamBharama-git)
