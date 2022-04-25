import React from "react";
import { ReactComponent as Lamp } from "../../assets/img/lamp.svg";
import s from "./IdeaSection.module.css";

type Props = { widthWindow: number };
export const IdeaSection: React.FC<Props> = ({ widthWindow }) => {
  return (
    <div className={s.ideaSaction}>
      <div className={s.ideaSaction__bg}>
        <div className={s.ideaSaction__bgBorder}>
          <div className={s.wrapper}>
            <div className={s.ideaSaction__content}>
              <h3
                className={`${
                  widthWindow < 1440 && widthWindow >= 768 ? "Headline3" : widthWindow < 768 ? "text2 text2_bold" : "Headline10"
                } ${s.ideaSaction__headline}`}
              >
                Есть идея для кастома? Давай распишем твою вещь так, как тебе захочется!
              </h3>
              <div
                className={`${
                  widthWindow < 1440 && widthWindow >= 1024
                    ? "text2"
                    : widthWindow < 1024 && widthWindow >= 768
                    ? "text2"
                    : widthWindow < 768
                    ? "small_text"
                    : "text1"
                } ${s.ideaSaction__text}`}
              >
                Напиши мне в одной из социальных сетей, и мы вместе реализуем идею!
              </div>
              <div className={`${s.ideaSaction__links} ${widthWindow < 768
                    ? "text3 text3_semibold"
                    : 'Headline5'}`}>
                <a href="/" target="_blank" className="Link">
                  INSTAGRAM
                </a>
                <a href="/" target="_blank" className="Link">
                  TELEGRAM
                </a>
                <a href="/" target="_blank" className="Link">
                  VK
                </a>
              </div>
            </div>
          <Lamp className={s.bgLamp} />
          </div>
        </div>
      </div>
    </div>
  );
};
