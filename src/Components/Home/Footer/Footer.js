import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>about me</li>
              <li>services</li>
              <li>privacy policy</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>FAQ</li>
              <li>rating</li>
              <li>refund</li>
              <li>service status</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow me</h4>
            <div className="social-links">
              <a href="">
                <FontAwesomeIcon
                  className="icon active-icon"
                  icon={faFacebookF}
                />
              </a>
              <a href="">
                <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
              </a>
              <a href="">
                <FontAwesomeIcon className="icon " icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
