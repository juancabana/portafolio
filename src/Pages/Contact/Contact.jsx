import React, { Component } from "react";
import Header from './../../components/Header/Header';
import ContentContact from './../../components/ContentContact/ContentContact';
import Footer from './../../components/Footer/Footer';

class Contact extends Component{
    render(){
        return(
            <div className="Contact">
                <Header/>
                <ContentContact/>
                <Footer/>
            </div>
        );
    }

}

export default Contact;