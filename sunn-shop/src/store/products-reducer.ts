import photoUrlTest from "../assets/img/photo.jpg";
import photoUrlTest2 from "../assets/img/photo2.jpg";
import photoUrlTest3 from "../assets/img/photo3.jpg";
import { AppStateType, InferActionsTypes } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { apiProducts } from "../api/apiProducts";

const initialState = {
  productItems: [
    {
      _id: '1',
      category: ["denym"],
      price: 1111,
      title: "Футболка «David»",
      photos: [photoUrlTest, photoUrlTest2, photoUrlTest3],
      excerpt: "< Мода - это не о лейблах. И не о брендах. Это о чем-то еще, что происходит внутри нас. >",
      description: [
        "Джинсовка в стиле оверсайз: широкая и слегка укороченная",
        "Ну рукавах молнии",
        "Окрашена в технике тай-дай + вышивка красками",
        "Размер: one size",
      ],
      compositionCare: ["sostav i yxod", "sostav i yxod", "sostav i yxod", "sostav i yxod"],
      isActive: true,
      isReserveds: false,
    },
  ],
};
export type itemProductType = {
  _id: string;
  category: string[];
  price: number;
  title: string;
  photos: string[];
  excerpt: string;
  description: string[];
  compositionCare: string[];
  isActive: boolean;
  isReserveds: boolean;
};
type initialStatetype = typeof initialState;

const productReducer = (state = initialState, action: actionsTypes): initialStatetype => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return {
        ...state,
        productItems: action.products,
      };
    }
    default:
      return state;
  }
};
//action creator
export const actionsProducts = {
  setProducts: (products: Array<itemProductType>) => ({ type: "SET_PRODUCTS", products } as const),
};
type actionsTypes = InferActionsTypes<typeof actionsProducts>;
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, actionsTypes>;

//thunks

export const getAllProducts = (): thunkType => async (dispatch) => {
  const data = await apiProducts.getAll();
  dispatch(actionsProducts.setProducts(data))
  console.log(data);
};

export default productReducer;
