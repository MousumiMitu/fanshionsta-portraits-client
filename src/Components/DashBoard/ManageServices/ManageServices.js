import React, { useEffect, useState } from "react";
import AllServices from "../AllServices/AllServices";
import Sidebar from "../Sidebar/Sidebar";

const ManageServices = () => {
  const [services, SetServices] = useState([]);

  useEffect(() => {
    fetch("https://safe-atoll-71815.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => SetServices(data));
  });

  return (
    <section className="container-fluid row d-flex justify-content-evenly">
      <Sidebar></Sidebar>
      <div className="col-md-10 col-sm-7 col-7 p-4 ms-auto">
        <div className="row ">
          {services.map((service) => (
            <AllServices service={service} key={service._id}></AllServices>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
