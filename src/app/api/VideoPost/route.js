import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { dbConnect } from "@/lib/dbConnect";
import Video from "@/app/models/Video.models";
import Busboy from "busboy";
import { tmpdir } from "os";
import { join } from "path";
import { writeFile, unlink } from "fs/promises";
import { randomUUID } from "crypto";

// Cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) { 
  try {
    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.startsWith("multipart/form-data")) {
      return NextResponse.json({ success: false, error: "Invalid content-type" }, { status: 400 });
    }

    const formDataBuffer = await req.arrayBuffer();
    const buffer = Buffer.from(formDataBuffer);

    const boundary = contentType.split("boundary=")[1];
    const busboy = Busboy({ headers: { 'content-type': contentType } });

    let videoPath = "";
    let caption = "";
    let author = "";

    const tmpWritePath = () =>
      join(tmpdir(), `${randomUUID()}-upload.mp4`);

    const fileSavePromise = new Promise((resolve, reject) => {
      busboy.on("file", (fieldname, file, info) => {
        const savePath = tmpWritePath();
        videoPath = savePath;

        const stream = require("fs").createWriteStream(savePath);
        file.pipe(stream);

        file.on("end", () => {
          resolve();
        });

        file.on("error", (err) => {
          reject(err);
        });
      });

      busboy.on("field", (fieldname, value) => {
        if (fieldname === "caption") caption = value;
        if (fieldname === "author") author = value;
      });

      busboy.on("error", (err) => reject(err));
    });

    busboy.end(buffer);
    await fileSavePromise;

    await dbConnect();

    const result = await cloudinary.v2.uploader.upload(videoPath, {
      resource_type: "video",
    });

    await unlink(videoPath); // Clean up temp file

    const newvideo = new Video({
      video: result.secure_url,
      caption,
      author,
    });

    await newvideo.save();

    return NextResponse.json({
      success: true,
      message: "Video uploaded successfully",
      newvideo,
    }, { status: 201 });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({
      success: false,
      error: error.message || "Upload failed",
    }, { status: 500 });
  }
}
