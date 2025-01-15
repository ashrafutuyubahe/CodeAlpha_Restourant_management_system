
const express = require("express");
const { authenticateDatabase } = require("./Config/dbConfig");

const app = express();

authenticateDatabase();

app.listen(3000, () => {
  console.log("The backend server is running on port 3000...");
});
