import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEi98XoUpw0C9gNGLqO1KXhWEBmBLH9nk",
  authDomain: "ai-chatbot-bcce4.firebaseapp.com",
  projectId: "ai-chatbot-bcce4",
  storageBucket: "ai-chatbot-bcce4.firebasestorage.app",
  messagingSenderId: "160070794869",
  appId: "1:160070794869:web:07c6e377d163d61aad023c",
  measurementId: "G-PRTJH7VWNZ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
};

export default app;