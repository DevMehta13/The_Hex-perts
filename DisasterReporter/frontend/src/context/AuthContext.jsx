import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Save user data after login
    localStorage.setItem("authToken", userData.token); // Save token if applicable
  };

  const logout = () => {
    setUser(null); // Clear user data
    localStorage.removeItem("authToken"); // Remove token
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);