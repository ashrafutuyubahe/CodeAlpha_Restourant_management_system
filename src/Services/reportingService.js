
const Order = require("../Entity/Order");
const { Op } = require("sequelize");
const Table= require("../Entity/Table");
const sequelize= require('sequelize');

exports.getSalesReport = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const whereClause = startDate && endDate 
      ? { createdAt: { [Op.between]: [startDate, endDate] } }
      : {};

    const sales = await Order.findAll({
      attributes: [
        [sequelize.fn("SUM", sequelize.col("totalPrice")), "totalSales"],
        [sequelize.fn("COUNT", sequelize.col("orderId")), "totalOrders"],
      ],
      where: whereClause,
    });

    res.status(200).json(sales[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



exports.getTableUsageReport = async (req, res) => {
    try {
      const tableUsage = await Table.findAll({
        attributes: [
          "tableId",
          [sequelize.fn("COUNT", sequelize.col("Orders.orderId")), "orderCount"],
        ],
        include: [
          {
            model: Order,
            attributes: [],
          },
        ],
        group: ["tableId"],
      });
  
      res.status(200).json(tableUsage);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };



  exports.getOrdersSummary = async (req, res) => {
    try {
      const ordersSummary = await Order.findAll({
        attributes: [
          "status",
          [sequelize.fn("COUNT", sequelize.col("orderId")), "count"],
        ],
        group: ["status"],
      });
  
      res.status(200).json(ordersSummary);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  