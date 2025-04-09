// app/api/auth/signup/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req) {
  await connectDB();
  const { name, email, password } = await req.json();

  if (!name || !email || !password)
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return NextResponse.json(
      { message: "Email already in use" },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
