const  Order = require('../Entity/Order');
const OrderItem= require("../Entity/OrderItem");


exports.createOrder = async (req, res) => {
  try {
    const { userId, tableId, status, totalPrice } = req.body;
    const order = await Order.create({ userId, tableId, status, totalPrice });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateOrder = async (req, res) => {
  try {
    const { status, totalPrice } = req.body;
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.update({ status, totalPrice });
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (order) {
      await order.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
