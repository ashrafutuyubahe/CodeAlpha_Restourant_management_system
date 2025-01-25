const express = require('express');
const router = express.Router();
const orderService = require('../Services/orderService');
const {checkCustomer} = require("../Middleware/authMiddleware");
const {checkAdmin} = require("../Middleware/authMiddleware");

router.post("/place-order", checkCustomer,orderService.placeOrder); 
router.get("/get-details/:id", checkCustomer,orderService.getOrderDetails); 
router.post('/create', checkAdmin,orderService.createOrder);
router.get('/get-orders',checkAdmin,orderService.getOrders);
router.get('/get-single:id', checkAdmin,orderService.getOrderById);
router.put('/update-order/:id', checkAdmin,orderService.updateOrder);
router.delete('/delete-order/:id', checkAdmin,orderService.deleteOrder);

module.exports = router;
