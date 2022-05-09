import React, { Component } from "react";
import Header from './../../components/Header/Header';
import ContentProyects from './../../components/ContentProyects/ContentProyects';

class Proyects extends Component{
    render(){
        return(
            <div className="Proyects">
                <Header/>
                <ContentProyects/>

            </div>
        );
    }

}

export default Proyects;