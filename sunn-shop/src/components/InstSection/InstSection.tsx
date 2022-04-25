import React from "react";
import s from "./InstSection.module.css";

import post2 from "../../assets/img/post2.jpg";
import post3 from "../../assets/img/post3.jpg";
import post4 from "../../assets/img/post4.jpg";

type Props = { widthWindow: number };
export const InstSection: React.FC<Props> = ({ widthWindow }) => {
  return (
    <div className={`wrapper`}>
      <div className={s.content}>
        <div className={s.instSection__top}>
          <h3 className={`${widthWindow < 768 ? "Headline9" : "Headline2"} ${s.title}`}>instagram</h3>
          <p className={`Headline3 ${s.instName}`}>sunn_custom</p>
        </div>
        <div className={s.postbox}>
          <div className={s.postEL}>
            <img className={s.postImg} src={post2} alt="post" />
          </div>
          <div className={s.postEL}>
            <img className={s.postImg} src={post4} alt="post" />
          </div>
          <div className={s.postEL}>
            <img className={s.postImg} src={post3} alt="post" />
          </div>
          <div className={s.postEL}>
            <img className={s.postImg} src={post3} alt="post" />
          </div>
          <div className={s.postEL}>
            <img className={s.postImg} src={post2} alt="post" />
          </div>
          <div className={s.postEL}>
            <img className={s.postImg} src={post4} alt="post" />
          </div>
        </div>
      </div>
    </div>
  );
};
