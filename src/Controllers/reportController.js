const express = require("express");
const router = express.Router();
const reportController = require("../Services/reportingService");
const {checkAdmin} = require("../Middleware/authMiddleware");



router.get("/sales", checkAdmin,reportController.getSalesReport);
router.get("/table-usage", checkAdmin,reportController.getTableUsageReport);
router.get("/orders-summary", checkAdmin,reportController.getOrdersSummary);

module.exports = router;
