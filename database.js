import express from "express";

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

    // External API call
    const apiUrl = `https://api.impossible-world.xyz/api/data?phone=${phone}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

// ✅ For local use only (ignored by Vercel)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Local API running on port ${PORT}`));
}

export default app;
