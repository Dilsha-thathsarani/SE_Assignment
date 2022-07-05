import React from "react";
import "../components/CSS/login.css";

export default function CreateUser() {
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
          <p>User Type</p>
          <div className="dropdown">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Admin</option>
              <option>Student</option>
            </select>
          </div>

          <div>
            <button
              className="btn mt-3"
              style={{ marginTop: "15px" }}
              type="submit"
              name="submit"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
