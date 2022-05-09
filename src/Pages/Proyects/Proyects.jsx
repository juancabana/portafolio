import React, { Component } from "react";
import Header from './../../components/Header/Header';
import ContentProyects from './../../components/ContentProyects/ContentProyects';
import Footer from "../../components/Footer/Footer";

class Proyects extends Component{
    render(){
        return(
            <div className="Proyects">
                <Header/>
                <ContentProyects/>
                <Footer/>

            </div>
        );
    }

}

export default Proyects;