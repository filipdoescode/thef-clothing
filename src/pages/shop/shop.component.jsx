import React, { useEffect } from "react";
import styles from "./shop.styles.module.scss";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  const match = useRouteMatch();
  return (
    <div className={styles["shop-page"]}>
      <Route exact path={`${match.path}`}>
        <CollectionsOverviewContainer />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionPageContainer />
      </Route>
    </div>
  );
};

export default ShopPage;
