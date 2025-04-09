// app/click-button/route.js
import { NextResponse } from "next/server";
import User from "../../../models/User"; // Adjust the path to your model
import connectDb from "../../../lib/db"; // Adjust the path to your DB connection helper

export async function POST(req) {
  const userId = req.headers.get("user-id"); // Assuming the user ID is passed in the headers (you can also use JWT tokens for this)

  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectDb();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const now = new Date();
    const lastClickTime = user.lastClickTime || new Date(0);

    // Check if the user already claimed today
    const lastClickDay = lastClickTime.toISOString().split("T")[0];
    const today = now.toISOString().split("T")[0];

    if (lastClickDay === today) {
      return NextResponse.json(
        {
          message:
            "You have already claimed your reward today! Come back at midnight.",
        },
        { status: 400 }
      );
    }

    // Update the user's points and lastClickTime
    user.points += 10;
    user.lastClickTime = now;
    await user.save();

    return NextResponse.json({
      message: "✅ Reward claimed!",
      points: user.points,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error claiming reward", error: error.message },
      { status: 500 }
    );
  }
}
