const express = require("express");
const router = express.Router();
const userService = require("../Services/usersService");
const { checkAdmin } = require("../Middleware/authMiddleware");
const { checkCustomer } = require("../Middleware/authMiddleware");

router.get("/users", checkAdmin, userService.getUsers);
router.get("/users/:id", checkCustomer, userService.getUserById);

module.exports = router;
