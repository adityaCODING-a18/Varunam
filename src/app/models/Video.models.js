import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
  {
    video: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Video = mongoose.models.Video || mongoose.model("Video", videoSchema);
export default Video;