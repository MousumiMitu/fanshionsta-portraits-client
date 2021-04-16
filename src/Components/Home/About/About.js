import React from "react";
import "./About.css";
import profile from "../../../images/profile.jpg";

const About = () => {
  return (
    <section className="container  profile-box">
      <div className="d-flex justify-content-evenly">
        <div className=" profile-img">
          <img src={profile} className="img-fluid" alt="" />
        </div>
        <div className=" content-box">
          <h6>hello there!</h6>
          <h2>I'm Mitz</h2>
          <span></span>
          <br />
          <p>
            I’m a Professional photographer. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Amet, molestiae eligendi esse
            distinctio ullam modi neque quae. Repellendus, fugit vero. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            commodi optio fuga, perspiciatis necessitatibus itaque. <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur recusandae eos voluptas modi. Consequuntur, ut.
          </p>
          <h3 className="sign">Mitz creations</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
