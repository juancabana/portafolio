import React, { Component } from "react";
import Header from "../../components/Header/Header";
import ContentAbout from "../../components/ContentAbout/ContentAbout";
import Footer from "../../components/Footer/Footer";

class About extends Component{
    render(){
        return(
            <div className="About">
                <Header/>
                <ContentAbout/>
                <Footer/>

            </div>
        );
    }

}

export default About;