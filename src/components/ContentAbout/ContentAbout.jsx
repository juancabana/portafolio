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
                I am a junior frontend developer, in the technologies of:{" "}
                <strong className="strong">
                  HTML, CSS, JavaScript and React.
                </strong>{" "}
                I am a systems engineering student at Colombia Adventist
                University. also passionate about design. I love learning new
                skills every time and perfecting the ones I already have. I like
                to work in a team, teach other people, I am dedicated and
                passionate about this world of web programming, respectful and
                responsible. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quam vero debitis, iure error, pariatur magnam veniam iste velit
                ex nam officia tempore similique! Cum minima id aliquam quo
                animi.
                <strong className="strong">
                  {" "}
                  provident laudantium dolorem. Lorem
                </strong>{" "}
                ipsum dolor sit amet, consectetur adipisicing elit. Similique
                alias ipsa expedita dolor asperiores magni, quis odit modi
                corporis exercitationem eaque maxime, perferendis commodi.
                Tempora ab quaerat provident laudantium dolorem. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Similique alias
                ipsa expedita dolor asperiores magni, quis odit modi corporis
                exercitationem{" "}
                <strong className="strong">
                  eaque maxime, perferendis commodi. Tempora ab
                </strong>{" "}
                quaerat provident laudantium dolorem. Lorem ipsum dolor sit
                amet.
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
