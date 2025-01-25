const express = require('express');
const router = express.Router();
const inventoryService = require("../Services/inventoryService")
const {checkAdmin} = require("../Middleware/authMiddleware");


router.post('/create',checkAdmin,inventoryService.createInventoryItem);
router.get('/get-all', checkAdmin,inventoryService.getInventoryItems);
router.get('/get/:id', checkAdmin,inventoryService.getInventoryItemById);
router.put('/update-inventory/:id', checkAdmin,inventoryService.updateInventoryItem);
router.delete('/delete-inv-item/:id', checkAdmin,inventoryService.deleteInventoryItem);


module.exports = router;







