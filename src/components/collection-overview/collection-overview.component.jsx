import React from "react";
import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
