import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Layout/Navbar.jsx';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';
import ChatbotWidget from './components/chat/ChatbotWidget.jsx';

import HomePage from './pages/HomePage.jsx';
import LibraryPage from './pages/LibraryPage.jsx';
import UploadPage from './pages/UploadPage.jsx';
import AskPage from './pages/AskPage.jsx';
import LeaderboardPage from './pages/LeaderboardPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ask"
          element={
            <ProtectedRoute>
              <AskPage />
            </ProtectedRoute>
          }
        />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <ChatbotWidget />
    </AuthProvider>
  </ThemeProvider>
);

export default App;

