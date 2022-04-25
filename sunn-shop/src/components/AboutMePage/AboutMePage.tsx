import React from "react";
import s from "./AboutMePage.module.css";
import { ReactComponent as DeliveryCirlce } from "../../assets/img/deliveryCirlce.svg";
import { ReactComponent as ArrowPink } from "../../assets/img/Arrow_pink.svg";
import { ReactComponent as ImportantImg } from "../../assets/img/important.svg";
import { ReactComponent as Inst } from "../../assets/img/instagram.svg";
import { ReactComponent as ContactImg } from "../../assets/img/Contact.svg";

type Props = {};
export const AboutMePage: React.FC<Props> = () => {
  return (
    <div>
      <div className="wrapper">
        <article className={s.delivery}>
          <div className={s.delivery__content}>
            <h4 className={`Headline9 ${s.delivery__title}`}>Способы доставки</h4>
            <p className={`${s.delivery__text} Headline4`}>
              Заказы по России доставляются Почтой России и СДЭК, международные — только Почтой России
            </p>
            <p className={`${s.delivery__text} ${s.delivery__text_marg} text3`}>
              После оформления заказа на ваш e-mail сразу придет письмо с подтверждением. На следующий рабочий день заказ
              передается в СДЭК и вам отправляется трек-номер, чтобы вы могли отслеживать приближение заветной посылки.
            </p>
            <p className={`${s.delivery__text} text3_semibold`}>
              Стоимость и сроки доставки рассчитываются индивидуально — все зависит от удаленности региона доставки.
            </p>
          </div>
          <div className={s.delivery__contentForMosc}>
            <div className={s.delivery__contentForMoscText}>
              <p className={`${s.delivery__text} Headline4`}>Доставка для Москвы и Московской области</p>
              <ul className={`${s.delivery__text} ${s.delivery__text_marg} text3 ${s.delivery__contentForMosc_list}`}>
                <li>Привезу ваш заказ прямо до двери</li>
                <li>Выберем место встречи и я передам вам заказ</li>
                <li>Самовывоз </li>
                <li>Отправка заказа через такси</li>
              </ul>
              <p className={`${s.delivery__text} text3`}>Выбирайте удобный для себя вариант!</p>
            </div>
            <DeliveryCirlce className={s.delivery__contentForMoscImg} />
          </div>
        </article>
        <article className={s.payment}>
          <div className={s.payment__contentLeft}>
            <h4 className={`Headline9 ${s.payment__title}`}>Оплата</h4>
            <p className={`${s.payment__contentLeftText} Headline4`}>
              Оплатить заказ на сайте можно онлайн-переводом по номеру телефона / карты
            </p>
            <ArrowPink className={s.payment__arrow} />
          </div>
          <div className={s.payment__instruction}>
            <h6 className={`Headline4 ${s.payment__instructionTitle}`}>Инструкция по оплате</h6>
            <p className={`text3`}> 1. Выберите товары, заполните данные в корзине и нажмите «Оформить заказ»</p>
            <p className={`text3 ${s.payment__instructionText_marg}`}>
              2. Откроется страница благодарности за покупку, и я свяжусь с вами по Whats app для подтверждения деталей заказа и
              передачи платежной информации
            </p>
            <p className="text3"> 3. После оплаты на вашу почту поступит чек с указанием состава заказа и поступившим платежом</p>
            <ImportantImg className={s.payment__instructionImportantImg} />
          </div>
        </article>
        <article className={s.contacts}>
          <div className={s.contacts__info}>
            <h4 className={`Headline9 ${s.contacts__title}`}>Rонтакты</h4>
            <p className={`Headline4 ${s.contacts__text} ${s.contacts__text_margTwo}`}>
              У вас есть вопросы по заказу или вещам? Кидайте их на почту 
              <a className={`${s.contacts__textLink}`} target="_blank" href="mailto:a-suntsova@inbox.ru">
                {" "}
                sunn_maksimova@mail.ru
              </a>{" "}
              или загляните в раздел
              <a className={`${s.contacts__textLink}`} href="#">
                {" "}
                FAQ{" "}
              </a>
              — возможно, там уже есть ответ
            </p>
            <p className={`text2 ${s.contacts__text} ${s.contacts__text_margOne}`}>Также связаться со мной можно по телефону:</p>
            <p className={`Headline4 ${s.contacts__text} ${s.contacts__text_margTwo}`}>+ 7 (967) - 918 - 93 - 93</p>
            <p className={`text2 ${s.contacts__text} ${s.contacts__text_margOne}`}>Либо написать в социальные сети:</p>
            <div>
              <a href="#">
                <Inst className={s.contact__inst} />
              </a>
            </div>
          </div>
          <div className={s.contacts__img}>
            <ContactImg />
          </div>
        </article>
      </div>
    </div>
  );
};
