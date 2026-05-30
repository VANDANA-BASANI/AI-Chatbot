// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ChatInterface from './ChatInterface';
import StableDiffusionInterface from './StableDiffusionInterface';
import PremiumProfile from './PremiumProfile';
import { AuthProvider, useAuth } from './AuthContext';
import './App.css';
import './ReactToastify.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="821519445369-caf5h95ulsduvk8fe6e1osoi54bos1pt.apps.googleusercontent.com">
      <AuthProvider>
        <Router>
          <div className="app-container">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                 path="/chat"
                 element={<ChatInterface />}
              />
              <Route
               path="/image-generation"
               element={<StableDiffusionInterface />}
              />
              <Route
               path="/premium"
               element={<PremiumProfile />}
              />
              <Route path="/" element={<Navigate to="/chat" />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

const ProtectedRoute = ({ children }) => {
  return children;
};

export default App;