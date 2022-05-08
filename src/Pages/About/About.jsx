import React, { Component } from "react";
import Header from "../../coponents/Header/Header";
import ContentAbout from "../../coponents/ContentAbout/ContentAbout";

class About extends Component{
    render(){
        return(
            <div className="About">
                <Header/>
                <ContentAbout/>

            </div>
        );
    }

}

export default About;