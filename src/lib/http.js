import { NextResponse } from "next/server";

export function json(data, status = 200) {
  const response = NextResponse.json(data, { status });
  const allowed = process.env.FRONTEND_ORIGIN || "*";
  response.headers.set("Access-Control-Allow-Origin", allowed);
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
  return response;
}

export function optionsResponse() {
  const response = new NextResponse(null, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", process.env.FRONTEND_ORIGIN || "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
