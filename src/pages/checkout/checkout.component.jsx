import React from "react";
import styles from "./checkout.styles.module.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = () => {
  const { cartItems, total } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal,
    })
  );

  return (
    <div className={styles["checkout-page"]}>
      <div className={styles["checkout-header"]}>
        <div className={styles["header-block"]}>
          <span>Product</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Description</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Quantity</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Price</span>
        </div>
        <div className={styles["header-block"]}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className={styles.total}>
        <span>TOTAL: {total}</span>
      </div>
      <div className={styles["test-warning"]}>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 424
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
