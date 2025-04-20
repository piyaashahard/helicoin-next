// app/api/user/[id]/route.js
import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import User from "@/models/User";

// GET /api/user/[id]
export async function GET(req, { params }) {
  const { id } = await params;

  try {
    await connectDb();

    const user = await User.findById(id).lean();

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching user", error: error.message },
      { status: 500 }
    );
  }
}
