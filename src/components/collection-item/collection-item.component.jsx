import React from "react";
import styles from "./collection-item.styles.module.scss";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;

  const addItemHandler = () => {
    dispatch(addItem(item));
  };

  return (
    <div className={styles["collection-item"]}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles["collection-footer"]}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <div className={styles["custom-button"]}>
        <CustomButton onClick={addItemHandler} inverted>
          Add to Cart
        </CustomButton>
      </div>
    </div>
  );
};

export default CollectionItem;
