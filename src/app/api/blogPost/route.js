import { dbConnect } from "@/lib/dbConnect";
import Post from "@/app/models/Post.models";
import imagekit from "@/lib/imagekit";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();

    const formData = await request.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const author = formData.get("author");
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Image is required" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload image to ImageKit
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/post_images",
    });

    // Create post
    const newPost = new Post({
      title,
      image: uploadResponse.url, // ImageKit URL
      description,
      author,
    });

    await newPost.save();

    return NextResponse.json(
      {
        success: true,
        message: "Post created successfully",
        data: newPost,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Post creation error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Error creating post",
      },
      { status: 500 }
    );
  }
}
