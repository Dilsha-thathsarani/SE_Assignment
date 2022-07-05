import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/reg" element={<Register />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
