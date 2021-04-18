import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ChangeStatus from "./ChangeStatus";

const UpdateStatus = () => {
  const [bookingStatus, setBookingStatus] = useState([]);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    fetch("https://safe-atoll-71815.herokuapp.com/bookingCollection")
      .then((res) => res.json())
      .then((data) => setBookingStatus(data));
  }, []);

  const handleOnChangeStatus = (e) => {
    const newUpdate = e.target.value;
    setUpdate(newUpdate);
  };

  const handleClick = (id) => {
    const updateChange = update;
    const modifyStatus = {
      status: updateChange,
    };

    fetch(`https://safe-atoll-71815.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(modifyStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updated");
      });
  };

  return (
    <section className="container-fluid row d-flex justify-content-evenly">
      <Sidebar></Sidebar>
      <div className="col-md-10 col-sm-7 col-7 p-4 ms-auto">
        <div className="row">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary text-left" scope="col">
                  Sr No
                </th>
                <th className="text-secondary" scope="col">
                  Email
                </th>
                <th className="text-secondary" scope="col">
                  Service
                </th>
                <th className="text-secondary" scope="col">
                  Payment
                </th>
                <th className="text-secondary" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {bookingStatus.map((appointment, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.name}</td>
                  <td>card</td>
                  <td>
                    <select
                      onChange={handleOnChangeStatus}
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option name="name" value="processing">
                        processing
                      </option>
                      <option name="status" value="pending">
                        pending
                      </option>
                      <option name="status" value="done">
                        done
                      </option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleClick(appointment._id)}>
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UpdateStatus;
