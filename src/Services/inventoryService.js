const { Inventory } = require('../Entity/Inventory');


exports.createInventoryItem = async (req, res) => {
  try {
    const { itemName, quantity, unit } = req.body;
    const inventoryItem = await Inventory.create({ itemName, quantity, unit });
    res.status(201).json(inventoryItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all inventory items
exports.getInventoryItems = async (req, res) => {
  try {
    const inventoryItems = await Inventory.findAll();
    res.status(200).json(inventoryItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get inventory item by ID
exports.getInventoryItemById = async (req, res) => {
  try {
    const inventoryItem = await Inventory.findByPk(req.params.id);
    if (inventoryItem) {
      res.status(200).json(inventoryItem);
    } else {
      res.status(404).json({ error: "Inventory item not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update inventory item
exports.updateInventoryItem = async (req, res) => {
  try {
    const { itemName, quantity, unit } = req.body;
    const inventoryItem = await Inventory.findByPk(req.params.id);
    if (inventoryItem) {
      await inventoryItem.update({ itemName, quantity, unit });
      res.status(200).json(inventoryItem);
    } else {
      res.status(404).json({ error: "Inventory item not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete inventory item
exports.deleteInventoryItem = async (req, res) => {
  try {
    const inventoryItem = await Inventory.findByPk(req.params.id);
    if (inventoryItem) {
      await inventoryItem.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Inventory item not found" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
