const  Order = require('../Entity/Order');
const OrderItem = require("../Entity/OrderItem");
const Table = require("../Entity/Table");



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
      res.status(200).json({message:"order updated  successfull",order});
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
      res.status(200).json({ message: "order  deleted sucessfully" });
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};




exports.placeOrder = async (req, res) => {
  try {
    const { userId, tableId, items, totalPrice } = req.body;

    
    const table = await Table.findByPk(tableId);
    if (!table || table.status !== "available") {
      return res.status(400).json({ error: "Table not available" });
    }

    
    const order = await Order.create({ userId, tableId, totalPrice, status: "pending" });

   
    const orderItems = items.map((item) => ({
      orderId: order.orderId,
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      price: item.price,
    }));
    await OrderItem.bulkCreate(orderItems);

   
    await table.update({ status: "occupied" });

    res.status(201).json({ order, items: orderItems });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getOrderDetails = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [OrderItem],
    });

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

