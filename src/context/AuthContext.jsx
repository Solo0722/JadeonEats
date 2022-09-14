import { createContext, useEffect, useState } from "react";
import { API } from "../utils/axios";

export const AuthenticationContext = createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setCurrentUser(currentUser);
  }, [currentUser]);

  const signIn = async (formData) => {
    try {
      const { data } = await API.post("/users/signin", formData);
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const signUp = async (formData) => {
    try {
      const { data } = await API.post("/users/signup", formData);
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthenticationContext.Provider value={{ signIn, signUp, currentUser }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
