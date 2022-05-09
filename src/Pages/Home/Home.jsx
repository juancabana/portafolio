import React, { Component } from "react";
import Header from "../../components/Header/Header";
import ContentHome from "../../components/ContentHome/ContentHome";

class Home extends Component {
  render() {
    return(
        <div>
            <Header/>
            <ContentHome/>

        </div>
    );
  }
}

export default Home;