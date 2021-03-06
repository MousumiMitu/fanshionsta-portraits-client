import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import LatestWork from "../LatestWork/LatestWork";
import Navbar from "../Navbar/Navbar";
import Review from "../Review/Review";

import Services from "../Services/Services";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <About></About>
      <Services></Services>
      <LatestWork></LatestWork>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Header;
