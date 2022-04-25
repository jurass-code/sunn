import React, { useState } from "react";
import { ReactComponent as Cross } from "../../../../assets/img/cross.svg";
import s from "./HintModal.module.css";
import { ExampleHintModal } from "./ExampleHintModal";
import { FormHintModal } from "./FormHintModal";

type Props = { closeModal: () => void; photo: string };

export const HintModal: React.FC<Props> = ({ closeModal, photo }) => {
  const [senderName, setSenderName] = useState("");
  const [addresseeName, setAddresseeName] = useState("");
  const onClick = (e: any) => {
    if (e.target.classList.contains(s.modal) || e.target.classList.contains(s.cross)) {
      closeModal();
    }
  };

  return (
    <div onClick={onClick} className={`${s.modal}`}>
      <div className={s.window}>
        <div className={s.content}>
          <Cross className={s.cross} />
          <div className={s.mainContent}>
            <ExampleHintModal sender={senderName} addressee={addresseeName} photo={photo} />
            <FormHintModal setSenderName={setSenderName} setAddresseeName={setAddresseeName}/>
          </div>
        </div>
      </div>
    </div>
  );
};
