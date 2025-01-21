const express = require('express');
const userService = require('../controllers/userService');
const router = express.Router();


router.post('/users', userService.createUser);
router.get('/users', userService.getUsers);
router.get('/users/:id', userService.getUserById);
router.put('/users/:id', userService.updateUser);
router.delete('/users/:id', userService.deleteUser);

module.exports = router;
