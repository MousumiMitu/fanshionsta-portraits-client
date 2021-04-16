import React from "react";
import About from "../About/About";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";

import Services from "../Services/Services";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Header;
