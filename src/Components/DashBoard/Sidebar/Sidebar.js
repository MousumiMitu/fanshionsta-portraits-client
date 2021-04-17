import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faBoxes,
  faUserShield,
  faThLarge,
  faShoppingCart,
  faList,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [checkAdmin, setCheckAdmin] = useState(false);

  const email = loggedInUser.email;
  useEffect(() => {
    fetch("https://safe-atoll-71815.herokuapp.com/checkAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => setCheckAdmin(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-3 col-3 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <FontAwesomeIcon icon={faHome} className="order-icon me-2" />
            Home
          </Link>
        </li>
        {checkAdmin && (
          <div>
            <li>
              <Link
                to="/addService"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FontAwesomeIcon icon={faPlus} className="order-icon me-2" />
                Add service
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <FontAwesomeIcon icon={faBoxes} className="order-icon me-2" />
                Order lists
              </Link>
            </li>
            <li>
              <Link
                to="/makeAdmin"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="order-icon me-2"
                />
                Make Admin
              </Link>
            </li>
            <li>
              <Link
                to="/manageServices"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FontAwesomeIcon icon={faThLarge} className="order-icon me-2" />
                Manage Services
              </Link>
            </li>
          </div>
        )}
        <li>
          <Link
            to="/bookingCheckOut/:orderId"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="order-icon me-2"
            />
            Book
          </Link>
        </li>
        <li>
          <Link
            to="/bookingStatus"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon icon={faList} className="order-icon me-2" />
            Booking lists
          </Link>
        </li>
        <li>
          <Link
            to="/addReview"
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon icon={faCommentDots} className="order-icon me-2" />
            Review
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
