import { NextResponse } from 'next/server';

export async function POST(request) {
    const { Prompt } = await request.json();
    const response = await fetch("https://api.freepik.com/v1/ai/text-to-image", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-freepik-api-key": process.env.IMAGE_GENERATE_API_KEY
    },
    body: JSON.stringify({
    prompt: Prompt,
    aspect_ratio: "portrait_4_5", // or "square_1_1", "ultrawide_21_9", etc.
    num_images: 1
    })
    });
    const output = await response.json();
    return NextResponse.json({image_url: output.data[0].base64});
}