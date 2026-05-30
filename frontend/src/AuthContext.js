import React, { createContext, useContext } from 'react';
import { 
  auth, 
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from './firebase';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        user: { uid: 'demo-user' },
        loading: false,
        logout: () => {}
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};