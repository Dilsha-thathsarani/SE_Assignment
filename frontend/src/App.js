import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/reg" element={<Register />} exact />
          <Route path="/create" element={<CreateUser />} exact />
          <Route path="/notes" element={<CreateNote />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
