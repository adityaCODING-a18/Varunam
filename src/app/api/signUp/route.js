    import User from "@/app/models/User.models";
    import TeamMember from "@/app/models/TeamMember.models";
    import { NextResponse } from "next/server";
    import { dbConnect } from "@/lib/dbConnect";
    import cloudinary from "cloudinary";

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    export async function POST(request) {
        try {

            // connect to Database
            await dbConnect();

            // get data from request body
            const { username, fullname, avatar, email, standard, signUpAs } = await request.json();

            // check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return NextResponse.json({ error: "User already exists" }, { status: 400 });
            }

            // upload avatar image to cloudinary
            const result = await cloudinary.uploader.upload(avatar, { resource_type: "image", folder: "avatars" });

            if (signUpAs === "teamMember") {
                // create new team member
                const newTeamMember = await new TeamMember({
                    username,
                    fullname,
                    email,
                    avatar: result.secure_url
                });
                await newTeamMember.save();
                return NextResponse.json({ message: "Team member created successfully" }, { status: 201 });
            }
            // create new user
            const newUser = await new User({
                username,
                fullname,
                email,
                standard,
                avatar: result.secure_url
            });
            await newUser.save();

            return NextResponse.json({ message: "User created successfully" }, { status: 201 });

        } catch (error) {
            console.log("Error connecting to MongoDB:", error);
            return NextResponse.json({ error: error.message || "Error connecting to MongoDB" }, { status: 500 });
        }
    }