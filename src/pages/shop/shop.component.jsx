import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.styles.scss";

import { SHOP_DATA } from "./shopData";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
