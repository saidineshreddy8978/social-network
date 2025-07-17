import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { IoChatbox } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import profile from "../assets/profile-social.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span role="img" aria-label="logo">📢</span>
        </div>
        <div className="search-bar">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="navbar-center">
        <span className="nav-item active">Demo</span>
        <span className="nav-item">Pages</span>
        <span className="nav-item">Account</span>
        <span className="nav-item">My Network</span>
      </div>

      <div className="navbar-right">
        <div className="icon">
          <IoChatbox />
        </div>
        <div className="icon">
          <IoMdSettings />
        </div>
        <div className="icon bell-icon">
          <FaBell />
          <span className="notification-dot"></span>
        </div>
        <div className="profile-pic">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
