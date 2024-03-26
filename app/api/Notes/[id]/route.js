import React from 'react'
import Note from "../../../models/Note";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundNote = await Note.findOne({ _id: id });
  return NextResponse.json({ foundNote }, { status: 200 });
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const noteData = body;

    const updateNoteData = await Note.findByIdAndUpdate(id, {
      ...noteData,
    });

    return NextResponse.json({ message: "Note updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: "Note Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
