// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-header">
          <div>
            <h2 className="heading">
              <span style={{ color: "#FEB622" }}>STU</span>
              <span style={{ color: "#EEE8CD" }}>STRONG</span>
            </h2>
          </div>
          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="nav-items">
          <ul className="links">
            <li>
              <a href="/" className="scroll-link">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="scroll-link">
                Create a room
              </a>
            </li>
            <li>
              <a href="/" className="scroll-link">
                Ask a doubt
              </a>
            </li>
            <li>
              <a href="/login" className="scroll-link">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
