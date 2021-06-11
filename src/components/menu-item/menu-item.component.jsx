import React from "react";
import styles from "./menu-item.styles.module.scss";

import { useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const routeMatch = useRouteMatch();

  return (
    <div
      className={`${styles["menu-item"]} ${styles[size]}`}
      onClick={() => history.push(`${routeMatch.url}${linkUrl}`)}
    >
      <div
        className={styles["background-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
