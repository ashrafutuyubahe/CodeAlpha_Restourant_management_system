const { DataTypes } = require('sequelize');
const { sequelize} = require('../Config/dbConfig');


const OrderItem = sequelize.define("OrderItem", {
    itemId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    menuId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    itemQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });


  module.exports= OrderItem;