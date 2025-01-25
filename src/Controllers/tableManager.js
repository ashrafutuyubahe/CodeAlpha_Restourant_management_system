const express = require('express');
const router = express.Router();
const tableService = require('../Services/tableService');
const { checkAdmin, checkCustomer } = require('../Middleware/authMiddleware');


router.post('/add-table', checkAdmin,tableService.addTable);


router.get('/get-tables', checkCustomer,tableService.getAllTables);


router.get('/get-single/:tableId', checkCustomer,checkAdmin,tableService.getTableById);


router.put('/change-table/:tableId',checkAdmin,tableService.updateTableStatus);

router.delete('/remove-table/:tableId', checkAdmin,tableService.deleteTable);

module.exports = router;
