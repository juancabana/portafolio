import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
        <div className="container">
            <nav className="nav-wrapper">
                <div className="list-wrapper">
                        <a href="https://www.youtube.com/" target="_blank">Home</a>
                        <a>About</a>
                        <a>Skills</a>
                        <a>Proyects</a>
                        <a>Contact</a>
                </div>


            </nav>
        </div>
    );
  }
}

export default Header;
