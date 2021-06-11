import React from "react";
import styles from "./collection.styles.module.scss";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { useRouteMatch } from "react-router-dom";

const CategoryPage = (props) => {
  const match = useRouteMatch();
  const { items, title } = useSelector(
    selectCollection(match.params.collectionId)
  );

  return (
    <div className={styles["collection-page"]}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
