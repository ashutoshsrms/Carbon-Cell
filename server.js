const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const swaggerConfig = require("./swagger");
dotenv.config();
connectDB();
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const dataRoutes = require("./routes/dataRoutes");
const ethereumRoutes = require("./routes/ethereumRoutes"); // Corrected import

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Use Swagger documentation
swaggerConfig(app);

// Use auth routes
app.use("/api/auth", authRoutes);

// Use data routes
app.use("/api/data", dataRoutes);

// Use Ethereum routes
app.use("/api/ethereum", ethereumRoutes); // Corrected usage

const PORT = process.env.PORT || 3000; // Fallback port added
const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);
