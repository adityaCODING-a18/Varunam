import { dbConnect } from "@/lib/dbConnect";
import Post from "@/app/models/Post.models";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    try {
        
        await dbConnect();

        const { query } = await request.json();
        const result = await Post.deleteOne({ title: query });
        if (result.deletedCount === 1) {
            return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        return NextResponse.json({ error: error.message || "Error deleting post" }, { status: 500 });
    }
}