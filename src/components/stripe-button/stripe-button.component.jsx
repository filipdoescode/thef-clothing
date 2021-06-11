import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I9YUdL0kcZhC913JH6QFbttSFEYTwKITK61lhzPUjqZgu18j5rtMszzIR4nN5d5mjkqUFAOViY031Hr0KHvuQGG00810NhMIr";

  const onTokenHandler = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Thef Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Y5E.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onTokenHandler}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
