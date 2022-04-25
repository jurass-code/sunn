import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import productReducer from "./products-reducer";
import cartReducer from "./cart-reducer";
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
  productData: productReducer,
  cartData: cartReducer,
  appReducer: appReducer,
});

type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>;

// @ts-ignore
window.__store__ = store;

export default store;
