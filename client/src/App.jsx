import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Userdata from "./components/UserDataForm";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const noNavbarPaths = ["/signup", "/login"]; // Add "/login" if you have a login page
  return (
    <>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userdata" element={<Userdata/>}/>
      </Routes>
    </>
  );
}

export default App;
