import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-container">
      <div class="container ">
        <a
          class="navbar-brand"
          href="#"
          style={{
            color: "#64033c",
            fontWeight: "bold",
            fontFamily: '"Beth Ellen", cursive',
          }}
        >
          Fashionista Portraits
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-1 ">
            <li class="nav-item ">
              <Link
                className="nav-link ms-5 "
                style={{ color: "#64033c", fontWeight: "bold" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link ms-5"
                style={{ color: "#64033c", fontWeight: "bold" }}
                style={{ color: "#64033c", fontWeight: "bold" }}
                to="/"
              >
                Orders
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link ms-5"
                style={{ color: "#64033c", fontWeight: "bold" }}
                to="/bookingStatus"
              >
                Dashboard
              </Link>
            </li>
            {/* <li class="nav-item"></li> */}
            <div className="login-btn ms-5">
              <Link
                className="nav-link   "
                style={{ color: "#64033c", fontWeight: "bold" }}
                to="/login"
              >
                {loggedInUser.name ? loggedInUser.name : "Login"}
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
