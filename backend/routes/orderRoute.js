const express = require("express")
const authMiddleware = require('../middleware/auth')
const {placeOrder,verifyOrder,userOrders, listOrder,updateStatus} = require("../controllers/orderController")


const orderRouter = express.Router();


orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/status",updateStatus);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get("/list",listOrder)

module.exports = orderRouter;