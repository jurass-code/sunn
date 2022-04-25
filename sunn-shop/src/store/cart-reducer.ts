import { InferActionsTypes } from "./redux-store";

const initialState = {
  cartItemsId: (localStorage?.cartItems ? JSON.parse(localStorage?.cartItems) : []) as string[],
};
type initialStatetype = typeof initialState;
const cartReducer = (state = initialState, action: actionsTypes): initialStatetype => {
  switch (action.type) {
    case "DELETE_ITEM_FROM_CART": {
      const storage = JSON.parse(localStorage.cartItems);
      if (storage) localStorage.cartItems = JSON.stringify(storage.filter((el: any) => el != action.id));
      return {
        ...state,
        cartItemsId: state.cartItemsId.filter((el) => el !== action.id),
      };
    }
    case "ADD_ITEM_TO_CART": {
      const storage = localStorage.cartItems ? JSON.parse(localStorage.cartItems) : [];
      storage.push(action.id);
      localStorage.cartItems = JSON.stringify(storage);
      console.log(storage);
      return {
        ...state,
        cartItemsId: [...state.cartItemsId, action.id],
      };
    }
    case "INIT_CART": {
      const storage = JSON.parse(localStorage.cartItems) || [];
      return {
        ...state,
        cartItemsId: [...storage],
      };
    }
    default:
      return state;
  }
};

//action creator
export const actionsCart = {
  deleteItemFromCart: (id: string) => ({ type: "DELETE_ITEM_FROM_CART", id } as const),
  addItemToCart: (id: string) => ({ type: "ADD_ITEM_TO_CART", id } as const),
  initCart: () => ({ type: "INIT_CART" } as const),
};
type actionsTypes = InferActionsTypes<typeof actionsCart>;

export default cartReducer;
