import React, { Component } from "react";
import "./ContentContact.css";

class ContentContact extends Component {
  render() {
    return (
      <div className="ContentContact">
        <div className="wrapperContact">
          <h3 className="subtitleContact">What's Next?</h3>
          <h1 className="h1-Contact">Get in touch</h1>
          <p className="p-contact">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint magnam sit delectus beatae ut dicta, deserunt animi tempore
            blanditiis.
          </p>
          <a
            className="email-link"
            href="mailto:juand.cabanat@unac.edu.co"
            rel="noopener noreferrer"
            target="_blank"
          >
            Contact me
          </a>
        </div>
      </div>
    );
  }
}

export default ContentContact;
