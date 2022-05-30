import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, res) {
  console.log("received request", req.url);

  if ("/api/slack-incoming" === new URL(req.url).pathname) {
    console.log("slack incoming from middleware");
  }

  return NextResponse.next();
}
