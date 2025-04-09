import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required" },
      { status: 400 }
    );
  }

  const user = await User.findOne({ email }).lean();
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 400 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ message: "Invalid password" }, { status: 400 });
  }

  // Create a JWT token with the user ID
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return NextResponse.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      points: user.points,
      lastClickTime: user.lastClickTime,
    },
  });
}
