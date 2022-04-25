import React from "react";
import { Breadcrumbs } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Breadcrumb.module.css";

export const BreadcrumbsComponent: React.FC = () => {
  let pathname = useLocation().pathname;
  let pathnameArr = pathname.split("/");
  const breadcrumbs = pathnameArr.map((el, idx, arr) => {
    if (arr.length - 1 === idx) return <p key={idx}>{el}</p>;
    if (!!el)
      return (
        <NavLink key={idx} to={pathnameArr.slice(0, idx).join("/")}>
          {el}
        </NavLink>
      );
    return (
      <NavLink key={idx} to={"/"}>
        Главная
      </NavLink>
    );
  });

  //   [

  //     <NavLink to={"/"}>Core</NavLink>,
  //     <NavLink to={"/"}>Breadcrumb</NavLink>,
  //   ];
  return (
    <div className={`wrapper ${s.content}`}>
      <Breadcrumbs className={`text3 ${s.breadcrumbs__item}`} separator="•" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
};
