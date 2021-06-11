import React from "react";
import "./collection.styles.scss";
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
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
