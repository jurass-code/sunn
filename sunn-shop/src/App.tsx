import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CatalogPage } from "./components/CatalogPage/CatalogPage";
import { AboutMePage } from "./components/AboutMePage/AboutMePage";
import { FAQPage } from "./components/FAQPage/FAQPage";
import { DonatPage } from "./components/DonatPage/DonatPage";
import { ThanksPage } from "./components/ThanksPage/ThanksPage";
import { Test } from "./components/test/test";
import { CartPage } from "./components/CartPage/CartPage";
import { HomePage } from "./components/Homepage/Homepage";
import { GiftPage } from "./components/GiftPage/GiftPage";
import { ProductCardPage } from "./components/ProductCardPage/ProductCardPage";
import { goToTop } from "./assets/func";
import { initialzeApp } from "./store/app-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./store/redux-store";
import { Preloader } from "./components/commons/Preloader/Preloader";
import { useInnerWidth } from "./assets/useInnerWidth";

//переделать в lazy

function App() {
  let location = useLocation();
  const dispatch = useDispatch();
  let initialized = useSelector((state: AppStateType) => state.appReducer.initialized);
  React.useEffect(() => {
    goToTop();
  }, [location]);
  //исправить
  React.useEffect(() => {
    dispatch(initialzeApp());
  }, []);
  const [widthWindow, height] = useInnerWidth();
  if (!initialized)
    return (
      <div className="preloader">
        <Preloader />
      </div>
    );

  return (
    <div className="App">
      <div className="AppWrapper">
        <header className="AppHeader">
          <Header widthWindow={widthWindow} />
        </header>
        <div className="AppContent">
          <Switch>
            <Route path="/catalog/:id" render={() => <ProductCardPage widthWindow={widthWindow} />} />
            <Route path="/catalog" render={() => <CatalogPage widthWindow={widthWindow} />} />
            <Route path="/about" render={() => <AboutMePage />} />
            <Route path="/delivery" render={() => <AboutMePage />} />
            <Route path="/faq" render={() => <FAQPage />} />
            <Route path="/donat" render={() => <DonatPage />} />
            <Route path="/thanks" render={() => <ThanksPage />} />
            <Route exact path="/cart" render={() => <CartPage />} />
            <Route path="/gift" render={() => <GiftPage />} />
            <Route path="*" render={() => <HomePage widthWindow={widthWindow} />} />
            //удалить
            <Route path="/test" render={() => <Test />} />
          </Switch>
        </div>
        <footer className="AppFooter">
          <Footer widthWindow={widthWindow} />
        </footer>
      </div>
    </div>
  );
}

export default App;
