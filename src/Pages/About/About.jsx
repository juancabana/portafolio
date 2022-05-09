import React, { Component } from "react";
import Header from "../../components/Header/Header";
import ContentAbout from "../../components/ContentAbout/ContentAbout";

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