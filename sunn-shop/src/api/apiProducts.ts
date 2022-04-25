import { itemProductType } from "../store/products-reducer";
import { instance } from "./api";

export const apiProducts = {
  async addProduct(dataForm: any) {
    const response = await instance.post<any>("/product/add", {
      title: dataForm.title,
      description: dataForm.description,
      price: dataForm.price,
    });
    return response.data;
  },
  async getAll() {
    const response = await instance.get<Array<itemProductType>>("/product");
    return response.data.map((el) => ({ ...el, photos: el.photos.map((photo) => `http://localhost:5000/${photo}`) }));
  },
};
