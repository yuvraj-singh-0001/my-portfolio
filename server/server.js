require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./src/routes/Routes");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:4100",
    "https://webyuvraj.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// ✅ API ROUTES
app.use("/api", routes);

// ✅ HEALTH CHECK (IMPORTANT FOR RENDER)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
