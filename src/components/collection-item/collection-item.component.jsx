import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;

  const addItemHandler = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={addItemHandler} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
