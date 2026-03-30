export default function AboutPage() {
  return (
    <main className="page-grid fade-in">
      <section
        className="panel"
        style={{
          padding: 22,
          background: "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(161,228,216,0.32)), rgba(255,255,255,0.9)",
        }}
      >
        <div className="stack">
          <div className="pill">Usage notes</div>
          <div>
            <h1 className="section-title" style={{ fontSize: "2rem" }}>Simple rules for a smooth RSVP.</h1>
            <p className="section-copy">This app keeps the flow short: open a room, review details, and confirm once.</p>
          </div>
          <div className="meta-grid">
            <div className="meta-card"><strong>One wallet</strong><span>Each address can join only once onchain.</span></div>
            <div className="meta-card"><strong>Confirmation</strong><span>A success state appears after the transaction is mined.</span></div>
            <div className="meta-card"><strong>Status</strong><span>Your registered rooms are grouped in the My Events page.</span></div>
            <div className="meta-card"><strong>Privacy</strong><span>Only the minimum RSVP details are requested in the form.</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}

