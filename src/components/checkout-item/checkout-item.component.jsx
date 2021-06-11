import React from "react";
import styles from "./checkout-item.styles.module.scss";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const clearFromCartHandler = () => {
    dispatch(clearItemFromCart(cartItem));
  };

  const addItemToCartHandler = () => {
    dispatch(addItem(cartItem));
  };

  const removeItemFromCartHadnler = () => {
    dispatch(removeItem(cartItem));
  };

  return (
    <div className={styles["checkout-item"]}>
      <div className={styles["image-container"]}>
        <img alt="item" src={cartItem.imageUrl} />
      </div>
      <span className={styles.name}>{cartItem.name}</span>
      <span className={styles.quantity}>
        <div onClick={removeItemFromCartHadnler} className={styles.arrow}>
          {" "}
          &#10094;{" "}
        </div>
        <span className={styles.value}>{cartItem.quantity}</span>
        <div onClick={addItemToCartHandler} className={styles.arrow}>
          &#10095;
        </div>
      </span>

      <span className={styles.price}>{cartItem.price}</span>
      <div onClick={clearFromCartHandler} className={styles["remove-button"]}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
