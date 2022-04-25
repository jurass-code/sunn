import React from "react";
import s from "./ProductCardPage.module.css";
import { OtherProduct } from "./OtherProduct/OtherProduct";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import RunningLine from "../../assets/img/RunningLine.gif";
import { ProductInfo } from "./ProductInfo/ProductInfo";
import { Redirect, useParams } from "react-router-dom";
import { BreadcrumbsComponent } from "../BreadcrumbCoponent/Breadcrumb";

const randomNumbers = (max: number, count: number) => {
  let arrNumbers = [] as number[];
  let rundomNumbers;

  //исправит если всего вещей будет меньше чем 3
  while (arrNumbers.length !== count) {
    rundomNumbers = randomNumber(max);
    //добавить проверку текущей вещи
    if (!arrNumbers.includes(rundomNumbers)) arrNumbers.push(rundomNumbers);
  }
  return arrNumbers;
};
const randomNumber = (max: number) => {
  const r = Math.random() * max;
  return Math.floor(r);
};
type Props = { widthWindow: number };
export const ProductCardPage: React.FC<Props> = ({ widthWindow }) => {
  let params = useParams<{ id: string }>();
  const productData = useSelector((state: AppStateType) => state.productData);
  const cartItems = useSelector((state: AppStateType) => state.cartData.cartItemsId);
  const arrOtherProduct = randomNumbers(
    productData.productItems.length,
    productData.productItems.length > 4 ? 3 : productData.productItems.length - 1
  ).map((el) => productData.productItems[el]);
  const currentProduct = productData.productItems.find((el, idx) => el._id === params.id);
  if (!currentProduct) return <Redirect to={"/"} />;
  else
    return (
      <div>
        <BreadcrumbsComponent />
        <div className={s.content}>
          <ProductInfo widthWindow={widthWindow} productItem={currentProduct} cartItems={cartItems} />
          <img src={RunningLine} alt="RunningLine" />
          <OtherProduct widthWindow={widthWindow} arrOtherProduct={arrOtherProduct} />
        </div>
      </div>
    );
};
