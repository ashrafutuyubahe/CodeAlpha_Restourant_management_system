const express = require("express");
const router = express.Router();
const menuService = require("../Services/menuService");

const { checkCustomer } = require("../Middleware/authMiddleware");
const { checkAdmin } = require("../Middleware/authMiddleware");

router.post("/menu", checkAdmin, menuService.createMenuItem);
router.get("/menu", checkCustomer, menuService.getMenuItems);
router.get("/menu/:id", checkCustomer, menuService.getMenuItemById);
router.put("/menu/:id", checkAdmin, menuService.updateMenuItem);
router.delete("/menu/:id", checkAdmin, menuService.deleteMenuItem);

module.exports = router;
