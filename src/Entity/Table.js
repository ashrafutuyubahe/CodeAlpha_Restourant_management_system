
const { DataTypes } = require("sequelize");
const { sequelize } = require("../Config/dbConfig");

const Table = sequelize.define("Table", {
    tableId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    tableNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM,
      values:['available','reserved'],
      defaultValue: "available", 
    },
  });
  
  module.exports = Table;
  