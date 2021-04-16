import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import SimpleCard from "./SimpleCard";

const stripePromise = loadStripe(
  "pk_test_51IeJyYJ2RV9y15vlssZgJ7CpGAo1Wj62ZMndxtqo5RR4xhLTGA5zUEao9tmLFQRCZ0EJEEwgfLb88x7gjA8InXzd00HOY0AcUz"
);

const ProcessPayment = ({ handleCheckOut }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCard handleCheckOut={handleCheckOut}></SimpleCard>
    </Elements>
  );
};

export default ProcessPayment;
