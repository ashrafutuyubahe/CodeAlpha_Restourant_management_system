
const { DataTypes } = require('sequelize');
const { sequelize} = require('../Config/dbConfig');


const InventoryRecipe = sequelize.define("InventoryRecipe", {
    inventoryId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    menuId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    quantityUsed: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });