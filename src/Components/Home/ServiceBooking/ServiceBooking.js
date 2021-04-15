import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./ServiceBooking.css";

const ServiceBooking = () => {
  let { serviceId } = useParams();
  const [service, setService] = useState({});
  const { name, img, price } = service;

  useEffect(() => {
    fetch("http://localhost:5000/service/" + serviceId)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h2>Your Booking item</h2>
        <div className="col-md-8 d-flex justify-content-center align-items-center order-box my-5">
          <div className="img-box">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <div>
            <h5>{name}</h5>
            <p>${price}</p>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default ServiceBooking;
