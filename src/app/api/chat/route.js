export async function POST(req) {
  try {
    const { prompt } = await req.json(); // Parse JSON from the request body

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.AI_API_KEY}`,
        "HTTP-Referer": "http://yourdomain", // Replace with your real domain
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

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching from OpenRouter:", error);
    return Response.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}
