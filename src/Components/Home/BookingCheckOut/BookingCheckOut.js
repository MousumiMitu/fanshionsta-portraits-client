import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Sidebar from "../../DashBoard/Sidebar/Sidebar";
import ProcessPayment from "../../ProcessPayment/ProcessPayment";

const BookingCheckOut = () => {
  let { orderId } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [service, setService] = useState({});
  const { name, img, price, _id } = service;

  useEffect(() => {
    fetch("https://safe-atoll-71815.herokuapp.com/service/" + orderId)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [orderId]);

  const handleCheckOut = (paymentId) => {
    const newBooking = {
      ...loggedInUser,
      name,
      price,
      img,
      orderTime: new Date().toDateString("dd,mm,yyyy"),
      paymentId,
      status: "processing",
    };

    fetch("https://safe-atoll-71815.herokuapp.com/addBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("successfully booked your service");
      });
  };

  return (
    <section className="container-fluid row d-flex justify-content-evenly">
      <Sidebar></Sidebar>
      <div
        className="col-md-6 col-sm-6 col-6 p-4 pr-5"
        style={{
          position: "absolute",

          marginLeft: "5rem",
        }}
      >
        <h4>Book</h4>
        <form>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="user"
              placeholder={loggedInUser.name}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="email"
              className="form-control "
              name="email"
              placeholder={loggedInUser.email}
            />
          </div>
          <div className="form-group my-3">
            <input
              type="text"
              className="form-control"
              name="service"
              placeholder={name}
            />
          </div>
        </form>
        <div>
          <h5>Pay with</h5>
          <ProcessPayment handleCheckOut={handleCheckOut}></ProcessPayment>
        </div>
      </div>
    </section>
  );
};

export default BookingCheckOut;
