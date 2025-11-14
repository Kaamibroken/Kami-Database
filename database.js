import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // allow frontend

app.get("/", (req, res) => {
  res.send("Kami Flex API Working");
});

app.get("/api/search", async (req, res) => {
  try {
    const phone = req.query.phone;
    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    const url = `https://api.impossible-world.xyz/api/data?phone=${phone}`;
    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

export default app;
