const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

db.sequelize.sync().then(() => {
  console.log("MySQL DB connected & models synced.");
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
});
