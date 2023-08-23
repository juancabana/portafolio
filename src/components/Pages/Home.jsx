import React from "react";
import Header from "../organisms/Header";
import ContentHome from "../Templates/ContentHome";
import Footer from "../organisms/Footer";

const Home = () => {
  return (
    <div className="container mx-auto h-screen box-content flex flex-col">
      <Header />
      <ContentHome />
      <Footer />
    </div>
  );
};

export default Home;
