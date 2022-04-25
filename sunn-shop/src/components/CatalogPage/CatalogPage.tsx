import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../store/redux-store";
import { BreadcrumbsComponent } from "../BreadcrumbCoponent/Breadcrumb";
import { CatalogSections } from "../CatalogSections/CatalogSections";
import { IdeaSection } from "../IdeaSection/IdeaSection";
import s from "./CatalogPage.module.css";

type Props = { widthWindow: number };
export const CatalogPage: React.FC<Props> = ({ widthWindow }) => {
  const productData = useSelector((state: AppStateType) => state.productData.productItems);
  return (
    <div className={s.content}>
      <BreadcrumbsComponent />
      <CatalogSections widthWindow={widthWindow} productData={productData} />
      <IdeaSection widthWindow={widthWindow} />
    </div>
  );
};
