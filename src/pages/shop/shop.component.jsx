import React, { useEffect, useState } from "react";
import styles from "./shop.styles.module.scss";
import { Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshopToMap,
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  let unsibscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
  }, [dispatch]);

  const match = useRouteMatch();
  return (
    <div className={styles["shop-page"]}>
      <Route exact path={`${match.path}`}>
        <CollectionsOverviewWithSpinner isLoading={loading} />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionsPageWithSpinner isLoading={loading} />
      </Route>
    </div>
  );
};

export default ShopPage;
