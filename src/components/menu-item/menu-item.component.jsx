import React from "react";
import "./menu-item.styles.scss";

import { useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const routeMatch = useRouteMatch();

  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${routeMatch.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
