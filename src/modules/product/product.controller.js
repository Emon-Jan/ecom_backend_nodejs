import Product from "./product.model";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(201).send(products);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).send(savedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const editProduct = async (req, res) => {
  const prodId = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(prodId, req.body, {
      new: true,
    });
    res.status(201).send(updatedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
};
