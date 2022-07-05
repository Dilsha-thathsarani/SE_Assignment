import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const login = localStorage.getItem("Login");
    if (login) {
      const getToken = async () => {
        const res = await axios.post("/user/refresh_token", null);
        localStorage.setItem("TOKEN", res.data.access_token);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

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
