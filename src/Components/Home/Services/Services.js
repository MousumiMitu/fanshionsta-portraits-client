import React, { useEffect, useState } from "react";
import ServiceList from "../ServiceList/ServiceList";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section>
      <div className="container my-5">
        <h2 className="text-center">Our services</h2>
        <div className="row">
          {services.map((service) => (
            <ServiceList service={service} key={service._id}></ServiceList>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
