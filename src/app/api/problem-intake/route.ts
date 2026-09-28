import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Problem intake endpoint not implemented yet." },
    { status: 501 }
  );
}
