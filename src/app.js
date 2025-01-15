const express = require("express");
const dotenv = require("dotenv");
const { authenticateDatabase } = require("./Config/dbConfig");
authenticateDatabase();
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
  console.log("The backend server is running on port 3000...");
});
