import React, { useState } from "react";
import s from "./GiftForm.module.css";
import GiftPageStyles from "../GiftPage.module.css";
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from "formik";
import { ReactComponent as Checked } from "../../../assets/img/check.svg";
import { Checkbox, Slider, Typography } from "@mui/material";
import { ReactComponent as Ellipse } from "../../../assets/img/price.svg";
import { ExampleGift } from "../ExampleGift";

type Values = {
  addressee: string;
  sender: string;
  checkbox: boolean;
  email: string;
  message: string;
  slider: number;
};
type Errors = {
  addressee?: string;
  sender?: string;
  checkbox?: boolean;
  email?: string;
  message?: string;
};

const validateForm = (values: Values) => {
  const errors: Errors = {};
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export const GiftForm: React.FC<any> = ({ value, setValue }) => {
  const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    values.slider = value;
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 0);
  };

  const [modal, setModal] = React.useState(false);
  const openModal = (values: Values) => {
    setModal(true);

  };
  return (
    <div>
      {modal && (
      <div className={s.modal}>
        <ExampleGift />
      </div>
    )}
      <Formik
        initialValues={{
          addressee: "",
          email: "",
          checkbox: false,
          message: "",
          slider: 500,
          sender: "",
        }}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        {({ errors, values, handleChange }) => (
          <Form>
            <div className={"formikItem"}>
              <Field
                className={`text3 input ${errors.addressee ? "invalid" : " "}`}
                id="addressee"
                name="addressee"
                placeholder="Имя и фамилия"
              />
              <ErrorMessage className={`super_small_text errorMessage`} name="firstName" component="div" />
            </div>

            <div className={`formikItem ${s.formikItem_email}`}>
              <Field
                className={`text3 input ${errors.email ? "invalid" : " "}`}
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
              />
              <ErrorMessage className={`super_small_text errorMessage`} name="email" component="div" />
            </div>
            <h5 className={`Headline5 ${GiftPageStyles.sertificate__title}`}>Номинал сертификата</h5>
            <div>
              <SliderCustom value={value} setValue={setValue} />
            </div>
            <h5 className={`Headline5 ${GiftPageStyles.sertificate__title}`}>Что будет написано в сообщении?</h5>

            <div className={`formikItem ${s.formikItem_pad}`}>
              <Field
                className={`text3 input ${s.textarea} ${errors.addressee ? "invalid" : " "}`}
                id="message"
                name="message"
                placeholder="Введите текст, который получит адресат"
                component="textarea"
              />
              <ErrorMessage className={`super_small_text errorMessage`} name="question" component="div" />
            </div>
            <div className={"formikItem"}>
              <Field
                className={`text3 input ${errors.addressee ? "invalid" : " "}`}
                id="sender"
                name="sender"
                placeholder="От кого"
              />
              <ErrorMessage className={`super_small_text errorMessage`} name="firstName" component="div" />
            </div>

            <div className={`Headline5 ${s.price}`}>
              <p>ИТОГО: {value} руб.</p>
              <Ellipse className={s.price__img} />
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
            <div className={s.btnBox}>
              <button className={`button medium ${s.submit}`} disabled={!values.checkbox} type="submit">
                {/* <button className={`button large ${s.submit}`} type="submit"> */}
                Добавить в корзину
              </button>
              <button
                className={`button medium`}
                onClick={() => {
                  openModal(values);
                }}
              >
                Просмотр
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
type PropsSliderCustomType = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};
const SliderCustom: React.FC<PropsSliderCustomType> = (props) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      props.setValue(newValue);
    }
  };
  const marks = [
    {
      value: 1300,
      label: "500 ₽",
    },
    {
      value: 14000,
      label: "15000 ₽",
    },
  ];
  return (
    <div className={s.sliderInpBox}>
      <Typography
        className={`text3`}
        id="non-linear-slider"
        gutterBottom
        sx={{ color: "#303030", fontFamily: "Montserrat", fontWeight: "400", fontSize: "14px", lineHeight: "18px" }}
      >
        {props.value} ₽
      </Typography>
      <div className={s.sliderInp}>
        <Slider
          id="slider"
          name="slider"
          value={props.value}
          min={500}
          step={100}
          max={15000}
          onChange={handleChange}
          aria-labelledby="non-linear-slider"
          marks={marks}
          sx={{
            color: "#E155B0",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-markLabel": {
              color: "#f2f2f2",
              fontFamily: "Montserrat",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "15px",
            },
            "& .MuiSlider-thumb": {
              width: 20,
              height: 20,
              backgroundColor: "#E155B0",
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
            "& .MuiSlider-mark": {
              display: "none",
            },
          }}
        />
      </div>
    </div>
  );
};
