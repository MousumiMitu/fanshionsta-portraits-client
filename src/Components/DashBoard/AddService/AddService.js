import axios from "axios";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddService = () => {
  const [service, setService] = useState({});
  const [imageFile, setImageFile] = useState(null);

  const handleBlur = (e) => {
    const newService = { ...service };
    newService[e.target.name] = e.target.value;
    setService(newService);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "250a0c984f45afbe3250c5a6612b0d44");
    imageData.append("image", newFile);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageFile(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceData = {
      name: service.name,
      price: service.price,
      img: imageFile,
    };

    const url = `https://safe-atoll-71815.herokuapp.com/addService`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log("server side response", res));
  };

  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-8 col-sm-7 col-6 p-4 pr-5"
        style={{ position: "absolute", right: "6rem" }}
      >
        <h2>Add a service</h2>
        <form onSubmit={handleSubmit}>
          <div className=" my-3">
            <input
              onBlur={handleBlur}
              type="text"
              name="name"
              placeholder="Add service"
            />
          </div>
          <div className=" my-3">
            <input
              onBlur={handleBlur}
              type="number"
              className=""
              name="price"
              placeholder="add price"
            />
          </div>
          <div className=" my-3">
            <input
              onChange={handleFileChange}
              type="file"
              className=""
              placeholder="picture"
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default AddService;
