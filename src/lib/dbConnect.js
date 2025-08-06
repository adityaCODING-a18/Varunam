import mongoose from "mongoose";

export async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        const connection = mongoose.connection;
        connection.on("error", (error) => {
            console.error("MongoDB connection error:", error);
            process.exit(1);
        });

        connection.once("open", () => {
            console.log("MongoDB connection opened");
        });

        return connection;

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}