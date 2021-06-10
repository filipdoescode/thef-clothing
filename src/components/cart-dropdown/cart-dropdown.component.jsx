import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  // const cartItems = useSelector((state) => selectCartItems(state));

  // console.log(cartItems, "I rerendered");

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("I rerendered");
  return { cartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(CartDropdown);
