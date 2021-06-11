import React from "react";
import styles from "./cart-item.styles.module.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className={styles["cart-item"]}>
      <img src={imageUrl} alt="item" />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.name}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
