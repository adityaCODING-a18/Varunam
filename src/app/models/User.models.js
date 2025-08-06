import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "Username already exists"],
      trim: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email already exists"],
      lowercase: true,
      trim: true,
    },
    standard: {
      type: String,
      required: true
    },
    provider: {
      type: String,
      default: "google"
    }
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite in Next.js hot reload
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
