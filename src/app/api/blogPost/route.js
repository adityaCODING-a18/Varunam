import { dbConnect } from "@/lib/dbConnect";
import Post from "@/app/models/Post.models";
import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
    try {
        // Connect to MongoDB
        await dbConnect();

        // Get data from request body
        const { title, image, description, author } = await request.json();

        // upload image to cloudinary
        const imagepost = await cloudinary.uploader.upload(image, { resource_type: "image", folder: "blog-images" });

        // Create a new post
        const newPost = new Post({
            title,
            image: imagepost?.secure_url || "",
            description,
            author
        });

        // Save the post
        await newPost.save();

        return NextResponse.json({ success: true, message: "Post created successfully", newPost }, { status: 201 });

    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        return NextResponse.json({ success: false, error: "Error connecting to MongoDB" }, { status: 500 });
    }
}