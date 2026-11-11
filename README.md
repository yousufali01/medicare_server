# MediCare – UMCH Public API

A deployable Next.js API project containing a public doctor directory dataset for the MediCare Smart Hospital Queue Management System.

## Important data note

- The public directory dataset contains **66 doctor listings** published for United Medical College Hospital Ltd.
- The 66-person roster, qualifications and listed visiting-hour text are transcribed from HealthIndex's hospital directory. It is a third-party directory and may be incomplete or outdated. Confirm schedules directly with UMCH before using them for real appointments.
- UMCH's official website highlights its medical specialists and provides the profile photographs used for the eight matching doctor entries in this dataset. For doctors without a verified official-site image URL, `profileImage` is `null`; use your own neutral placeholder in the frontend. Do not assign another doctor's photo to them.
- Consultation fee, room number, doctor-specific token limit and live availability are not published in this dataset. These fields are `null` or clearly marked as demo defaults; do not present them as confirmed hospital facts.
- This is a **read-only catalogue API**. It does not create real bookings or persist queue updates. For live appointment/queue writes, connect MongoDB and implement authenticated write endpoints separately.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Optionally set `FRONTEND_ORIGIN` to your frontend's deployed origin.
5. Deploy.

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/doctors` | All doctor records |
| GET | `/api/v1/doctors?search=cardio` | Search name, specialty, qualification |
| GET | `/api/v1/doctors?specialty=Cardiology` | Filter by exact specialty |
| GET | `/api/v1/doctors?page=1&limit=20` | Pagination |
| GET | `/api/v1/doctors/:id` | One doctor |
| GET | `/api/v1/specialties` | Specialty list with doctor counts |
| GET | `/api/v1/hospital` | Hospital contact and public information |

All successful responses use this structure:

```json
{
  "success": true,
  "count": 66,
  "total": 66,
  "page": 1,
  "totalPages": 1,
  "data": []
}
```

## Frontend fetch example

```js
const API_URL = "https://YOUR-BACKEND.vercel.app/api/v1";

export async function getDoctors() {
  const response = await fetch(`${API_URL}/doctors`, { cache: "no-store" });
  if (!response.ok) throw new Error("Unable to load doctors");
  const result = await response.json();
  return result.data;
}
```

## Sources

- Official hospital website: https://www.umchbd.com/
- Public doctor directory (66 listings): https://healthindex.bd/en/hospital/united-medical-college-hospital-ltd-dhaka
- Official medical college faculty page (academic faculty, not the same as the hospital consultant roster): https://umc.edu.bd/faculty/

## Image usage

The verified image URLs point to UMCH's own doctor-profile-image endpoint. They are hotlinked, not downloaded into this repository. The hospital may change these URLs or its image access policy. For production, obtain permission and host approved image assets yourself.
