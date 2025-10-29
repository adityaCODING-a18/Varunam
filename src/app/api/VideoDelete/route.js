import { dbConnect } from "@/lib/dbConnect";
import Video from "@/app/models/Video.models";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    try {        
        await dbConnect();
        const { query } = await request.json();
        const result = await Video.deleteOne({ caption: query });
        if (result.deletedCount === 1) {
            return NextResponse.json({ message: "Video deleted successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Video not found" }, { status: 404 });
        }
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        return NextResponse.json({ error: error.message || "Error deleting video" }, { status: 500 });
    }
}