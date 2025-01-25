const express = require('express');
const router = express.Router();
const inventoryService = require("../Services/inventoryService")
const {checkAdmin} = require("../Middleware/authMiddleware");


router.post('/create',checkAdmin,inventoryService.createInventoryItem);
router.get('/inventory', checkAdmin,inventoryService.getInventoryItems);
router.get('/inventory/:id', checkAdmin,inventoryService.getInventoryItemById);
router.put('/inventory/:id', checkAdmin,inventoryService.updateInventoryItem);
router.delete('/inventory/:id', checkAdmin,inventoryService.deleteInventoryItem);


module.exports = router;







