"use client";
import React, { useState } from "react";
import "./Navbar.css"; // Importing CSS for styling
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">AI Resume Builder</div>
      <div className="navbar-links">
        <div className="navbar-link dropdown" onClick={toggleDropdown}>
          AI Tools
          {dropdownOpen ? (
            <FaChevronUp className="dropdown-icon" />
          ) : (
            <FaChevronDown className="dropdown-icon" />
          )}
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#resume-builder">Resume Builder</a>
              <a href="#cover-letter-generator">AI Cover Letter</a>
              <a href="#resume-generator">AI Resume</a>
            </div>
          )}
        </div>
        <a href="#login" className="navbar-link">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
