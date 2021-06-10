import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const history = useHistory();
  const dispatch = useDispatch();

  const checkoutButtonHandler = () => {
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton onClick={checkoutButtonHandler}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
