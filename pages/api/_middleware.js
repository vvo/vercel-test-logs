import { NextResponse } from "next/server";

export async function middleware() {
  console.log("Inside middleware hello");
  console.log("Inside middleware 2");
  await new Promise(function (resolve) {
    setTimeout(resolve, 1500);
  });
  return NextResponse.next();
}
