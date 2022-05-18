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
                I'm a junior front-end developer, the main technologies in which
                I work are{" "}
                <strong className="strong">
                  HTML, CSS, JavaScript and React
                </strong>
                , I have managed the version control technology Git. I am a
                systems engineering student at the Adventist University of
                Colombia. Also passionate about UI and UX design. I love
                learning new skills and technologies every time, and perfecting
                the ones I already handle. I like to work in a team, teach other
                people what I know, I am dedicated and passionate about this
                world of web programming, I am also good at generating ideas for
                problem solving. I have worked under agile development
                methodologies such as Scrum and Kanban. <br /> <br />
                <strong className="strong">Experience</strong> <br />
                Currently I am in charge of the design, layout and development
                of the new EdSoft platform, I have implemented the front-end of
                the page in React, using several of its libraries for routing
                and page styles, I am in charge of making requests to the API
                which is built in GraphQL, I was in charge of the configuration
                of the front-end architecture of the project. <br /> <br />
                <strong className="strong">Education</strong> <br />
                I graduated
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
