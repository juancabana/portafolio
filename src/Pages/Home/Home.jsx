import React, { Component } from "react";
import Header from "../../components/Header/Header";
import ContentHome from "../../components/ContentHome/ContentHome";
import Footer from "../../components/Footer/Footer";


class Home extends Component {
  render() {
    return(
        <div>
            <Header/>
            <ContentHome/>
            <Footer/>

        </div>
    );
  }
}

export default Home;