import React from "react";
import { ReactComponent as Cross } from "../../../assets/img/cross.svg";
import s from "./FaqModal.module.css";
import { FaqForm } from "./FaqForm";

type Props = { closeModal: () => void };

export const FaqModal: React.FC<Props> = ({ closeModal }) => {
  const onClick = (e: any) => {
    if (e.target.classList.contains(s.modal) || e.target.classList.contains(s.cross)) {
      console.log(e);
      closeModal();
    }
  };

  return (
    <div onClick={onClick} className={`${s.modal}`}>
      <div className={s.window}>
        <div className={s.content}>
          <Cross className={s.cross} />
          <div>
            <h5 className={` ${s.title} Headline5`}>Задать вопрос</h5>
            <FaqForm />
          </div>
        </div>
      </div>
    </div>
  );
};
