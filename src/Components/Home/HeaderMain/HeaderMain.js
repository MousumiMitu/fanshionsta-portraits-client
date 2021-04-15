import React from "react";
import "./HeaderMain.css";
import slide1 from "../../../images/slider1.jpg";
import slide2 from "../../../images/slider5.jpg";
import slide3 from "../../../images/slider6.jpg";
import slide4 from "../../../images/slider4.jpg";
import Navbar from "../Navbar/Navbar";

const HeaderMain = () => {
  return (
    <div>
      <div className="slider-box">
        <div className="slider1 img-fluid" style={{ marginTop: "5rem" }}>
          <img className="slide-img" src={slide1} alt="" />
          <div className="text-box">
            <h3 className="text-center">photography creation</h3>
            <span></span>
          </div>
        </div>
        <div className="slider2 img-fluid" style={{ marginTop: "5rem" }}>
          <img className="slide-img" src={slide2} alt="" />
          <div className="text-box">
            <h3 className="text-center">photography creation</h3>
            <span></span>
          </div>
        </div>
        <div className="slider3 img-fluid" style={{ marginTop: "5rem" }}>
          <img className="slide-img" src={slide4} alt="" />
          <div className="text-box">
            <h3 className="text-center">photography creation</h3>
            <span></span>
          </div>
        </div>
        <div className="slider4 img-fluid" style={{ marginTop: "5rem" }}>
          <img className="slide-img" src={slide3} alt="" />
          <div className="text-box">
            <h3 className="text-center">photography creation</h3>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
