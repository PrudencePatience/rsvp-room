import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-grid fade-in">
      <section className="panel" style={{ padding: 24 }}>
        <div className="stack">
          <div className="pill">Page missing</div>
          <div>
            <h1 className="section-title">This event room was not found.</h1>
            <p className="section-copy">Return to the gallery and choose an active RSVP room.</p>
          </div>
          <Link href="/" className="button-secondary">Back to home</Link>
        </div>
      </section>
    </main>
  );
}

