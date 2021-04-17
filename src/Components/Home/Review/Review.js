import React, { useEffect, useState } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://safe-atoll-71815.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className=" review-container">
      <div className="review-overlay ">
        <div className="review-card text-center">
          {reviews.map((review) => (
            <div className=" review-box">
              <div>
                <img className="user-img" src={review.image} alt="" />
              </div>
              <div style={{ textAlign: "justify" }}>
                <p>{review.description}</p>
              </div>
              <div style={{ textAlign: "justify" }}>
                <p className="text-center">
                  <FontAwesomeIcon icon={faPenNib} className=" me-2" />
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
