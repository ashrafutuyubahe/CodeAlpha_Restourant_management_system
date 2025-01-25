const express = require("express");
const router = express.Router();
const userService = require("../Services/usersService");
const { checkAdmin } = require("../Middleware/authMiddleware");
const { checkCustomer } = require("../Middleware/authMiddleware");

router.get("/get-all", checkAdmin, userService.getUsers);
router.get("/get-single/:id", checkAdmin, userService.getUserById);

module.exports = router;
