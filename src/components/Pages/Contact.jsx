import React from "react";
import Header from "./../organisms/Header";
import ContentContact from "./../Templates/ContentContact";
import Footer from "./../organisms/Footer";

const Contact = () => {
  return (
    <div className="h-screen box-content flex flex-col w-screen">
      <Header />
      <ContentContact />
      <Footer />
    </div>
  );
};

export default Contact;
