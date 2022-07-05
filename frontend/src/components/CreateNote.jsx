import React from "react";

export default function CreateNote() {
  return (
    <div>
      <div className="inner">
        <div className="photo">
          <img src="" />
        </div>
        <div className="user-form">
          <h2>My Notes</h2>
          <form>
            <input type="text" placeholder="Title" />

            <input type="text-area" placeholder="Description" />

            <div className="action-btn ">
              <button className="btn primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
