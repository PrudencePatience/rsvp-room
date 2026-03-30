import { baseAppUrl, baseBuilderCode, baseBuilderDataSuffix, baseContractExplorerUrl } from "@/lib/base-app";

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
            <div className="meta-card"><strong>Builder code</strong><span>{baseBuilderCode}</span></div>
            <div className="meta-card"><strong>ERC-8021</strong><span>Transactions include the Base attribution suffix.</span></div>
          </div>

          <div
            style={{
              padding: 16,
              borderRadius: 22,
              background: "rgba(241,245,251,0.92)",
              border: "1px solid rgba(26,61,124,0.1)",
              display: "grid",
              gap: 10,
            }}
          >
            <strong>Attribution readiness</strong>
            <span style={{ color: "var(--muted)" }}>Primary app URL: {baseAppUrl}</span>
            <span style={{ color: "var(--muted)" }}>Contract: {baseContractExplorerUrl}</span>
            <span style={{ color: "var(--muted)", wordBreak: "break-all" }}>Data suffix: {baseBuilderDataSuffix}</span>
            <span style={{ color: "var(--muted)" }}>Transaction analytics will populate in Base after attributed transactions are indexed.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
