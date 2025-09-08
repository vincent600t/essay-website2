const express = require("express");
const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.get("/", authMiddleware, getUserOrders);
router.get("/admin/orders", authMiddleware, adminMiddleware, getAllOrders);
router.put("/:id", authMiddleware, adminMiddleware, updateOrderStatus);

module.exports = router;
