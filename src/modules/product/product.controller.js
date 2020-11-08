import Product from "./product.model";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(201).send(products);
  } catch (error) {
    console.log("error in product", error);
    res.status(400).send(error);
  }
};
