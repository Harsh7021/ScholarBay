## ScholarBay – Student Study Resource Sharing Web App

This project contains a full-stack ScholarBay implementation:

- Backend: Node.js + Express + MongoDB (in `server`)
- Frontend: React + Vite + Bootstrap (in `client`)

### 1. Backend setup

1. Open a terminal in `server`:

   ```bash
   cd server
   npm install
   ```

2. Create a `.env` file in `server` based on `.env.example` and fill in:

   - `MONGO_URI` – your MongoDB Atlas connection string
   - `JWT_SECRET` – any long random string
   - `CLIENT_URL` – `http://localhost:5173`

3. Start the API:

   ```bash
   npm run dev
   ```

   The API will run at `http://localhost:5000`.

### 2. Frontend setup

1. Open another terminal in `client`:

   ```bash
   cd client
   npm install
   npm run dev
   ```

2. Open the URL that Vite shows (default `http://localhost:5173`).

### 3. Main features implemented

- Email/password authentication with JWT
- User profile (name, contact, course, semester, college)
- Upload and browse PDF notes/books/papers with filters
- Built-in PDF viewer
- Simple progress-related actions (view/download counters)
- Ask/answer questions in an "Ask" section
- Gamification: points, levels, badges, leaderboard
- Dark mode toggle
- Floating chatbot widget with a demo, resource-aware answer
- Subscription plans page (UI only, no payments wired)

SSO logins (Google/GitHub/Facebook/Apple) and real payment processing can be added later using passport and a payment gateway like Razorpay or Stripe.

### 4. Deployment (Render + Netlify)

**Backend (Render):**

1. Push code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repo
4. Set **Root Directory** to: `server`
5. Set **Build Command**: `npm install`
6. Set **Start Command**: `npm start`
7. Add Environment Variables:
   - `MONGO_URI` = your MongoDB Atlas connection string
   - `JWT_SECRET` = a long random string
   - `CLIENT_URL` = `https://your-netlify-site.netlify.app,http://localhost:5173` (comma-separated, no spaces)
8. Deploy

**Frontend (Netlify):**

1. Push code to GitHub
2. Create a new site on Netlify
3. Connect your GitHub repo
4. Set **Base directory**: `client`
5. Set **Build command**: `npm run build`
6. Set **Publish directory**: `dist`
7. Add Environment Variable (optional):
   - `VITE_API_URL` = `https://your-render-service.onrender.com/api` (if different from default)
8. Deploy

**Important:** After deploying, update `CLIENT_URL` on Render to include your Netlify URL so CORS works correctly.

