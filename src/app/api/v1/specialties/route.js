import { specialties } from "@/data/specialties";
import { json, optionsResponse } from "@/lib/http";

export function OPTIONS() { return optionsResponse(); }

export async function GET() {
  return json({ success: true, count: specialties.length, data: specialties });
}
