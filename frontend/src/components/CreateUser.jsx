import React from "react";

export default function CreateUser() {
  return (
    <div>
      <div className="login-box">
        <img src="#" className="avatar" />
        <h1>Login Here</h1>
        <form>
          <p>Username</p>
          <input type="text" name="username" placeholder="Enter Username" />
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter Password" />
          <p>Role</p>
          <div className="dropdown">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Admin</option>
              <option>Student</option>
            </select>
          </div>

          <div>
            <button className="btn" type="submit" name="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
