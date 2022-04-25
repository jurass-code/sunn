import React, { useState } from "react";
import s from "./FAQPage.module.css";
import { Question } from "./Question/Question";
import { FaqChapterTitle } from "./FaqChapterTitle/FaqChapterTitle";
import { FaqModal } from "./FaqModal/FaqModal";

type Props = {};
type QuestionType = { title: string; content: string };
type ContentArr = QuestionType[];

export const FAQPage: React.FC<Props> = () => {
  const content: ContentArr = [
    {
      title: "Как заказать?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam fuga maxime, id porro culpa! Similique hic tempora, recusandae aliquid suscipit cumque mollitia sint numquam iste eius assumenda. Accusantium, animi.",
    },
    {
      title: "Как заказать?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam fuga maxime, id porro culpa! Similique hic tempora, recusandae aliquid suscipit cumque mollitia sint numquam iste eius assumenda. Accusantium, animi.",
    },
    {
      title: "Как заказать?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam fuga maxime, id porro culpa! Similique hic tempora, recusandae aliquid suscipit cumque mollitia sint numquam iste eius assumenda. Accusantium, animi.",
    },
  ];
  const [isVisible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={"wrapper"}>
      <div className={s.titlePage}>
        <h2 className={`Headline2`}>вопросы и ответы</h2>
      </div>
      <div className={s.section}>
        <div className={s.subTitle}>
          <FaqChapterTitle title="Доставка, оплата и возврат" />
        </div>
        <div className={s.questionBlock}>
          {content.map((item, i) => {
            return content.length - 1 > i ? (
              <>
                <Question title={item.title} content={item.content} />
                <hr className={s.hr} />
              </>
            ) : (
              <Question title={item.title} content={item.content} />
            );
          })}
        </div>
      </div>
      <div className={s.section}>
        <div className={s.subTitle}>
          <FaqChapterTitle title="Доставка, оплата и возврат" />
        </div>
        <div className={s.questionBlock}>
          {content.map((item, i) => {
            return content.length - 1 > i ? (
              <>
                <Question title={item.title} content={item.content} />
                <hr className={s.hr} />
              </>
            ) : (
              <Question title={item.title} content={item.content} />
            );
          })}
        </div>
      </div>
      <div className={s.section}>
        <div className={s.subTitle}>
          <FaqChapterTitle title="Подарочный сертификат" />
        </div>
        <div className={s.questionBlock}>
          {content.map((item, i) => {
            return content.length - 1 > i ? (
              <>
                <Question title={item.title} content={item.content} />
                <hr className={s.hr} />
              </>
            ) : (
              <Question title={item.title} content={item.content} />
            );
          })}
        </div>
      </div>
      <div
        onClick={() => {
          openModal();
        }}
        className={s.btnBox}
      >
        <button className={"large"}>Задать свой вопрос</button>
      </div>
      <div className={`${s.modal} ${isVisible ? s.active : ""}`}>
        <FaqModal closeModal={closeModal} />
      </div>
    </div>
  );
};
