import React from "react";
import logo from "../../assets/img/logo.svg";
import s from "./Footer.module.css";
//import { ReactComponent as Inst } from "../../assets/img/instagram.svg";
import backToTopButton from "../../assets/img/backToTopButton.svg";
import RunningLine from "../../assets/img/RunningLine.gif";
import { goToTop } from "../../assets/func";
import { NavLink } from "react-router-dom";
//import { ReactComponent as Telegram } from "../../assets/img/telegram.svg";

type Props = { widthWindow: number };
export const Footer: React.FC<Props> = ({ widthWindow }) => {
  return (
    <footer className={s.footer}>
      <img src={RunningLine} alt="RunningLine" />
      <div className={s.footerWrap}>
        <div className={s.footerWrap__top}>
          <NavLink className={s.logo_footer} to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
          <div>
            <div className={s.footer__menu}>
              <ul className={`${s.footer__list} ${widthWindow >= 1440 ? "text3" : "small_text"}`}>
                <li className={s.footer__listEl}>Каталог</li>
                <li className={s.footer__listEl}>Доставка</li>
                <li className={s.footer__listEl}>Обо мне</li>
                <li className={s.footer__listEl}>Контакты</li>
                <li className={s.footer__listEl}>FAQ</li>
                <li className={s.footer__listEl}>Задать вопрос </li>
                <li className={s.footer__listEl}>Политика конфиденциальности</li>
                <li className={s.footer__listEl}>Гарантии и риски</li>
                <li className={s.footer__listEl}>Соглашение на обработку данных</li>
              </ul>
            </div>
          </div>
          <div className={s.footer__boxLinks}>
            {/* <div className={s.footer__linkInst+" " + s.iconBox}>
              <Inst />
            </div>
            <div className={s.footer__linkInst + " " + s.iconBox}>
              <Telegram className={s.tgIcon} />
            </div> */}
            <div
              className={s.footer__linkBackToTop}
              onClick={() => {
                goToTop();
              }}
            >
              <img src={backToTopButton} alt="goToTop" />
            </div>
          </div>
        </div>
        <div className={s.footer__menu}>
          <ul className={`${s.footer__list} ${s.footer__list_mob} ${widthWindow >= 1440 ? "text3" : "small_text"}`}>
            <li className={s.footer__listEl}>Каталог</li>
            <li className={s.footer__listEl}>Доставка</li>
            <li className={s.footer__listEl}>Обо мне</li>
            <li className={s.footer__listEl}>Контакты</li>
            <li className={s.footer__listEl}>FAQ</li>
            <li className={s.footer__listEl}>Задать вопрос </li>
            <li className={s.footer__listEl}>Политика конфиденциальности</li>
            <li className={s.footer__listEl}>Гарантии и риски</li>
            <li className={s.footer__listEl}>Соглашение на обработку данных</li>
          </ul>
        </div>
        <div className={s.copyrights}>
          <a className={`${s.copyrights__link} super_small_text`} href="/">
            © Sunn Custom, 2021
          </a>
        </div>
      </div>
    </footer>
  );
};
