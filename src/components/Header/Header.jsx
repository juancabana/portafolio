import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <nav className="nav-wrapper">
          <div className="img-container">
            JC
          </div>

          <div className="list-wrapper">
            <Link className="links" to="/">
              Home.
            </Link>
            <Link className="links" to="/about">
              About.
            </Link>
            <Link className="links" to="/skills">
              Skills.
            </Link>
            <Link className="links" to="/proyects">
              Proyects.
            </Link>
            <Link className="links" to="/contact
            ">
              Contact.
            </Link>
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
