import React from "react";
import "./cart-icon.styles.scss";
import { useDispatch } from "react-redux";
import { CartActionTypes } from "../../redux/cart/cart.types";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const dispatch = useDispatch();

  const toggleCartHiddenHandler = () => {
    dispatch({ type: CartActionTypes.TOGGLE_CART_HIDDEN });
  };

  return (
    <div className="cart-icon" onClick={toggleCartHiddenHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

export default CartIcon;
