import React from "react";
import "./LatesWork.css";
import tall1 from "../../../images/tamara-bellis-8Aq_zfMHPbU-unsplash.jpg";
import tall2 from "../../../images/tall2.jpg";
import tall3 from "../../../images/tall4.jpg";
import tall4 from "../../../images/tall3.jpg";
import width1 from "../../../images/alvin-balemesa-N8aho0A98Wk-unsplash.jpg";
import width2 from "../../../images/slider6.jpg";
import width3 from "../../../images/alex-blajan-iRsktlI-hls-unsplash.jpg";
import width4 from "../../../images/cover2.jpg";

const LatestWork = () => {
  return (
    <section className="work-container">
      <h3 className="text-center text-style">Latest Works</h3>
      <div className="gallery-box">
        <div className="gallery-img">
          <img src={tall1} alt="" className="grid-img-box" />
        </div>
        <div className="gallery-img">
          <img src={width1} alt="" className="grid-img-box" />
        </div>
        <div className="gallery-img">
          <img src={tall3} alt="" className="grid-img-box" />
        </div>
        <div className="gallery-img">
          <img src={width2} alt="" className="grid-img-box" />
        </div>
        <div className="gallery-img">
          <img src={width3} alt="" className="grid-img-box" />
        </div>
        <div className="gallery-img">
          <img src={tall2} alt="" className="grid-img-box" />
        </div>
        <div className="gallery-img">
          <img src={width4} alt="" className="grid-img-box" />
        </div>
        <div className="gallery-img">
          <img src={tall4} alt="" className="grid-img-box" />
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
