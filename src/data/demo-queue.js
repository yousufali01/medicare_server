// DEMO ONLY: fictional records for UI development. Not real UMCH patients or appointments.
export const demoPatients = [
  { id: "PAT-DEMO-001", name: "Demo Patient One", age: 32, gender: "Female" },
  { id: "PAT-DEMO-002", name: "Demo Patient Two", age: 45, gender: "Male" },
  { id: "PAT-DEMO-003", name: "Demo Patient Three", age: 27, gender: "Female" }
];

export const demoAppointments = [
  { id: "APT-DEMO-001", patientId: "PAT-DEMO-001", doctorId: "prof-dr-aqm-mohsen", date: "2026-12-01", tokenNumber: "GAST-001", status: "Waiting", priority: "Normal" },
  { id: "APT-DEMO-002", patientId: "PAT-DEMO-002", doctorId: "prof-dr-aqm-mohsen", date: "2026-12-01", tokenNumber: "GAST-002", status: "Called", priority: "Normal" },
  { id: "APT-DEMO-003", patientId: "PAT-DEMO-003", doctorId: "prof-dr-aqm-mohsen", date: "2026-12-01", tokenNumber: "GAST-003", status: "Waiting", priority: "Emergency" }
];
