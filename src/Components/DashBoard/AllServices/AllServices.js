import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import "./AllServices.css";

const AllServices = ({ service }) => {
  const { name, price, img, _id } = service;
  const history = useHistory();
  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        history.push("/delete");
      });
  };
  return (
    <div
      className="col-md-4 col-sm-6 col-12 m-2 p-2 text-center"
      style={{
        width: "20rem",
        height: "10rem",
        background: "#f2f2f2",
        boxShadow: " 0 5px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div style={{ height: "6.5rem" }}>
        <div style={{ color: "#64033c" }}>
          <h4>{name}</h4>
        </div>
        <div>
          <h4>${price}</h4>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleDeleteProduct(_id)}
          className="changing-btn "
        >
          <FontAwesomeIcon icon={faTrashAlt} /> Delete
        </button>
      </div>
    </div>
  );
};

export default AllServices;
