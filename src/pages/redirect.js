import React, { useState } from "react";


import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import redirect from "../components/redirect/redirectmessage";




const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <redirect/>
      {/* Redirect Message page */}
      
      
     
      <Footer />
      {/* Footer element with company name, copyright message, and external links back to the AU site, ecampus, etc */}
    </div>
  );
};

export default Home;
