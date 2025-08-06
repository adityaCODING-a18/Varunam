import { dbConnect } from "@/lib/dbConnect";
import Post from "@/app/models/Post.models";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await dbConnect();

        const posts = await Post.find().populate("author", "username fullname avatar").sort({ createdAt: -1 });

        return NextResponse.json({ success: true, posts }, { status: 200 });

    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Error fetching posts" },
            { status: 500 }
        );
    }
}