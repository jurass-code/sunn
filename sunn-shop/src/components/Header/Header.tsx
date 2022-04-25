import React from "react";
import logo from "../../assets/img/logo.svg";
import { ReactComponent as Cart } from "../../assets/img/cart.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/redux-store";

type Props = {
  widthWindow: number;
};

export const Header: React.FC<Props> = ({ widthWindow }) => {
  const totalItemsCart = useSelector((state: AppStateType) => state.cartData.cartItemsId).length;
  return (
    <header className={s.header}>
      <div className={s.headerWrap}>
        <NavLink to={"/"}>
          <img className={s.logo} src={logo} alt="logo" />
        </NavLink>
        <div>
          <ul className={`${s.header__list} ${widthWindow >= 768 && widthWindow < 1024 ? "text3" : "text2"}`}>
            <li className={s.header__listEl}>
              <NavLink activeClassName={s.active} className={`Link`} to="/catalog">
                Каталог
              </NavLink>
            </li>
            <li className={s.header__listEl}>
              <NavLink activeClassName={s.active} className={`Link`} to="/delivery">
                Доставка
              </NavLink>
            </li>
            <li className={s.header__listEl}>
              <NavLink activeClassName={s.active} className={`Link`} to="/about">
                Обо мне
              </NavLink>
            </li>
            <li className={s.header__listEl}>
              <NavLink activeClassName={s.active} className={`Link`} to="/contacts">
                Контакты
              </NavLink>
            </li>
            <li className={`${s.header__listEl} ${s.header__listEl_donat}`}>
              <NavLink activeClassName={s.active + " " + s.active_pink} className={`Link`} to="/donat">
                Поддержать проект
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={s.cartBox}>
          <NavLink activeClassName={s.active + " " + s.linkCart} to="/cart">
            <Cart className={s.cartImg} />
            <p className={s.totalItemsCartText}>{totalItemsCart}</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
