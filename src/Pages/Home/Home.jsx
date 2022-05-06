import React, { Component } from "react";
import Header from "../../coponents/Header/Header";
import ContentHome from "../../coponents/ContentHome/ContentHome";

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