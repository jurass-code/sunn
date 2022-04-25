import React from "react";
import s from "./GiftPage.module.css";
import { ReactComponent as Ellipse } from "../../assets/img/circle.svg";

export const ExampleGift: React.FC<any> = (props) => {
  return (
    <div className={s.example}>
      <h5 className={`Headline5 ${s.sertificate__title}`}>Пример сертификата:</h5>
      <div className={s.sertificateContent}>
        <div className={s.sertificateContent__top}>
          <p className={s.sertificateContent__title}>
            your special gift
            <br /> certificate
            <br /> for <b className={s.sertificate__title_yellow}>creativity</b>
          </p>
        </div>
        <div className={s.nominal}>
          <p className={`text2 text2_bold ${s.nominal__text}`}>Номинал сертификата:</p>
          <p className={`text2 text2_bold ${s.nominal__price}`}>
            500 р. <Ellipse className={s.nominal__priceImg} />
          </p>
        </div>
        <div className={s.congratulation}>
          <div className={`text2 ${s.congratulationFrom}`}>
            <p>Кому:</p>
            <p className={`text2_bold ${s.congratulationFrom__name}`}>Tratata</p>
          </div>
          <div className={s.congratulationText}>
            <div className={s.congratulationText__to}>
              <p>От кого:</p>
              <p className={s.congratulationText__Name}>Tratata</p>
            </div>
            <div className={s.congratulationText__text}>
              <p>Здесь будет ваше поздравление...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
