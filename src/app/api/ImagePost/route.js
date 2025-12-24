import { dbConnect } from "@/lib/dbConnect";
import Image from "@/app/models/Image.models";
import imagekit from "@/lib/imagekit";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();

    const formData = await request.formData();

    const file = formData.get("image");
    const caption = formData.get("caption");
    const author = formData.get("author");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to ImageKit
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/nextjs_uploads",
    });

    // Save to MongoDB
    const newImage = new Image({
      image: uploadResponse.url, // ImageKit URL
      caption,
      author,
    });

    await newImage.save();

    return NextResponse.json(
      {
        success: true,
        message: "Image uploaded successfully",
        data: newImage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Error uploading image",
      },
      { status: 500 }
    );
  }
}
