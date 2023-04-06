// Imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const indexRoute = require("./routes/routes");
// middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8001; //PORT

// MongoDB connection import
const { mongoConnect } = require("./database/mongoDB");
mongoConnect();


// Use Routes
app.use("/api", indexRoute);
app.use(express.static(path.join(__dirname, 'images')))
app.use('/images', express.static(path.join(__dirname, '/images')))

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Okay");
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
