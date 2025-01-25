const { DataTypes } = require('sequelize');
const { sequelize} = require('../Config/dbConfig');

const User = sequelize.define("User", {
    userId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isIn: [["customer", "admin"]] },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  
module.exports = User;
