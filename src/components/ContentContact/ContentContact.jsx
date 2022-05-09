import React, { Component } from "react";
import "./ContentContact.css";

class ContentContact extends Component {
  render() {
    return (
      <div className="ContentContact">
        <div className="wrapperContact">
          <h3 className="subtitleContact">Contact me</h3>
          <h1 className="h1-Contact">Get in touch</h1>
          <p className="p-contact">
            Here you can contact me, I am looking for a job as a front-end web
            developer, but I really like to learn any technology
          </p>
          <a
            className="email-link"
            href="mailto:juand.cabanat@unac.edu.co"
            rel="noopener noreferrer"
            target="_blank"
          >
            Send email
          </a>
        </div>
      </div>
    );
  }
}

export default ContentContact;
