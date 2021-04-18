import React from "react";

const ChangeStatus = ({ appointment }) => {
  //   const { name, email, status } = changeStatus;
  return (
    <div>
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
          {appointment.map((appointments, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{appointments.email}</td>
              <td>{appointments.name}</td>
              <td>card</td>
              <td>
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>change status</option>
                  <option value="1">processing</option>
                  <option value="2">pending</option>
                  <option value="3">done</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChangeStatus;
