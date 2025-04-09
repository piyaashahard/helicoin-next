// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  lastClickTime: { type: Date, default: null },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
