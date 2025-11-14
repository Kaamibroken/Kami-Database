import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", (req, res) => {
  res.send("✅ Kami Flex SIM Database API is working!");
});

app.get("/api/search", async (req, res) => {
  try {
    const phone = req.query.phone;
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }
    const response = await fetch(`https://api.impossible-world.xyz/api/data?phone=${phone}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

export default app;
