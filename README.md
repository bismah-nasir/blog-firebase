# 📝 Firebase Blog App

A simple blog management web app built using **React** and **Firebase**. Users can create, read, update, and delete blog articles, with authentication support and real-time data storage.

---

## 🚀 Features

- 🔐 **User Authentication** (Google Sign-In)
- 🖼️ **Display User Profile** (photo and name)
- ✍️ **Create, Read, Update, Delete (CRUD)** for articles
- 🔍 Search articles by title
- 🔄 Real-time updates after create/update/delete
- 🎨 Clean, responsive UI with custom styling
- ☁️ Data stored in **Cloud Firestore**

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── App.css              # Custom styles
│   ├── App.jsx              # Main app logic and state
│   ├── Article.jsx          # Display Article
│   ├── ArticleEntry.jsx     # Form to add/update articles
│   ├── Auth.jsx             # Authorization
│   └── Nav.jsx              # Sidebar with article list
├── services/
│   ├── articleService.js    # CRUD Services
│   ├── authService.jsx      # Authorization Services         
├── firebaseConfig.js        # Firebase config and setup
└── main.jsx
```

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Firebase (Firestore + Authentication)
- **Styling**: CSS

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/bismah-nasir/blog-firebase.git
cd blog-firebase
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

- Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
- Enable:
  - Firestore Database
  - Authentication (Google Sign-In)
- In `src/firebase.js`, paste your Firebase config:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

### 4. Run the Development Server

```bash
npm run dev
```

---

## 📸 Screenshots

![View](https://github.com/bismah-nasir/blog-firebase/blob/26808dc2db4514b64335a0ffc145d5975633933e/firebase-blog.PNG)

---
