import React from "react";
import { useSelector } from "react-redux";
import { itemProductType } from "../../../store/products-reducer";
import { AppStateType } from "../../../store/redux-store";
import { CartItem } from "./CartItem";
import s from "./Positions.module.css";

type propsType = {
  cartItems: itemProductType[];
};
export const Positions: React.FC<propsType> = ({ cartItems }) => {
  const cartItemsEl = cartItems.map((el, i) => {
    return <CartItem key={i} cartItem={el} />;
  });

  return (
    <div>
      <div>{cartItemsEl}</div>
      <div className={`Headline5 ${s.totalCost}`}>Общая стоимость: {cartItems.reduce((sum, el) => sum + el.price, 0)} руб.</div>
    </div>
  );
};
