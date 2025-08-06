import { dbConnect } from "@/lib/dbConnect";
import Image from "@/app/models/ImagePost.models";
import { NextResponse } from "next/server";

export async function DELETE(request) {
    try {
        await dbConnect();

        const { id } = await request.json();
        const result = await Image.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            return NextResponse.json({ message: "Image deleted successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Image not found" }, { status: 404 });
        }

    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        return NextResponse.json({ error: error.message || "Error deleting image" }, { status: 500 });
    }
}