import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

// 77
export default Header;
