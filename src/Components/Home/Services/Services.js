import React, { useEffect, useState } from "react";
import ServiceList from "../ServiceList/ServiceList";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://safe-atoll-71815.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="service-container">
      <div className="overlay">
        <div className="container mt-4 ">
          <h2 className="text-center my-4 pt-5 text-style">Our Services</h2>
          <div className="row">
            {services.map((service) => (
              <ServiceList service={service} key={service._id}></ServiceList>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
