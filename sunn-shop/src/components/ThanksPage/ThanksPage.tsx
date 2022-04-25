import React from "react";
import s from "./ThanksPage.module.css";

type Props = {};
export const ThanksPage: React.FC<Props> = () => {
  return (
    <div className={s.bg}>
      <div className="wrapper">
        <div className={s.content}>
          <h2 className={`Headline2 ${s.title}`}>спасибо за покупку!</h2>
          <div className={s.textBox}>
            <p className={`${s.text} text1`}>
              Скоро вам придет сообщение по указанному номеру для подтверждения заказа и его оплаты
            </p>
            <p className={`${s.subTitle} text2 text2_bold`}>
              А пока окунитесь в мир кастома в моем Instagram: <a  className={`Link ${s.subTitleLink}`} href="#">sunn_custom</a>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
