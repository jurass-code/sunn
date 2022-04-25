import Product from "../models/Product.js";
import fileService from "./fileService.js";

class ProductService {
  async create(product, photos) {
    //проверка есть ли данные
    const fileName = fileService.saveFile(photos);
    const createdProduct = await Product.create({ ...product, photos: fileName });
    return createdProduct;
  }

  async getAll() {
    const products = await Product.find({ isActive: true });
    return products;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const product = await Product.findById(id);
    return product;
  }
  async update(product) {
    if (!product._id) {
      throw new Error("id не указан");
    }
    const updatedPost = await Product.findByIdAndUpdate(product._id, product, { new: true });
    return updatedPost;
  }
  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const product = await Product.findByIdAndDelete(id);
    return product;
  }
}

export default new ProductService();
