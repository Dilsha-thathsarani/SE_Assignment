import React from "react";

export default function Header() {
  return (
    <div>
      <>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
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
                <a href="/user">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
              <li>
                <a href="/reg">Register</a>
              </li>
            </ul>
          </div>
          <div className="welcome-text">
            <h1>
              MY <span> NOTES</span>
            </h1>
            <a href="/note">ADD NOTE</a>
          </div>
        </header>
      </>
    </div>
  );
}
