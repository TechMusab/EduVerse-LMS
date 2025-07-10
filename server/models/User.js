import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["student", "instructor"],
    default: "student",
  },
  instructorProfile: {
    bio: { type: String },
    expertise: { type: String },
    linkedin: { type: String },
    website: { type: String },
    profilePicture: { type: String },
  },
});

const User = mongoose.model("User", userSchema);
export default User;
