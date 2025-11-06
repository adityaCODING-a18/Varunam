export default async function handler(req, res) {
  const { prompt, topic } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.AI_API_KEY}`,
        "HTTP-Referer": "https://yourdomain.com", // Your production URL
        "X-Title": "Varunam",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b:free",
        messages: [
          { role: "user", content: prompt },
        ],
      }),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching from OpenRouter:", error);
    res.status(500).json({ error: "Failed to fetch response" });
  }
}
