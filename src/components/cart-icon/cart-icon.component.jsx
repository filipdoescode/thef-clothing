import React from "react";
import "./cart-icon.styles.scss";
import { useDispatch, connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ itemCount }) => {
  const dispatch = useDispatch();
  // const itemCount = useSelector(selectCartItemsCount);

  const toggleCartHiddenHandler = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={toggleCartHiddenHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapStateToProps = (state) => {
  console.log("I cart-icon rerendeered");
  return {
    itemCount: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProps)(CartIcon);
