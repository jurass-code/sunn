import React from "react";
import s from "./GiftPage.module.css";
import { ReactComponent as Ellipse } from "../../assets/img/circle.svg";
import { GiftForm } from "../GiftPage/GiftForm/GiftForm";
import { ExampleGift } from '../GiftPage/ExampleGift';
export const GiftPage: React.FC<any> = (props) => {
  const [value, setValue] = React.useState<number>(500);

  return (
    <div className="wrapper">
      <div className={s.titlePage}>
        <h2 className={`Headline2`}>Подарочный сертификат</h2>
      </div>
      <div className={s.description}>
        <p className={`text2 ${s.description__text}`}>
          Подарочный сертификат <b className="text2_bold">электронный</b>, после оплаты в течение 10-15 минут он будет доставлен
          получателю. Сертификат <b className={`text2_bold ${s.text2_pink}`}>бессрочный</b>, т.е. получатель подарка может
          воспользоваться им когда захочет!
        </p>
        <p className="super_small_text">
          *Сертификат может быть использован как для оплаты полной стоимости, так и в качестве скидки
        </p>
      </div>
      <div className={s.sertificate}>
        <div className={s.form}>
          <h5 className={`Headline5 ${s.sertificate__title}`}>Кто будет получателем сертификата?</h5>
          <GiftForm value={value} setValue={setValue} />
        </div>
        <ExampleGift />
      </div>
    </div>
  );
};
