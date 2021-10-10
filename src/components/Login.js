import { useRef, useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";

function Login() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const authContext = useContext(AuthContext);

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(localStorage.getItem("token"));
      authContext.login(data.token);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    loginUser(email, password);
  };

  return (
    <>
      <div className="login-box">
        <div className="image">
          <img
            className="login-image"
            src="./images/bored.png"
            alt="doctor illustration"
            // width="400px"
          />
        </div>
        <form className="the-form" onSubmit={submitForm}>
          <h1>Login</h1>
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

          <input type="checkbox" name="remember"></input>
          <label className="remember" htmlFor="remember">
            Remember me
          </label>
          <br></br>

          <button type="submit">LOGIN</button>
          <br></br>

          <Link className="link" to="/forgot">
            Forgot Password?
          </Link>
          <br></br>
          <Link className="link" to="/signup">
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </>
  );
}
export default Login;
