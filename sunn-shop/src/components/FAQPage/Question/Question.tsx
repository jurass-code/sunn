import React, { MouseEventHandler } from "react";
import s from "./Question.module.css";
import { ReactComponent as Arrow } from "../../../assets/img/btnArrow.svg";

type Props = { title: string; content: string };

export const Question: React.FC<Props> = ({ title, content }) => {
  const handlerClick = (e:any) => {
    e.target.closest(".question").classList.toggle(s.active);
  };

  return (
    <div className={`question ${s.questionBox}`} onClick={handlerClick}>
      <div className={s.titleBox}>
        <h5 className={`${s.title} Headline4`}>{title}</h5>
        <Arrow className={s.arrowImg} />
      </div>
      <p className={`${s.content} text3`}>{content}</p>
    </div>
  );
};
