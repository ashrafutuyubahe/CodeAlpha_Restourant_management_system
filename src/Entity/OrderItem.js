const { DataTypes } = require("sequelize");
const { sequelize } = require("../Config/dbConfig");
const Order = require("./Order");

const OrderItem = sequelize.define("OrderItem", {
  orderItemId: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: Order,
      key: "orderId",
    },
  },
  menuItemId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

module.exports = OrderItem;
