import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setIsAuth(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ isAuth, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
