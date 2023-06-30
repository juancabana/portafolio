import React, { Component } from "react";
import "./ContentHome.css";

class ContentHome extends Component {
  render() {
    return (
      <div className="ContentHome">
        <h2 className="text-first-line">Hi, I am Juan David Cabana Trejos</h2>
        <h1 className="text-second-line">Web full-stack developer (Node - React).</h1>
        <h3 className="text-third-line">
          I am passionate about web development, I handle HTML, CSS, JavaScript
          and React technologies.
        </h3>
        <div className="contentperfil"></div>
        <h3 className="text-third-line">
          Systems engineering student, 8th semester.
        </h3>

        
      </div>
    );
  }
}

export default ContentHome;
