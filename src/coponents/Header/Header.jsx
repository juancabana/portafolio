import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="nav-wrapper">
          <div className="img-container">
            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M19.2 31.25 21.35 29.1 16.3 24 21.35 18.95 19.2 16.8 12 24ZM28.8 31.25 36.05 24 28.85 16.8 26.7 18.95 31.75 24 26.65 29.1ZM9 42Q7.75 42 6.875 41.125Q6 40.25 6 39V9Q6 7.75 6.875 6.875Q7.75 6 9 6H18.4Q19.1 4.25 20.625 3.125Q22.15 2 24.05 2Q25.9 2 27.4 3.125Q28.9 4.25 29.65 6H39Q40.25 6 41.125 6.875Q42 7.75 42 9V39Q42 40.25 41.125 41.125Q40.25 42 39 42ZM24 8.25Q24.7 8.25 25.225 7.725Q25.75 7.2 25.75 6.5Q25.75 5.8 25.225 5.275Q24.7 4.75 24 4.75Q23.3 4.75 22.775 5.275Q22.25 5.8 22.25 6.5Q22.25 7.2 22.775 7.725Q23.3 8.25 24 8.25ZM9 39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H9Q9 9 9 9Q9 9 9 9V39Q9 39 9 39Q9 39 9 39ZM9 8.9Q9 8.9 9 8.9Q9 8.9 9 8.9V38.6Q9 38.6 9 38.6Q9 38.6 9 38.6Q9 38.6 9 38.6Q9 38.6 9 38.6V8.9Q9 8.9 9 8.9Q9 8.9 9 8.9Z" />
            </svg>
          </div>

          <div className="list-wrapper">
            <a
              className="links"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              Home
            </a>
            <a
              className="links"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
            <a
              className="links"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              Skills
            </a>
            <a
              className="links"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              Proyects
            </a>
            <a
              className="links"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </div>

          <div className="wrapper-title-name">
            <h3 className="title-name">Juan Cabana.</h3>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
