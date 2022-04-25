import React from "react";
import s from "./ExampleHintModal.module.css";
import { ReactComponent as Heart } from "../../../../assets/img/heart.svg";
import { ReactComponent as Cloud } from "../../../../assets/img/modal_cloud.svg";

type Props = {
  photo: string;
  sender: string;
  addressee: string;
};

export const ExampleHintModal: React.FC<Props> = ({ photo, sender, addressee }) => {
  return (
    <div className={s.content}>
      <p className={`${s.text} text2`}>Здравствуйте, {"_________" && addressee}!</p>
      <p className={`${s.text} text3`}>
        Мы знаем, что {"_________" && sender} мечтает о толстовке «Look mom I can fly» , поэтому мы решили намекнуть вам об этом
      </p>
      <div className={s.text_withHeart}>
        <p className="text3 text3_semibold">Дарите тепло своим близким</p>
        <Heart />
      </div>
      <div className={s.hintImageBox}>
        <Cloud className={s.cloud} />
        <img className={s.hintImage} src={photo} alt="product" />
      </div>
    </div>
  );
};
