import User from "@/app/models/User";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
      
      const body = await req.json();
  
      await User.create(body);
  
      return NextResponse.json({ message: "User Created" }, { status: 201 });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }