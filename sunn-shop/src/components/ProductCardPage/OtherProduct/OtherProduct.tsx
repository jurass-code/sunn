import React from "react";
import s from "./OtherProduct.module.css";
import { ProductCard } from "../../CatalogSections/ProductCard/ProductCard";
import { itemProductType } from "../../../store/products-reducer";

type propsType = {
  arrOtherProduct: itemProductType[];
  widthWindow: number;
};

export const OtherProduct: React.FC<propsType> = ({ widthWindow, arrOtherProduct }) => {
  return (
    <div className="wrapper">
      <div className={s.content}>
        <div className={s.title}>
          <h3 className="Headline3">Вам также может понравиться</h3>
        </div>
        <div className={s.products}>
          {arrOtherProduct.map((el, i) => {
            return (
              <ProductCard
                widthWindow={widthWindow}
                key={i}
                productId={el._id}
                price={el.price}
                title={el.title}
                photoUrl={el.photos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
