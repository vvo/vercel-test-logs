import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, res) {
  if ("/api/slack-incoming" === new URL(req.url).pathname) {
    console.log("slack incoming from middleware");
  }

  console.log("Inside middleware hello");
  console.log("Inside middleware 2");
  await new Promise(function (resolve) {
    setTimeout(resolve, 250);
  });
  return NextResponse.next();
}
