import { dbConnect } from "@/lib/dbConnect";
import Image from "@/app/models/Image.models";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {

    await dbConnect();

    const { image, caption, author} = await request.json();
    const result = await cloudinary.uploader.upload(image, { resource_type: "image", folder: "gallery-images" });
    const newImage = new Image({
      image: result.secure_url,
      caption,
      author
    });
    await newImage.save();

    return NextResponse.json({ success: true, message: "Image uploaded successfully", newImage }, { status: 201 });

  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    return NextResponse.json({
      success: false,
      error: error.message || "Error uploading image",
    })
  }
}
