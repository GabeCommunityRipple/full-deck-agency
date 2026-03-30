import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (token !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const { path } = await request.json();
  revalidatePath(path || "/");

  return NextResponse.json({ revalidated: true, path });
}
