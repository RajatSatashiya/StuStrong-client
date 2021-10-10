// import React from "react";
import { useRef, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";

function Signup() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const authContext = useContext(AuthContext);

  const createUser = async (name, email, password) => {
    try {
      const response = await fetch("/users", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log("data" + JSON.stringify(data));
      authContext.login(data.token);
    } catch (e) {
      console.log("Error: " + e);
    }
  };
  const submitForm = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    createUser(name, email, password);
  };
  return (
    <>
      <div className="login-box">
        <div className="image">
          <img
            className="login-image2"
            src="./images/students.png"
            alt="doctor illustration"
          />
        </div>
        <form className="the-form" onSubmit={submitForm}>
          <h1>Register</h1>
          <label htmlFor="name">Username</label>
          <br></br>
          <input
            type="text"
            name="name"
            placeholder="Enter username"
            required
            ref={nameInputRef}
          ></input>
          <br></br>

          <label htmlFor="email">Email Address</label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            ref={emailInputRef}
          ></input>
          <br></br>

          <label htmlFor="password">Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter 6 characters or more"
            required
            ref={passwordInputRef}
          ></input>

          <br></br>
          <input type="checkbox" name="remember"></input>
          <label className="remember" htmlFor="remember">
            Remember me
          </label>
          <br></br>

          <button type="submit">Register</button>
          <br></br>

          <Link className="link" to="/login">
            Already have an account? Sign In
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
