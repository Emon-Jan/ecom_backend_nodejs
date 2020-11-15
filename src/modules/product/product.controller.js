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
    const product = new Product(req.body.product);
    const savedProduct = await product.save();
    res.status(201).send(savedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const editProduct = async (req, res) => {
  const productId = req.params.id;
  const product = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });
    res.status(201).send({ product: updatedProduct });
  } catch (err) {
    res.status(400).send(err);
  }
};
