import React from "react";
import Header from "../components/Header";
import ContentHome from "../components/ContentHome";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div style={{height: '100vh'}}>
            <Header />
            <ContentHome />
            <Footer />
        </div>
    );
}

export default Home;