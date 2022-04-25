import ProductService from "../service/ProductService.js";

class ProductController {
  async create(req, res) {
    try {
      const product = await ProductService.create(req.body, req.files.photos);
      res.status(201).json(product);
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }

  async getAll(req, res) {
    try {
      const products = await ProductService.getAll();
      return res.json(products);
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }

  async getOne(req, res) {
    try {
      const product = await ProductService.getOne(req.params.id);
      return res.json(product);
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await ProductService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }
  async delete(req, res) {
    try {
      const product = await ProductService.delete(req.params.id);
      return res.json(product);
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }
}

export default new ProductController();
