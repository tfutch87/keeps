import React from 'react'
import Note from "../../../models/Note";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { name } = params;

  const notes = await Note.find({ category: name });
  return NextResponse.json({ notes }, { status: 200 });
}