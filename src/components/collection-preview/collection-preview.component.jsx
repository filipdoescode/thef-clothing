import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import styles from "./collection-preview.styles.module.scss";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={styles["collection-preview"]}>
      <h1 className={styles.title}>
        <Link to={`shop/${title.toLowerCase()}`}>{title}</Link>
      </h1>
      <div className={styles.preview}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
