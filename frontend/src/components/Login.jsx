import React from "react";
import "../components/CSS/login.css";

export default function Login() {
  return (
    <div>
      <div className="login-box" style={{ marginTop: "10PX" }}>
        <img
          src="https://res.cloudinary.com/waste123/image/upload/v1656828180/RMTS/SE/dhq4bo7yviqktcedd4uo.jpg"
          className="avatar"
        />
        <h1>Login Here</h1>
        <form>
          <p>Username</p>
          <input type="text" name="username" placeholder="Enter Username" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <button className="btn" type="submit" name="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
