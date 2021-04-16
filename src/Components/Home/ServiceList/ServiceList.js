import React from "react";
import { useHistory } from "react-router";
import "./ServiceList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ServiceList = ({ service }) => {
  const { name, img, price, _id } = service;
  const history = useHistory();
  const handleBooking = (orderId) => {
    const url = `/bookingCheckOut/${orderId}`;
    history.push(url);
  };
  return (
    <div className="col-md-4 text-center container">
      <div className="card-box">
        <div className="image-box">
          <img src={img} alt="" className="img-fluid mb-3 card-img" />
        </div>
        <div className="content-box text-center">
          <div>
            <h3>{name}</h3>
            <p>${price}</p>
            <button className="booking-btn" onClick={() => handleBooking(_id)}>
              Book now
            </button>
            <div className="icon-box">
              <FontAwesomeIcon icon={faShoppingCart} className="order-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
