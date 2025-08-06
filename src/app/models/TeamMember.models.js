import mongoose from "mongoose";

const TeamMemberSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      default: "google"
    },
    isTeam: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite in Next.js hot reload
const TeamMember =
  mongoose.models.TeamMember || mongoose.model("TeamMember", TeamMemberSchema);

export default TeamMember;
