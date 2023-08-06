import React from "react";
import Header from "../organisms/Header";
import ContentHome from "../Templates/ContentHome";
import Footer from "../organisms/Footer";

const Home = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Header />
            <ContentHome />
            <Footer />
        </div>
    );
}

export default Home;