import React from "react";
import s from "./AboutSection.module.css";

type Props = { widthWindow: number };
export const AboutSection: React.FC<Props> = ({widthWindow}) => {
  return (
    <section className={s.bg}>
      <div className="wrapper">
        <div className={s.content}>
          <div className={s.leftColumn}>
            <h4 className={`${s.aboutMeTitle} ${widthWindow < 768 ? "Headline6" : "Headline2"}`}>
              Одежда — не просто вещь, Это отражение твоей <span className={s.aboutMeTitle_yellow}>личности</span>
            </h4>
          </div>
          <div className={s.rightColumn}>
            <div className={s.box__text}>
              <p className={`${widthWindow < 768 ? "text3" : "text1"}`}>
                <b>Кастомизированные вещи</b> - это одежда для свободных духом людей, ценящих свободу самовыражения и
                индивидуальность. Такой элемент одежды способен подчеркнуть личность владельца, отразить его внутренний мир
              </p>
            </div>
            <div className={s.box__img}></div>
            <div className={s.box__text}>
              <h6 className={`Headline5 ${s.rightColumn__title}`}>Эксклюзивный предмет гардероба</h6>
              <p className={`${widthWindow < 768 ? "text3" : "text2"}`}>
                В SunN Custom каждая вещь расписывается в единственном экземпляре и без повторов. Вы можете приобрести уникальный
                элемент одежды, который будет только у вас!
              </p>
            </div>
            <div className={s.box__text}>
              <h6 className={`Headline5 ${s.rightColumn__title}`}>Только качественные материалы</h6>
              <p className={`${widthWindow < 768 ? "text3" : "text2"}`}>
                При нанесении рисунка используются специальные акриловые краски для ткани высокого качества, которые и после
                стирки сохранят свои цвета. Краски экологичные и не вызывают аллергии. Расписанные вещи можно носить каждый день!
              </p>
            </div>
            <div className={s.box__text}>
              <h6 className={`Headline5 ${s.rightColumn__title}`}>Кастомайзинг ваших вещей</h6>
              <p className={`${widthWindow < 768 ? "text3" : "text2"}`}>
                Можно расписать твою вещь по индивидуальному эскизу. Для этого напиши{" "}
                <a className={s.text_link} href="/">
                  в личные сообщения
                </a>
                , чтобы мы скорее воплотили твою идею и... <b className={s.text_yellow}>Добро пожаловать в мир кастома!</b>
              </p>
            </div>
            <div className={s.signature}>
              <h5 className={`text4 ${s.sign}`}>— Настя SunN Custom</h5>
              <p className={`super_small_text ${s.signature_text}`}>Основательница бренда</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
