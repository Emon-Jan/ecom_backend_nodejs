import Order from "./order.model";

import shortid from "shortid";

export const createOrder = async (req, res) => {
  const { totalPrice } = req.body;
  try {
    const order = new Order({ orderId: shortid.generate(), totalPrice });
    const savedOrder = await order.save();
    res.status(201).send(savedOrder);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(201).send(orders);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const setOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      {
        new: true,
      }
    );
    res.status(201).send({ order });
  } catch (err) {
    res.status(400).send(err);
  }
};
