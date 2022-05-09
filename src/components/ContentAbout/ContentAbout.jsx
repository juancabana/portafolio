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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique alias ipsa expedita dolor asperiores magni, quis odit
                modi corporis exercitationem eaque maxime, perferendis commodi.
                Tempora ab quaerat provident laudantium dolorem.
                Lorem ipsum<strong className="strong"> dolor sit amet, consectetur adipisicing elit.
                Similique alias ipsa expedita dolor asperiores</strong> magni, quis odit
                modi corporis exercitationem eaque maxime, perferendis commodi.
                Tempora ab quaerat provident laudantium dolorem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique alias ipsa expedita dolor asperiores magni, quis odit
                modi corporis exercitationem eaque maxime, perferendis commodi.
                Tempora ab quaerat <strong className="strong"> provident laudantium dolorem.
                Lorem</strong> ipsum dolor sit amet, consectetur adipisicing elit.
                Similique alias ipsa expedita dolor asperiores magni, quis odit
                modi corporis exercitationem eaque maxime, perferendis commodi.
                Tempora ab quaerat provident laudantium dolorem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique alias ipsa expedita dolor asperiores magni, quis odit
                modi corporis exercitationem <strong className="strong">eaque maxime, perferendis commodi.
                Tempora ab</strong> quaerat provident laudantium dolorem.
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="imageAbout">
                <div className="imgAbout">
                    
                </div>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentAbout;
