import React from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import { ReactComponent as Checked } from ".././../../assets/img/check.svg";
import s from "./FaqModal.module.css";

type Values = {
  firstName: string;
  checkbox: boolean;
  email: string;
  question: string;
};
type Errors = {
  firstName?: string;
  checkbox?: boolean;
  email?: string;
  question?: string;
};
type Props = {};
const validateForm = (values: Values) => {
  const errors: Errors = {};
  if (!values.firstName) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export const FaqForm: React.FC<Props> = () => {
  const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        checkbox: false,
        question: "",
      }}
      validate={validateForm}
      onSubmit={onSubmit}
    >
      {({ errors, values }) => (
        <Form>
          <div className={"formikItem"}>
            <Field
              className={`text3 input ${errors.firstName ? "invalid" : " "}`}
              id="firstName"
              name="firstName"
              placeholder="Имя"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="firstName" component="div" />
          </div>

          <div className={"formikItem"}>
            <Field
              className={`text3 input ${errors.firstName ? "invalid" : " "}`}
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="email" component="div" />
          </div>

          <div className={`formikItem ${s.formikItem_pad}`}>
            <Field
              className={`text3 input ${s.textarea} ${errors.firstName ? "invalid" : " "}`}
              id="question"
              name="question"
              placeholder="Введите вопрос"
              component="textarea"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="question" component="div" />
          </div>

          <div className={s.formikCheckbox}>
            <div className={`${s.checkbox} ${values.checkbox ? s.checkboxActive : " "}`}>
              <label className={`${s.checkboxLabel} `} htmlFor="checkbox">
                <Field id="checkbox" name="checkbox" type="checkbox" />
                <Checked className={values.checkbox ? s.active : s.unchecked} />
              </label>
            </div>
            <p className={`super_small_text ${s.checkboxText}`}>Я ознакомился и согласен на обработку персональных данных</p>
            <ErrorMessage className={`super_small_text ${s.errorMessage}`} name="checkbox" component="div" />
          </div>

          <button className={`button large ${s.submit}`} disabled={!values.checkbox} type="submit">
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
};
