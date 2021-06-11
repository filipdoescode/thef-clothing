import React from "react";
import styles from "./custom-button.styles.module.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${styles["custom-button"]} ${
        isGoogleSignIn ? styles["google-sign-in"] : ""
      } ${inverted ? styles["inverted"] : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
