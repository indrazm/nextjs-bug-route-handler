import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "GET Method is Ready",
    body: [],
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    status: 200,
    message: "POST Method is Ready",
    body,
  });
}
