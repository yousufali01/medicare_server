export default function Home() {
  return (
    <main style={{fontFamily:"Arial",padding:"40px",maxWidth:850,margin:"auto"}}>
      <h1>MediCare – UMCH Public API</h1>
      <p>Read-only public catalogue API for the MediCare project.</p>
      <ul>
        <li><a href="/api/v1/doctors">All doctors</a></li>
        <li><a href="/api/v1/specialties">Specialties</a></li>
        <li><a href="/api/v1/hospital">Hospital information</a></li>
      </ul>
      <p>Filter doctors: <code>/api/v1/doctors?search=cardiology</code></p>
      <p>Filter specialty: <code>/api/v1/doctors?specialty=Cardiology</code></p>
      <p>Single doctor: <code>/api/v1/doctors/prof-dr-aqm-mohsen</code></p>
    </main>
  );
}
