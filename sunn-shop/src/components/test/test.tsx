import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import s from "./test.module.css";
import { apiProducts } from "../../api/apiProducts";
import { Input } from "../commons/Input/Input";
import { Delivery } from "../CartPage/delivery/Delivery";
import { BreadcrumbsComponent } from "../BreadcrumbCoponent/Breadcrumb";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../store/products-reducer";
import { Preloader } from '../commons/Preloader/Preloader';
const CssTextField = styled(TextField)({
  color: "#303030",
  "& .MuiInput-underline:before, &:hover .MuiInput-underline:before, & .MuiInput-underline:after, & .MuiInput-underline:before": {
    border: "none",
    content: "none",
  },
  "& label.Mui-focused": {
    color: "#828282",
  },
  "& label": {
    color: "#303030",
  },
});
const testApi = async () => {
  const res = await apiProducts.getAll();
  console.log(res);
};
export const Test = () => {
  
  return (
    <div>
      <BreadcrumbsComponent />
      <Delivery />
      <Preloader />
    </div>
  );
};
