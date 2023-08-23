import React from "react";
import Header from "../organisms/Header";
import ContentAbout from "../Templates/ContentAbout";
import Footer from "../organisms/Footer";

const About = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <ContentAbout />
      <Footer />
    </div>
  );
};

export default About;
