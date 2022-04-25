import React from "react";
import { useDispatch } from "react-redux";
import s from "./CartItem.module.css";
import { ReactComponent as Cross } from "../../../assets/img/cross.svg";
import { itemProductType } from "../../../store/products-reducer";
import { actionsCart } from '../../../store/cart-reducer';

type propsType = {
  cartItem: itemProductType;
};

export const CartItem: React.FC<propsType> = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={s.content}>
        <div className={s.photoItemBox}>
          <img className={s.photoItem} src={cartItem.photos[0]} alt="photo" />
        </div>
        <div className={`text3 ${s.textBox}`}>
          <p>{cartItem.title}</p>
        </div>
        <div className={`${s.priceBox} text2`}>
          <p>{cartItem.price + " руб."}</p>
        </div>
        <div
          className={s.deleteItemBtn}
          onClick={(e) => {
            dispatch(actionsCart.deleteItemFromCart(cartItem._id));
          }}
        >
          <Cross className={s.cross} />
        </div>
      </div>
      <hr className={s.hr} />
    </div>
  );
};
