const express = require("express");
const dotenv = require("dotenv");
const { authenticateDatabase } = require("./Config/dbConfig");
const authRoutes = require("./Controllers/authController");
authenticateDatabase();
const PORT = process.env.PORT;

dotenv.config()


const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/other",authRoutes)


app.listen(PORT, () => {
  console.log("The backend server is running on port 3000...");
});

