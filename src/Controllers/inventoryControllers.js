const express = require('express');
const inventoryService = require('../Services/inventoryService');
const router = express.Router();

// Routes for Inventory
router.post('/inventory', inventoryService.createInventoryItem);
router.get('/inventory', inventoryService.getInventoryItems);
router.get('/inventory/:id', inventoryService.getInventoryItemById);
router.put('/inventory/:id', inventoryService.updateInventoryItem);
router.delete('/inventory/:id', inventoryService.deleteInventoryItem);


module.exports = router;







