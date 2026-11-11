import { hospital } from "@/data/hospital";
import { json, optionsResponse } from "@/lib/http";

export function OPTIONS() { return optionsResponse(); }

export async function GET() {
  return json({ success: true, data: hospital });
}
