import React, { useState } from "react";
import s from "./CatalogSections.module.css";
import { ProductCard } from "./ProductCard/ProductCard";
import { itemProductType } from "../../store/products-reducer";

type propsType = {
  productData: itemProductType[];
  homePage?: boolean;
  widthWindow: number;
};

export const CatalogSections: React.FC<propsType> = ({ widthWindow, productData, homePage = false }) => {
  const [activeTab, setactiveTab] = useState("all");
  console.log(productData);

  const handlerClickTabs = (e: any) => {
    const item = e.target;
    switch (item.textContent) {
      case "Все":
        setactiveTab("all");
        break;
      case "Деним":
        setactiveTab("denym");
        break;
      case "Футболки":
        setactiveTab("T-shirt");
        break;
      case "Толстовки":
        setactiveTab("sweatshirt");
        break;
      case "Кожаные изделия":
        setactiveTab("leather");
        break;
      case "Другое":
        setactiveTab("other");
        break;
      default:
        setactiveTab(activeTab);
    }
  };
  const categoriesName = ["Все", "Деним", "Футболки", "Толстовки", "Кожаные изделия", "Другое"];
  const categoriesElems = categoriesName.map((el) => {
    const categoryEn =
      el === "Все"
        ? "all"
        : el === "Деним"
        ? "denym"
        : el === "Футболки"
        ? "T-shirt"
        : el === "Толстовки"
        ? "sweatshirt"
        : el === "Кожаные изделия"
        ? "leather"
        : "other";
    return (
      <li className={`${s.catalog__tab} ${activeTab === categoryEn ? s.catalog__activeTab : ""}`} onClick={handlerClickTabs}>
        {el}
      </li>
    );
  });
  return (
    <div className={`wrapper ${s.catalog__wrapper}`}>
      <h2
        className={`${widthWindow < 768 ? "Headline9" : "Headline2"} ${s.catalog__headline} ${
          homePage || s.catalog__headline_center
        }`}
      >
        Каталог
      </h2>
      <div className={s.catalog}>
        <div className={s.catalog__tabs}>
          <ul
            className={`${s.catalog__listTabs} ${homePage && s.catalog__listTabs_left} ${widthWindow >= 768 ? "text1" : "text3"}`}
          >
            {categoriesElems}
          </ul>
        </div>
        <div className={s.catalog__cards}>
          {productData.map((item) => {
            if (activeTab === "all")
              return (
                <ProductCard
                  widthWindow={widthWindow}
                  key={item._id}
                  productId={item._id}
                  price={item.price}
                  title={item.title}
                  photoUrl={item.photos}
                />
              );

            return item.category.includes(activeTab) ? (
              <ProductCard
                widthWindow={widthWindow}
                key={item._id}
                productId={item._id}
                price={item.price}
                title={item.title}
                photoUrl={item.photos}
              />
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};
