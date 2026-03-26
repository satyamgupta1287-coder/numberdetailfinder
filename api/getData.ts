export default async function handler(req, res) {
  try {
    const { number } = req.query;

    if (!number) {
      return res.status(400).json({ error: "Number missing" });
    }

    const apiUrl = `https://cyber-testing-api.vercel.app/num2info?key=CYBER_TEST&number=${number}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
}
