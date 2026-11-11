import { doctors } from "@/data/doctors";
import { json, optionsResponse } from "@/lib/http";

export function OPTIONS() { return optionsResponse(); }

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = (searchParams.get("search") || "").toLowerCase().trim();
  const specialty = (searchParams.get("specialty") || "").toLowerCase().trim();
  const page = Math.max(1, Number(searchParams.get("page") || 1));
  const limit = Math.min(100, Math.max(1, Number(searchParams.get("limit") || 100)));

  let result = doctors;
  if (search) {
    result = result.filter(d =>
      [d.name, d.specialty, d.qualifications].join(" ").toLowerCase().includes(search)
    );
  }
  if (specialty) result = result.filter(d => d.specialty.toLowerCase() === specialty);

  const total = result.length;
  const start = (page - 1) * limit;
  return json({
    success: true,
    count: Math.min(limit, Math.max(0, total - start)),
    total,
    page,
    totalPages: Math.ceil(total / limit),
    data: result.slice(start, start + limit)
  });
}
