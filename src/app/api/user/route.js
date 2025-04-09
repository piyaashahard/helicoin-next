// app/user/route.js
import { NextResponse } from "next/server";
import User from "../../../models/User"; // Adjust the path to your model
import connectDb from "../../../lib/db"; // Adjust the path to your DB connection helper

// Handle GET request to fetch all users or current user's data
export async function GET() {
  try {
    await connectDb();
    const users = await User.find(); // Modify this to fetch current user data if needed
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching users", error: error.message },
      { status: 500 }
    );
  }
}
