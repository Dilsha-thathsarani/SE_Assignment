import React, { useEffect } from "react";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/waste123/image/upload/v1656825925/RMTS/SE/n4lpivbglyiv4mgufyoz.png"
            alt=""
          />
        </div>
        <ul className="nav-area">
          <li>
            <a href="/create">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="/reg">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
