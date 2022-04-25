import React from "react";
import s from "./Spoiler.module.css";
import { ReactComponent as Cross } from "../../../assets/img/cross.svg";
import { ReactComponent as Dash } from "../../../assets/img/minus.svg";

type spoilerProps = {
  title: string;
  content: string[];
  widthWindow: number;
};
export const Spoiler: React.FC<spoilerProps> = ({ widthWindow, title, content }) => {
  const handlerClick = (e: any) => {
    e.target.closest(".spoiler").classList.toggle(s.active);
  };
  return (
    <div className={`spoiler ${s.spoilerBox}`} onClick={handlerClick}>
      <div className={s.titleBox}>
        <h5 className={`${s.title} ${widthWindow < 1440 ? "text3 text3_semibold" : "text2 text2_bold"}`}>{title}</h5>
        <Cross className={s.cross} />
        <Dash className={s.dash} />
      </div>
      <div className={s.content}>
        <ul className={`${s.contentList} ${widthWindow < 1440 ? "small_text" : "text3"}`}>
          {content.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <hr className={s.hr} />
      </div>
    </div>
  );
};
