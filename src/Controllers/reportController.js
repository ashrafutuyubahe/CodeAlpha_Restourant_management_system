const express = require("express");
const router = express.Router();
const reportController = require("../Services/reportController");


router.get("/sales", reportController.getSalesReport);
router.get("/table-usage", reportController.getTableUsageReport);
router.get("/orders-summary", reportController.getOrdersSummary);

module.exports = router;
