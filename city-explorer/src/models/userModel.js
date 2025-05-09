import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
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
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetToken: String,
    resetTokenExpire: Date,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    verifyToken: String,
    verifyTokenExpire: Date,
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event", // or your custom collection
      },
    ],
    itineraries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Itinerary",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User