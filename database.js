import express from "express";

// Node 18+ me fetch built-in hota hai (node-fetch ki zarurat nahi)
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

    const apiUrl = `https://api.impossible-world.xyz/api/data?phone=${phone}`;
    console.log("🔍 Fetching from:", apiUrl);

    const response = await fetch(apiUrl, {
      headers: { "User-Agent": "KamiFlex/1.0 (Node Server)" },
    });

    const text = await response.text();

    // ✅ Safe JSON parsing (agar API ne HTML bheja to crash nahi hoga)
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return res.status(502).json({
        error: "Invalid response from upstream API",
        raw: text.slice(0, 100),
      });
    }

    res.json(data);
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ error: "Server Error", details: err.message });
  }
});

// ✅ Local run ke liye server listen
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`🚀 Kami Flex API running locally on port ${PORT}`)
  );
}

// ✅ Export default for Vercel compatibility
export default app;
