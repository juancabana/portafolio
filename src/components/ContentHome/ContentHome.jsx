import React, { Component } from "react";
import "./ContentHome.css";

class ContentHome extends Component {
  render() {
    return (
      <div className="ContentHome">
        <h2 className="text-first-line">Hi, I am Juan David Cabana Trejos</h2>
        <h1 className="text-second-line">Web front-end developer (React).</h1>
        <h3 className="text-third-line">
          I am passionate about web development, I handle HTML, CSS, JavaScript
          and React technologies.
        </h3>
        <div className="contentperfil"></div>
        <h3 className="text-third-line">
          Systems engineering student, fifth semester.
        </h3>

        <a
          class="email-link"
          href="mailto:juandaka78@hotmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Contact me
        </a>
      </div>
    );
  }
}

export default ContentHome;
