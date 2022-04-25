import React, { useState } from "react";
import s from "./CartPage.module.css";
import { CartForm } from "./CartForm";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { Positions } from "./Positions/Positions";

type Props = {};

export const CartPage: React.FC<Props> = () => {
  const cartItemsId = useSelector((state: AppStateType) => state.cartData.cartItemsId);
  const productItems = useSelector((state: AppStateType) => state.productData.productItems);
  //решить вопрос с undefided
  const cartData = cartItemsId.map((idElCart) => productItems.find((elProduct) => elProduct._id == idElCart)||productItems[0]);
  return (
    <div className={`wrapper`}>
      <h5 className={` ${s.title} Headline2`}>Оформление заказа</h5>
      <div className={s.content}>
        {cartData.length > 0 ? (
          <>
            <div className={s.form}>
              <CartForm cartItems={cartData} />
            </div>
            <div className={s.positions}>
              <Positions cartItems={cartData} />
            </div>
          </>
        ) : (
          "Корзина пуста"
        )}
      </div>
    </div>
  );
};
