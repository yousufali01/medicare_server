import { doctors } from "@/data/doctors";
import { json, optionsResponse } from "@/lib/http";

export function OPTIONS() { return optionsResponse(); }

export async function GET(_request, { params }) {
  const { id } = await params;
  const doctor = doctors.find(item => item.id === id);
  if (!doctor) return json({ success: false, message: "Doctor not found" }, 404);
  return json({ success: true, data: doctor });
}
