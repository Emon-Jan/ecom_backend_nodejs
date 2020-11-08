import Order from "./order.model";

export const storeOrder = async (req, res) => {
  const { totalPrice } = req.body;
  try {
    const order = new Order({ totalPrice });
    const savedOrder = await order.save();
    res.status(201).send(savedOrder);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
