const express = require("express");
const dotenv = require("dotenv");
const { authenticateDatabase } = require("./Config/dbConfig");


const authRoutes = require("./Controllers/authController");
const userRoutes = require("./Controllers/usersControllers");
const menuRoutes = require("./Controllers/menuControllers");
const orderRoutes = require("./Controllers/orderController");
const inventoryRoutes = require("./Controllers/inventoryControllers");
const reportsRoutes= require("./Controllers/reportController"); 


dotenv.config();
authenticateDatabase();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/reports",reportsRoutes);


app.listen(PORT, () => {
  console.log(`The backend server is running on port ${PORT}...`);
});
