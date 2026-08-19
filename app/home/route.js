import { NextResponse } from "next/server";

export function GET() {
  const target = new URL("https://plessing-consulting.com/");
  target.searchParams.set("source", "email-signature");
  return NextResponse.redirect(target, 307);
}
