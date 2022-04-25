import React from "react";
import s from "./DonatPage.module.css";

type Props = {};
export const DonatPage: React.FC<Props> = () => {
  return (
    <div className={s.donatBg}>
      <div className="wrapper">
        <div className={s.content}>
          <h2 className={`Headline2 ${s.title}`}>Поддержать проект</h2>
          <div className={s.textBox}>
            <p className={`${s.aboutMe} text1`}>
              <b>SunN Custom</b> — молодой развивающийся бренд .Если у вас есть желание и возможность поддержать проект денежными
              средствами, то вы можете сделать денежный перевод на банковскую карту и перечислить любую сумму, которая для вас
              будет комфортна . Средства пойдут на дальнейшее развитие бренда.
            </p>
            <p className={`${s.textCard} Headline4`}>Карта Сбербанка: <span className={s.textCard_num}>4276 4000 6275 6078</span></p>
            <p className={`${s.textCard} Headline4`}>Карта Тинькофф: <span className={s.textCard_num}>4276 4000 6275 6078</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};
