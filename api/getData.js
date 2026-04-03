export default async function handler(req, res) {
  const num = req.query.num;

  if (!num) {
    return res.status(400).json({ error: "No number" });
  }

  try {
    const response = await fetch(
      `https://ayaanmods.site/number.php?key=annonymous&number=${num}`
    );

    const text = await response.text();

    // Force JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return res.status(500).json({ error: "Invalid JSON", raw: text });
    }

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      error: "Fetch failed",
      message: err.message
    });
  }
} pj
