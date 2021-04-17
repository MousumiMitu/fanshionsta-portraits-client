import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const AddReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [review, setReview] = useState();

  const handleBlur = (e) => {
    const newReview = { ...review };
    newReview[e.target.name] = e.target.value;
    setReview(newReview);
  };

  const handleSubmit = () => {
    const reviewData = {
      ...loggedInUser,
      description: review.description,
    };
    console.log(reviewData);

    const url = `https://safe-atoll-71815.herokuapp.com/addReview`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server side response", res));
  };

  return (
    <section className="container-fluid row d-flex justify-content-center">
      <Sidebar></Sidebar>
      <div className="col-md-9 col-sm-7 col-7 p-4  ms-auto">
        <form onSubmit={handleSubmit}>
          <div style={{ border: "1px solid red", width: "30rem" }}>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder={loggedInUser.name}
              />
            </div>
            <div className="form-group  my-3" style={{ height: "6rem" }}>
              <input
                type="text"
                onBlur={handleBlur}
                className="form-control input-lg h-100"
                name="description"
                placeholder="add text here.."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
