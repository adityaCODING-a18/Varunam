import { dbConnect } from "@/lib/dbConnect";
import Image from "@/app/models/Image.models";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await dbConnect();

        const image = await Image.find().sort({ createdAt: -1, _id: -1 });

        return NextResponse.json({ success: true, image }, { status: 200 });

    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        return NextResponse.json({ error: error.message || "Error fetching posts" }, { status: 500 });
    }
}