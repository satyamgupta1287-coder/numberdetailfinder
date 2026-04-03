export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) {
    return res.status(400).json({ error: "No number provided" });
  }

  try {
    const response = await fetch(
      `https://ayaanmods.site/number.php?key=annonymous&number=${num}`
    );

    const text = await response.text();

    // Force JSON parse (kyunki API header galat ho sakta hai)
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return res.status(500).json({ error: "Invalid JSON from API", raw: text });
    }

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Fetch failed", message: err.message });
  }
}
