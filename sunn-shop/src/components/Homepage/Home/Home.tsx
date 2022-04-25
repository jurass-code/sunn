import React from "react";
import s from "./Home.module.css";
import { ReactComponent as Stroke } from "../../../assets/img/EllipseText_pink.svg";

type Props = { widthWindow: number };

export const Home: React.FC<Props> = ({ widthWindow }) => {
  return (
    <div className={`${s.bgHome}`}>
      <div className="wrapper">
        <div className={`${s.content} `}>
          <div className={`${s.top}`}>
            <h3
              className={`${s.top__title} ${
                widthWindow < 1440 && widthWindow >= 1024
                  ? "Headline10"
                  : widthWindow < 1024 && widthWindow >= 768
                  ? "Headline3"
                  : widthWindow < 768
                  ? "Headline5"
                  : "Headline7"
              }`}
            >
              Интернет-магазин
            </h3>
            <div className={s.top__box}>
              <p
                className={`${s.top__text} ${
                  widthWindow < 1024 && widthWindow >= 768 ? "text3" : widthWindow < 768 ? "super_small_text" : `text2`
                }`}
              >
                Апгрейд твоего гардероба
              </p>
              <Stroke  className={s.strokeImg} />
            </div>
          </div>
          <div className={s.center}>
            <h1 className={`${s.main__title}`}>sunn custom</h1>
          </div>
          <div className={s.bottom}>
            <div className={s.btnBox}>
              <button className="button large">Перейти в каталог</button>
            </div>
            <div className={s.bottom__box}>
              <p
                className={`${s.bottom__boxTopText} ${
                  widthWindow < 1440 && widthWindow >= 1024
                    ? "Headline3"
                    : widthWindow < 1024 && widthWindow >= 768
                    ? "Headline11"
                    : widthWindow < 768
                    ? "text1"
                    : "Headline8"
                }`}
              >
                кастомизированной одежды
              </p>
              <p className={`${s.bottom__boxBotText} ${widthWindow < 768 ? "Headline6" : "Headline9"}`}>ручной работы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
