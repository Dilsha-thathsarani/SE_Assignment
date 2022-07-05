import React from "react";
import "../components/CSS/login.css";
export default function Register() {
  return (
    <div>
      <div className="login-box">
        <img
          src="https://res.cloudinary.com/waste123/image/upload/v1656828180/RMTS/SE/dhq4bo7yviqktcedd4uo.jpg"
          className="avatar"
        />
        <h1>Register Here</h1>
        <form>
          <p>First Name</p>
          <input
            type="text"
            name="userFirstname"
            placeholder="Enter Firstname"
          />
          <p>Last Name</p>
          <input type="text" name="userLastname" placeholder="Enter Lastname" />
          <p>Email</p>
          <input type="email" name="email" placeholder="Enter email" />
          <p>Date Of Birth</p>
          <input type="date" name="date" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <p>Phone No</p>
          <input
            type="tel"
            name="Phone Number"
            pattern="+94[7-9]{2}-[0-9]{3}-[0-9]{4}"
            value="+94"
          />

          <button className="btn" type="submit" name="submit">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}
