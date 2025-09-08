// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// --- MongoDB Connection ---
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => console.log(`✅ MongoDB Connected: ${conn.connection.host}`))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- TEST MODEL ---
const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", UserSchema);

// --- ROUTES ---
// Health check
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Add user
app.post("/users", async (req, res) => {
  try {
    const user = new User({ name: req.body.name });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
