import React from "react";
import s from "./CartPage.module.css";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import { ReactComponent as Checked } from "../../assets/img/check.svg";
import { Delivery } from "./delivery/Delivery";
import { Checkbox, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { ReactComponent as Ellipse } from "../../assets/img/price.svg";
import { ReactComponent as Cross } from "../../assets/img/cross.svg";
import { itemProductType } from "../../store/products-reducer";

type Props = { cartItems: itemProductType[] };
type Values = {
  fullName: string;
  checkbox: boolean;
  phone: string;
  email: string;
  question: string;
  city: string;
};
type Errors = {
  fullName?: string;
  checkbox?: boolean;
  phone?: string;
  email?: string;
  question?: string;
};

export const CartForm: React.FC<Props> = ({ cartItems }) => {
  const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  const validateForm = (values: Values) => {
    const errors: Errors = {};
    if (!values.fullName) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        checkbox: false,
        question: "",
        phone: "",
        city: "",
      }}
      validate={validateForm}
      onSubmit={onSubmit}
    >
      {({ errors, values, handleChange }) => (
        <Form>
          <div className={"formikItem"}>
            <Field
              className={`text3 input ${errors.fullName ? "invalid" : " "}`}
              id="fullName"
              name="fullName"
              placeholder="ФИО"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="fullName" component="div" />
          </div>

          <div className={"formikItem"}>
            <Field
              className={`text3 input ${errors.fullName ? "invalid" : " "}`}
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="email" component="div" />
          </div>

          <div className={`formikItem ${s.number_pad}`}>
            <input
              className={`text3 input ${errors.fullName ? "invalid" : " "}`}
              id="phone"
              name="phone"
              type="phone"
              placeholder="Номер телефона"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="phone" component="div" />
          </div>
          <h5 className={`Headline5 ${s.title_min}`}>Доставка</h5>
          <div className={"formikItem"}>
            <Field className={`text3 input ${errors.fullName ? "invalid" : " "}`} id="city" name="city" placeholder="Город" />
            <ErrorMessage className={`super_small_text errorMessage`} name="city" component="div" />
          </div>
          <div>
            <RadioGroup
              sx={{
                "& .MuiTypography-root": {
                  color: "#f2f2f2",
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "17px",
                },
              }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: "#F2F2F2",
                      "&.Mui-checked": {
                        color: "#F2C94C",
                      },
                    }}
                  />
                }
                label="Доставка Почтой России  "
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      color: "#F2F2F2",
                      "&.Mui-checked": {
                        color: "#F2C94C",
                      },
                    }}
                  />
                }
                label="Доставка СДЭК"
              />
            </RadioGroup>
            <div className={"formikItem"}>
              <Field
                className={`text3 input ${errors.fullName ? "invalid" : " "}`}
                id="address"
                name="addressity"
                placeholder="Полный адрес доставки (улица, дом, корпус)"
              />
              <ErrorMessage className={`super_small_text errorMessage`} name="address" component="div" />
            </div>
            <div className={"formikItem"}>
              <Field
                className={`text3 input ${errors.fullName ? "invalid" : " "}`}
                id="number"
                name="number"
                placeholder="Номер квартиры / офиса"
              />
              <ErrorMessage className={`super_small_text errorMessage`} name="number" component="div" />
            </div>
          </div>
          <div className={`formikItem ${s.formikItem_pad}`}>
            <Field
              className={`text3 input ${s.textarea} ${errors.fullName ? "invalid" : " "}`}
              id="question"
              name="question"
              placeholder="Комментарий к заказу"
              component="textarea"
            />
            <ErrorMessage className={`super_small_text errorMessage`} name="question" component="div" />
          </div>
          <h5 className={`Headline5 ${s.title_min}`}>Способ оплаты</h5>
          <RadioGroup
            sx={{
              "& .MuiTypography-root": {
                color: "#f2f2f2",
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "17px",
              },
            }}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={
                <Radio
                  defaultChecked
                  sx={{
                    color: "#F2F2F2",
                    "&.Mui-checked": {
                      color: "#F2C94C",
                    },
                  }}
                />
              }
              label="Онлайн-перевод по номеру телефона / карты"
            />
          </RadioGroup>
          <div className={`text3 ${s.pricePositions}`}>
            <p>Сумма: {cartItems.reduce((sum, el) => sum + el.price, 0)} р.</p>
            <p>Доставка: -</p>
          </div>
          <div className={` ${s.promo}`}>
            <p className="text3 text3_semibold">Добавить промокод</p>
            <Cross className={s.cross} />
          </div>
          <div className={`Headline5 ${s.price}`}>
            <p>ИТОГО: {cartItems.reduce((sum, el) => sum + el.price, 0)} руб.</p>
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
          <button className={`button large ${s.submit}`} disabled={!values.checkbox} type="submit">
            Оформить заказ
          </button>
        </Form>
      )}
    </Formik>
  );
};
