import React from "react";

export default function Register() {
  return (
    <div>
      <div className="login-box">
        <img src="#" className="avatar" />
        <h1>Register Here</h1>
        <form>
          <p>First Name</p>
          <input type="text" name="username" placeholder="Enter Firstname" />
          <p>Last Name</p>
          <input type="text" name="username" placeholder="Enter Lastname" />
          <p>Email</p>
          <input type="text" name="email" placeholder="Enter email" />
          <p>Date Of Birth</p>
          <input type="date" name="date" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <p>Telephone No</p>
          <input type="text" name="Phone Number" pattern="[7-9]{1}[0-9]{9}" />
          <button className="btn" type="submit" name="submit">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}
