import React, { Component } from "react";
import Header from "./../../components/Header/Header";
import ContentSkills from "../../components/ContentSkills/ContentSkills";

class Skills extends Component{

    render(){
        return(
            <div className="Skills">
                <Header/>
                <ContentSkills/>
            </div>
        );
    }

}

export default Skills;