import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Video from "@/app/models/Video.models";
import imagekit from "@/lib/imagekit";

export async function POST(req) {
  try {
    await dbConnect();

    const formData = await req.formData();

    const file = formData.get("video");
    const caption = formData.get("caption");
    const author = formData.get("author");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No video file provided" },
        { status: 400 }
      );
    }

    // Convert video file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload video to ImageKit
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/nextjs_videos",
    });

    // Save video URL in MongoDB
    const newVideo = new Video({
      video: uploadResponse.url,
      caption,
      author,
    });

    await newVideo.save();

    return NextResponse.json(
      {
        success: true,
        message: "Video uploaded successfully",
        data: newVideo,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Upload failed",
      },
      { status: 500 }
    );
  }
}
