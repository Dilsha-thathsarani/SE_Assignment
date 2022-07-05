import React from "react";
import "../components/CSS/home.css";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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

          <div className="welcome-text">
            <h1>
              MY <span> NOTES</span>
            </h1>
            <a href="/notes">ADD NOTE</a>
          </div>
        </>
      )}
    </div>
  );
}
