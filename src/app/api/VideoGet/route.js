import { dbConnect } from "@/lib/dbConnect";
import Video from "@/app/models/Video.models";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        
        await dbConnect();

        const video = await Video.find().sort({ createdAt: -1 });

        return NextResponse.json({ success: true, video }, { status: 200 });

    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        return NextResponse.json({ error: error.message || "Error fetching posts" }, { status: 500 });
    }
}