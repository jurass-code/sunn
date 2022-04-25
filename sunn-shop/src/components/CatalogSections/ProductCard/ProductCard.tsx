import s from "./ProductCard.module.css";
import { ReactComponent as PriceImg } from "../../../assets/img/PriceImg.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../store/redux-store";

type PropsType = {
  price: number;
  title: string;
  photoUrl: string[];
  productId: string;
  widthWindow: number;
};

export const ProductCard: React.FC<PropsType> = ({ price, title, photoUrl, productId, widthWindow }) => {
  const cartItems = useSelector((state: AppStateType) => state.cartData.cartItemsId);
  const isAdded = !cartItems.find((el) => el === productId);
  return (
    <NavLink to={`/catalog/${productId}`}>
      <div className={s.background}>
        <div className={s.card__photo}>
          <img className={s.card__img} src={photoUrl[0]} alt="product" />
        </div>
        <h5 className={`${s.card__title} ${widthWindow > 768 ? "Headline5" : "text3 text3_bold"}`}>{title}</h5>
        {isAdded ? (
          <div className={s.card__price}>
            <p>{price + " р."}</p>
            <PriceImg className={s.card__priceImg} />
          </div>
        ) : (
          <p className={`Headline5 ${s.subtitle}`}>Товар уже в корзине</p>
        )}
      </div>
    </NavLink>
  );
};
