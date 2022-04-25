import React from "react";
//import s from "./HomePage.module.css";
import { Home } from "./Home/Home";
import RunningLine from "../../assets/img/RunningLine.gif";
import { AboutSection } from "./AboutSection/AboutSection";
import { HomeCatalog } from "./HomeCatalog/HomeCatalog";
import { IdeaSection } from "../IdeaSection/IdeaSection";
import { InstSection } from "../InstSection/InstSection";

type Props = { widthWindow: number };
export const HomePage: React.FC<Props> = ({ widthWindow }) => {
  return (
    <div>
      <Home widthWindow={widthWindow} />
      <img src={RunningLine} alt="RunningLine" />
      <AboutSection widthWindow={widthWindow} />
      <HomeCatalog widthWindow={widthWindow} />
      <IdeaSection widthWindow={widthWindow} />
      <InstSection widthWindow={widthWindow} />
    </div>
  );
};
