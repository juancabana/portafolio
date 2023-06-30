import React, { Component } from "react";
import "./ContentAbout.css";

class ContentAbout extends Component {
  render() {
    return (
      <div className="wrapper-ContentAbout">
        <div className="containerContentAbout">
          <h2 className="title-About">About me</h2>
          <div className="ContentAbout">
            <div className="paragraphAbout">
              <p className="text-about">
                Frontend and backend web developer, I am a happy, friendly,
                altruistic person, I like teamwork, good camaraderie, responsible,
                always willing and eager to learn new technologies and deepen the
                ones I already know.
                The technologies I handle are HTML, CSS, Javascript and its
                versions of ECMAScript (ES6+), Node.js and its NPM package and
                dependency management system, React.js, typescript, relational
                database fundamentals with MySQL, Express. js, Passport.js, JSON
                Web Token (JWT), and I've mostly used Git and Github for version
                control, although I have some familiarity with Microsoft Azure.
                I have worked under agile development methodologies such as scrum
                and canva. <br /> <br />
                <strong className="strong">Experience</strong> <br />
                Currently I am in charge of the design, layout and development
                of the new EdSoft platform, I have implemented the front-end of
                the page in React, using several of its libraries for routing
                and page styles, I am in charge of making requests to the API
                which is built in GraphQL, I was in charge of the configuration
                of the front-end architecture of the project. <br /> <br />
                <strong className="strong">Education</strong> <br />I graduated
                from high school in 2019, where I graduated as the best high
                school graduate, because of that I got a scholarship for a year
                at the Adventist University of Colombia (UNAC), where I am
                currently studying 5th semester of engineering in systems.
                engineering. At the beginning of 2020 I met web development and
                I became passionate about it. passionate about it.
              </p>
            </div>
            <div className="imageAbout">
              <div className="imgAbout"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentAbout;
