
const Order = require("../Entity/Order")
const Table = require("../Entity/Table");

Order.belongsTo(Table, { foreignKey: 'tableId', as: 'table' });
Table.hasMany(Order, { foreignKey: 'tableId', as: 'orders' });
