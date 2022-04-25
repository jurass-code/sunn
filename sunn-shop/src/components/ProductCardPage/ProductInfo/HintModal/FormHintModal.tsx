import React from "react";
import s from "./FormHintModal.module.css";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import { Checkbox } from "@mui/material";
import { ReactComponent as WinkingFace } from "../../../../assets/img/WinkingFace.svg";

type Values = {
  addresseeName: string;
  checkbox: boolean;
  addresseeEmail: string;
  senderName: string;
  senderEmail: string;
};
type Errors = {
  addresseeName?: string;
  checkbox?: boolean;
  addresseeEmail?: string;
  senderEmail?: string;
  senderName?: string;
};
type Props = {
  setSenderName: (text: string) => void;
  setAddresseeName: (text: string) => void;
};
export const FormHintModal: React.FC<Props> = ({ setSenderName, setAddresseeName }) => {
  const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  const validateForm = (values: Values) => {
    const errors: Errors = {};
    if (!values.addresseeName) {
      errors.addresseeEmail = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.addresseeEmail)) {
      errors.addresseeEmail = "Invalid email address";
    }
    return errors;
  };
  return (
    <Formik
      initialValues={{
        addresseeName: "",
        addresseeEmail: "",
        checkbox: false,
        senderEmail: "",
        senderName: "",
      }}
      validate={validateForm}
      onSubmit={onSubmit}
    >
      {({ errors, values, handleChange }) => (
        <Form className={s.hintModalForm}>
          <div className={s.title}>
            <h5 className="Headline5">Простой способ намекнуть о подарке</h5>
            <WinkingFace />
          </div>
          <div className={"formikItem"}>
            <Field
              className={`text3 input ${errors.addresseeName ? "invalid" : " "}`}
              id="addresseeName"
              name="addresseeName"
              placeholder="Имя того, кому нужно намекнуть"
              onChange={(e: any) => {
                handleChange(e);
                setAddresseeName(e.target.value);
              }}
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="addresseeName" component="div" />
          </div>

          <div className={"formikItem"}>
            <Field
              className={`text3 input ${errors.addresseeEmail ? "invalid" : " "}`}
              id="addresseeEmail"
              name="addresseeEmail"
              type="email"
              placeholder="E-mail получателя"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="addresseeEmail" component="div" />
          </div>
          <div className={"formikItem"}>
            <Field
              className={`text3 input ${errors.senderName ? "invalid" : " "}`}
              id="senderName"
              name="senderName"
              placeholder="Ваше имя"
              onChange={(e: any) => {
                handleChange(e);
                setSenderName(e.target.value);
              }}
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="senderName" component="div" />
          </div>
          <div className={"formikItem"}>
            <Field
              className={`text3 input ${errors.senderEmail ? "invalid" : " "}`}
              id="senderEmail"
              name="senderEmail"
              type="email"
              placeholder="Ваш e-mail"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="senderEmail" component="div" />
          </div>

          <div className={s.formikCheckbox}>
            <div className={s.checkBoxFlex}>
              <label className={`${s.checkboxLabel} `} htmlFor="checkbox">
                <Checkbox
                  id="checkbox"
                  name="checkbox"
                  value={values.checkbox}
                  onChange={handleChange}
                  sx={{
                    color: "#F2C94C",
                    "&.Mui-checked": {
                      color: "#F2C94C",
                    },
                  }}
                />
              </label>
            </div>
            <p className={`super_small_text ${s.checkboxText}`}>Я ознакомился и согласен на обработку персональных данных</p>
          </div>
          <button className={`button large ${s.submit}`} disabled={!values.checkbox} type="submit">
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
};
