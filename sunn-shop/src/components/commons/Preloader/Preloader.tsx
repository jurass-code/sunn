import { ReactComponent as PreloaderComp } from "../../../assets/img/preloader.svg";
import s from "./Preloader.module.css";
export const Preloader = () => {
  return <PreloaderComp className={s.preloader} />;
};
