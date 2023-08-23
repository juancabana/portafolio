import React from "react";
import Header from "../organisms/Header";
import ContentHome from "../Templates/ContentHome";
import Footer from "../organisms/Footer";

const Home = () => {
  return (
    <div className="h-screen box-content flex flex-col w-screen">
      <Header />
      <ContentHome />
      <Footer />
    </div>
  );
};

export default Home;
