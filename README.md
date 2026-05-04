# WMT Hotel Management System

A full-stack hotel management mobile application built with **React Native (Expo)** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## 📁 Project Structure

```
WMT_new/
├── backend/                  # Node.js + Express REST API
│   ├── index.js              # Entry point — connects MongoDB, starts server
│   ├── app.js                # Express app factory
│   ├── config.js             # Env-based configuration
│   ├── registerRoutes.js     # All API route mounts
│   ├── railway.toml          # Railway deployment config
│   ├── .env.example          # Environment variable template
│   ├── routes/               # 21 route files (auth, rooms, bookings, food, reviews…)
│   ├── models/               # 17 Mongoose models
│   ├── middleware/           # JWT auth guards (admin, staff, customer, role-based)
│   ├── services/             # Notification service
│   ├── lib/                  # Shared utilities (respond, reviewCache, etc.)
│   ├── seed/                 # Bootstrap data (roles, admin account, rooms)
│   ├── scripts/              # Utility scripts (cleanup, verification)
│   └── uploads/              # Uploaded images (git-ignored, auto-created)
│
└── frontend/                 # React Native (Expo) mobile app
    ├── App.js                # Root component — navigation + auth providers
    ├── index.js              # Expo entry point
    ├── app.json              # Expo configuration
    ├── babel.config.js       # Babel config for Expo
    ├── package.json          # Dependencies
    ├── .env.example          # Environment variable template
    ├── assets/               # App icons and splash screen
    └── src/
        ├── services/         # ★ API service layer (NEW)
        │   ├── api.js        # Axios client with multi-role token management
        │   ├── authService.js
        │   ├── bookingService.js
        │   ├── foodService.js
        │   ├── roomService.js
        │   ├── reviewService.js
        │   └── issueService.js
        ├── hooks/            # ★ Custom React hooks (NEW)
        │   ├── useApi.js     # Generic data-fetching hook
        │   ├── useAuth.js    # Auth context barrel export
        │   ├── useForm.js    # Form state + validation hook
        │   └── useRefresh.js # Pull-to-refresh hook
        ├── components/       # ★ Reusable UI components (NEW)
        │   ├── Button.js
        │   ├── Card.js
        │   ├── ErrorMessage.js
        │   ├── InputField.js
        │   ├── LoadingSpinner.js
        │   └── StatusBadge.js
        ├── context/          # Auth context providers
        │   ├── AdminAuthContext.js
        │   ├── CustomerAuthContext.js
        │   └── StaffAuthContext.js
        └── screens/          # 17 screen files
            ├── HomeScreen.js
            ├── LoginScreen.js
            ├── RegisterScreen.js
            ├── StaffLoginScreen.js
            ├── AdminLoginScreen.js
            ├── AdminDashboardScreen.js
            ├── RoomManagerDashboardScreen.js
            ├── KitchenManagerDashboardScreen.js
            ├── CustomerManagerDashboardScreen.js
            ├── ReviewManagerDashboardScreen.js
            ├── ReceptionistDashboardScreen.js
            ├── RoomsScreen.js
            ├── BookingsScreen.js
            ├── FoodScreen.js
            ├── ReviewsScreen.js
            ├── StaffScreen.js
            └── CustomerProfileScreen.js
```

---

## 🚀 Deployment Guide

### Step 1 — Deploy the Backend (Railway)

1. Go to [railway.app](https://railway.app) and create a new project.
2. Click **New Service → GitHub Repo** and select this repository.
3. Set the **Root Directory** to `WMT_new/backend`.
4. Railway will auto-detect `railway.toml` and use `npm start`.
5. Add a **MongoDB** plugin (or use MongoDB Atlas).
6. Set these environment variables in Railway → Variables:

   | Variable       | Value                                      |
   |----------------|--------------------------------------------|
   | `MONGODB_URI`  | Your Atlas/Railway MongoDB connection URI  |
   | `JWT_SECRET`   | A long random secret (min 32 chars)        |

7. Deploy and copy your Railway public URL (e.g. `https://xxx.up.railway.app`).

> **Health check:** `GET https://xxx.up.railway.app/api/health` → `{"ok":true,"db":true}`

---

### Step 2 — Configure the Frontend

1. Inside `WMT_new/frontend/`, copy `.env.example` to `.env`:
   ```
   cp .env.example .env
   ```
2. Edit `.env` and set your Railway backend URL:
   ```
   EXPO_PUBLIC_API_URL=https://xxx.up.railway.app/api
   ```

---

### Step 3 — Run the Frontend Locally

```bash
cd WMT_new/frontend
npm install
npm start          # Opens Expo DevTools
```

Scan the QR code with **Expo Go** (iOS/Android) or press `w` for web.

---

### Step 4 — Publish Frontend with EAS (Expo Application Services)

For a production build (APK/IPA):

```bash
npm install -g eas-cli
eas login
eas build --platform android   # or --platform ios
```

---

## 🔑 User Roles

| Role               | Login Screen       | Dashboard                       |
|--------------------|--------------------|---------------------------------|
| Guest (Customer)   | LoginScreen        | CustomerProfileScreen           |
| Admin              | AdminLoginScreen   | AdminDashboardScreen            |
| Room Manager       | StaffLoginScreen   | RoomManagerDashboardScreen      |
| Kitchen Manager    | StaffLoginScreen   | KitchenManagerDashboardScreen   |
| Customer Manager   | StaffLoginScreen   | CustomerManagerDashboardScreen  |
| Review Manager     | StaffLoginScreen   | ReviewManagerDashboardScreen    |
| Receptionist       | StaffLoginScreen   | ReceptionistDashboardScreen     |

---

## 🛠️ Local Development (Without Deployment)

### Backend
```bash
cd WMT_new/backend
cp .env.example .env     # Edit MONGODB_URI and JWT_SECRET
npm install
npm run dev              # Runs with nodemon on port 5000
```

### Frontend (LAN mode)
Edit `frontend/.env`:
```
EXPO_PUBLIC_API_URL=http://YOUR_LAN_IP:5000/api
```
Then run `npm start` in the `frontend/` folder.

---

## 📦 Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Mobile    | React Native, Expo SDK 54, Expo Router  |
| Navigation | @react-navigation/native-stack         |
| HTTP      | Axios (multi-role token management)     |
| Backend   | Node.js 18+, Express 4                  |
| Database  | MongoDB (Mongoose 8)                    |
| Auth      | JWT (jsonwebtoken), bcryptjs            |
| Uploads   | Multer                                  |
| Deploy    | Railway (backend), EAS (frontend)       |
