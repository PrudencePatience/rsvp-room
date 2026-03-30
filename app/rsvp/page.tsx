import { RSVPForm } from "@/components/RSVPForm";
import { featuredEvent } from "@/lib/mock-data";

export default function RSVPPage() {
  return (
    <main className="page-grid fade-in">
      <section className="panel" style={{ padding: 20 }}>
        <div className="stack">
          <div className="pill">Registration form</div>
          <div>
            <h1 className="section-title" style={{ fontSize: "1.9rem" }}>Confirm your seat for {featuredEvent.name}</h1>
            <p className="section-copy">Add your details, connect your wallet, and submit your onchain RSVP.</p>
          </div>
          <div className="meta-grid">
            <div className="meta-card"><strong>Date</strong><span>{featuredEvent.dateLabel}</span></div>
            <div className="meta-card"><strong>Location</strong><span>{featuredEvent.location}</span></div>
          </div>
        </div>
      </section>
      <RSVPForm event={featuredEvent} />
    </main>
  );
}

