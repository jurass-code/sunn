import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./redux-store";
import { getAllProducts } from "./products-reducer";

const initialState = {
  initialized: false,
};
export type initialStateType = typeof initialState;

const appReducer = (state = initialState, action: actionsTypes): initialStateType => {
  switch (action.type) {
    case "SET_INITIALIZED":
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const actionsApp = {
  setInitialized: () => ({ type: "SET_INITIALIZED" } as const),
};
type actionsTypes = InferActionsTypes<typeof actionsApp>;
type thunkType = ThunkAction<any, AppStateType, unknown, any>;

//thunk;
export const initialzeApp = (): thunkType => (dispatch) => {
  
  const promise = dispatch(getAllProducts());
  Promise.all([promise]).then(() => {
    dispatch(actionsApp.setInitialized());
  });
};

export default appReducer;
