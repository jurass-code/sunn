import React, { MouseEventHandler } from "react";
import s from "./FaqChapterTitle.module.css";

type Props = { title: string };

export const FaqChapterTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className={s.box}>
      <h3 className={`Headline3 ${s.title}`}>{title}</h3>
    </div>
  );
};
