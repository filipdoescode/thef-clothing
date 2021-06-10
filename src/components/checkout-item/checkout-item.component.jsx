import React from "react";
import "./checkout-item.styles.scss";
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
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={cartItem.imageUrl} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div onClick={removeItemFromCartHadnler} className="arrow">
          {" "}
          &#10094;{" "}
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div onClick={addItemToCartHandler} className="arrow">
          &#10095;
        </div>
      </span>

      <span className="price">{cartItem.price}</span>
      <div onClick={clearFromCartHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
