import React from "react";
import "../components/CSS/note.css";

export default function CreateNote() {
  return (
    <div>
      <div className="inner">
        <div className="photo">
          <img src="https://res.cloudinary.com/waste123/image/upload/v1656833398/RMTS/SE/ngvm9vq9whtyg9wbwjhc.png" />
        </div>
        <div className="user-form">
          <h2>My Notes</h2>
          <form>
            <input type="text" placeholder="Title" />

            <input type="text-area" placeholder="Description" />

            <div className="action-btn " style={{ marginLeft: "70px" }}>
              <button className="btn primary">Create Note</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
