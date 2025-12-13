require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoutes = require("./src/routes/Routes");

const app = express();

/* ===============================
   Middleware
================================ */

// ✅ CORS FIX (IMPORTANT)
app.use(cors({
  origin: "http://localhost:4100",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

/* ===============================
   Routes
================================ */

app.use("/api", contactRoutes);

/* ===============================
   404
================================ */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

/* ===============================
   Start Server
================================ */

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
