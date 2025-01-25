const { DataTypes } = require('sequelize');
const { sequelize} = require('../Config/dbConfig');

const Order = sequelize.define("Order", {
    orderId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    tableId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values:['concelled','completed','pending'],
      defaultValue: "pending"
      
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  module.exports=Order;

  