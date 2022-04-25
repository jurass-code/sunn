import React, { useState } from "react";
import { itemProductType } from "../../../store/products-reducer";
import s from "./ProductInfo.module.css";
import { Spoiler } from "./Spoiler";
import { ReactComponent as Gift } from "../../../assets/img/gift.svg";
import { ReactComponent as Delivery } from "../../../assets/img/delivery.svg";
import { ReactComponent as Done } from "../../../assets/img/done.svg";
import { Gallery } from "./Gallery";
import { HintModal } from "./HintModal/HintModal";
import { useDispatch } from "react-redux";
import { actionsCart } from "../../../store/cart-reducer";
import { NavLink } from "react-router-dom";

type Props = {
  productItem: itemProductType;
  cartItems: string[];
  widthWindow: number;
};

export const ProductInfo: React.FC<Props> = ({ productItem, cartItems, widthWindow }) => {
  const [isVisible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const isAdded = !cartItems.find((el) => el === productItem._id);
  const openModal = () => {
    setVisible(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className={"wrapper " + s.backgroundProductInfo}>
      <div className={s.content}>
        <Gallery photos={productItem.photos} />
        <div className={s.productInfo}>
          <h3 className={` ${widthWindow < 1024 ? "Headline5" : "Headline3"} ${s.title}`}>{productItem.title}</h3>
          <p className={`super_small_text ${s.category}`}>{productItem.category}</p>
          <p className={`${widthWindow < 1024 ? "text3" : "text2"} ${s.excerpt}`}>{productItem.excerpt}</p>
          <Spoiler widthWindow={widthWindow} title="Описание и размер" content={productItem.description} />
          <Spoiler widthWindow={widthWindow} title="Состав и уход" content={productItem.compositionCare} />
          <section className={s.sectionPrice}>
            <div className={s.price}>
              <p className="Headline3">{productItem.price} р.</p>
              {isAdded ? (
                <button
                  className={`button medium ${s.priceBtn}`}
                  onClick={() => {
                    dispatch(actionsCart.addItemToCart(productItem._id));
                  }}
                >
                  Добавить в корзину
                </button>
              ) : (
                <NavLink to={"/cart"}>
                  <button className={`button medium ${s.priceBtn}`}>Перейти в корзину</button>
                </NavLink>
              )}
            </div>
            <div>
              <button
                className={`button medium large_gift ${s.giftBtn}`}
                onClick={() => {
                  openModal();
                }}
              >
                <Gift className="imgGift" />
                Намекнуть о подарке
              </button>
            </div>
          </section>
          <div className={s.deliverySection}>
            <Delivery className={s.deliveryImg} />
            <p className="text3_semibold">
              Доставка Почтой России и СДЭК. Для Москвы и МО — действует самовывоз, доставка на такси
            </p>
          </div>
        </div>
      </div>
      <div className={`${s.advantages} ${widthWindow < 1024 ? "text5" : "Headline6"}`}>
        <div className={s.advantage}>
          <Done />
          <p>полностью ручная работа</p>
        </div>
        <div className={s.advantage}>
          <Done />
          <p>{widthWindow >= 1024 ? "Специализированная краска для ткани" : "Специальная краска по ткани"}</p>
        </div>
        <div className={s.advantage}>
          <Done />
          <p>{widthWindow >= 1024 ? "Вещь в единственном экземпляре" : "единственный экземпляр"}</p>
        </div>
        <div className={s.advantage}>
          <Done />
          <p>изображение не боится воды</p>
        </div>
      </div>
      <div className={`${s.modal} ${isVisible ? s.active : ""}`}>
        <HintModal photo={productItem.photos[0]} closeModal={closeModal} />
      </div>
    </div>
  );
};
