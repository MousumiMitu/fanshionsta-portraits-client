import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState({});
  const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  };

  const handleSubmit = () => {
    const adminData = {
      email: admin.email,
    };

    const url = `https://safe-atoll-71815.herokuapp.com/addAdmin`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => console.log("server side response", res));
  };

  return (
    <section className="container-fluid row d-flex justify-content-center">
      <Sidebar></Sidebar>
      <div className="col-md-9 col-sm-7 col-7 p-4  ms-auto">
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="email"
              placeholder="Add Admin"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default MakeAdmin;
