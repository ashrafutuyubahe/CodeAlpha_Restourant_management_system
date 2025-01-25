const express = require('express');
const router = express.Router();
const userService = require('../Services/usersService');
const {checkAdmin} = require("../Middleware/authMiddleware");
const {checkCustomer} = require("../Middleware/authMiddleware");




router.post('/users', checkAdmin,userService.createUser);
router.get('/users', checkAdmin,userService.getUsers);
router.get('/users/:id',checkCustomer,userService.getUserById);
router.put('/users/:id',checkAdmin,userService.updateUser);
router.delete('/users/:id', checkAdmin,userService.deleteUser);

module.exports = router;
