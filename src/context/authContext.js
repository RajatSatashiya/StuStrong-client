import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  console.log("initial bhai: " + initialToken);
  const [token, setToken] = useState(initialToken);

  const userLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const loginHandler = (token) => {
    setToken(token);
    console.log("yes");
    localStorage.setItem("token", token);
  };
  const contextValue = {
    token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
