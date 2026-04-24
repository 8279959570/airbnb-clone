import { createContext } from "react";

export const authDataContext = createContext();

const AuthProvider = ({ children }) => {
  const serverUrl = "http://localhost:5000";

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthProvider;
