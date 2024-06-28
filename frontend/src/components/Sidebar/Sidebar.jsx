import React from "react";
import "./Sidebar.css"; // Ensure the path is correct
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>My Menu
        {/* <label htmlFor="check" className="close-btn">
            <i className="fas fa-times"></i>
          </label>
          <label htmlFor="check" id="btn">
            <i className="fas fa-bars"></i>
          </label> */}
        </header>
        <a href="#" className="active">
          <i className="fas fa-qrcode"></i>
          <span>Dashboard</span>
        </a>
        <a href="#">
          <i className="fas fa-link"></i>
          <span>Shortcuts</span>
        </a>
        <a href="#">
          <i className="fas fa-stream"></i>
          <span>Overview</span>
        </a>
        <a href="#">
          <i className="fas fa-calendar"></i>
          <span>Events</span>
        </a>
        <a href="#">
          <i className="far fa-question-circle"></i>
          <span>About</span>
        </a>
        <a href="#">
          <i className="fas fa-sliders-h"></i>
          <span>Services</span>
        </a>
        <a href="#">
          <i className="far fa-envelope"></i>
          <span>Contact</span>
        </a>
        {/* Close button */}
        <label htmlFor="check" className="close-btn">
          <i className="fas fa-times"></i>
        </label>
      </div>
    </>
  );
};

export default Sidebar;
