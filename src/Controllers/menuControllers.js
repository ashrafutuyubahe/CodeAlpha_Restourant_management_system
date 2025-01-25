const express = require("express");
const router = express.Router();
const menuService = require("../Services/menuService");

const { checkCustomer } = require("../Middleware/authMiddleware");
const { checkAdmin } = require("../Middleware/authMiddleware");

router.post("/create", checkAdmin, menuService.createMenuItem);
router.get("/get-menus", checkCustomer, menuService.getMenuItems);
router.get("/single-menu/:id", checkCustomer, menuService.getMenuItemById);
router.put("/update-menu/:id", checkAdmin, menuService.updateMenuItem);
router.delete("/delete-menu/:id", checkAdmin, menuService.deleteMenuItem);

module.exports = router;
