import React from "react";
import s from "./HomeCatalog.module.css";
import { CatalogSections } from "../../CatalogSections/CatalogSections";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../store/redux-store";

type Props = { widthWindow: number };
export const HomeCatalog: React.FC<Props> = ({ widthWindow }) => {
  const productData = useSelector((state: AppStateType) => state.productData.productItems);

  return (
    <div className={s.content}>
      <CatalogSections widthWindow={widthWindow} productData={productData} homePage={true} />
      <div className={s.btnBox}>
        <p className={s.btnText}>Показать еще</p>
      </div>
    </div>
  );
};
