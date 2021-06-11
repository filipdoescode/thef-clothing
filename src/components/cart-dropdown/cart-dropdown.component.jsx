import React from "react";
import styles from "./cart-dropdown.styles.module.scss";
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
    <div className={styles["cart-dropdown"]}>
      <div className={styles["cart-items"]}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={styles["empty-message"]}>Your cart is empty</span>
        )}
      </div>

      <CustomButton onClick={checkoutButtonHandler}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
