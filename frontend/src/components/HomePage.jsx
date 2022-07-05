import React from "react";
import "../components/CSS/home.css";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Header() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="loading">
      {loading ? (
        <ClipLoader color={"#D0021B"} loading={loading} size={100} />
      ) : (
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
                  <a href="/create">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="/login">Login</a>
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
              <a href="/notes">ADD NOTE</a>
            </div>
          </header>
        </>
      )}
    </div>
  );
}
