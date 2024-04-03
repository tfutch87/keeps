import Note from "@/app/models/Note";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const notes = await Note.find().sort( { createdAt : -1 } );
    return NextResponse.json({ notes }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    
    const body = await req.json();

    await Note.create(body);

    return NextResponse.json({ message: "Note Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    console.log(id)

    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: "Note Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}