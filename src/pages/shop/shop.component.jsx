import React from "react";
import "./shop.styles.scss";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  const match = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionPage />
      </Route>
    </div>
  );
};

export default ShopPage;
