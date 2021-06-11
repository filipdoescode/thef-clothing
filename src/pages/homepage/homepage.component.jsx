import React from "react";
import Directory from "../../components/directory/directory.component";
import styles from "./homepage.styles.module.scss";

const HomePage = (props) => {
  return (
    <div className={styles["homepage"]}>
      <Directory />
    </div>
  );
};

export default HomePage;
