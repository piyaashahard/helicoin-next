// app/user/[id]/route.js
import { NextResponse } from "next/server";
import User from "../../../../models/User"; // Adjust the path to your model
import connectDb from "../../../../lib/db"; // Adjust the path to your DB connection helper

// Handle GET request to fetch a user by their ID
export async function GET({ params }) {
  const { id } = params; // Get the user ID from the URL parameters

  try {
    await connectDb();
    const user = await User.findById(id); // Fetch the user by ID from the database

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user); // Return the user's data as JSON
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching user data", error: error.message },
      { status: 500 }
    );
  }
}
