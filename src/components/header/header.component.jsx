import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const { currentUser, hidden } = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectCartHidden,
    })
  );

  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop" activeClassName="active-nav">
          SHOP
        </NavLink>
        <NavLink className="option" to="/contact" activeClassName="active-nav">
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className="option" to="/signin" activeClassName="active-nav">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
