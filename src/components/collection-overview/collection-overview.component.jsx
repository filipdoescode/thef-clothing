import React from "react";
import styles from "./collection-overview.styles.module.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className={styles["collections-overview"]}>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
