import React from "react";
import styles from "./with-spinner.styles.module.scss";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className={styles.spinnerOverlay}>
        <div className={styles.spinnerContainer}></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
