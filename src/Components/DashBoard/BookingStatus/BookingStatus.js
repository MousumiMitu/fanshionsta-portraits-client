import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./BookingStatus.css";

const BookingStatus = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  const email = loggedInUser.email;
  useEffect(() => {
    fetch("https://safe-atoll-71815.herokuapp.com/bookingAppointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <section className="container-fluid row d-flex justify-content-evenly">
      <Sidebar></Sidebar>
      <div className="col-md-10 col-sm-7 col-7 p-4  ms-auto">
        <h4>Order Status:</h4>
        <div className="row mx-auto">
          {bookings.map((booking) => (
            <div className="col-md-5 col-sm-12 booking-card">
              <div style={{ height: "40px" }}>
                <button className="order-btn">{booking.status}</button>
              </div>
              <div className="booking-box p-2">
                <img
                  src={booking.img}
                  className="img-fluid order-img "
                  alt=""
                />
                <div className="ms-3">
                  <h5>{booking.name}</h5>
                  <p className="booking-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, maxime.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingStatus;
