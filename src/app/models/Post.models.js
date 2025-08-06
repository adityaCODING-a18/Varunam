import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

// ✅ Prevent model overwrite during Next.js hot reload
const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
