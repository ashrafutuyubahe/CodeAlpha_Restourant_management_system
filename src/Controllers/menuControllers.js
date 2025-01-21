const express = require('express');
const menuService = require('../controllers/menuService');
const router = express.Router();


router.post('/menu', menuService.createMenuItem);
router.get('/menu', menuService.getMenuItems);
router.get('/menu/:id', menuService.getMenuItemById);
router.put('/menu/:id', menuService.updateMenuItem);
router.delete('/menu/:id', menuService.deleteMenuItem);

module.exports = router;
