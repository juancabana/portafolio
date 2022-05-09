import React, { Component } from "react";
import Header from "./../../components/Header/Header";
import ContentSkills from "../../components/ContentSkills/ContentSkills";
import Footer from "../../components/Footer/Footer";

class Skills extends Component{

    render(){
        return(
            <div className="Skills">
                <Header/>
                <ContentSkills/>
                <Footer/>
            </div>
        );
    }

}

export default Skills;