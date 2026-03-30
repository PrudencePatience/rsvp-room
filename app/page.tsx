import Link from "next/link";
import { ActionBar } from "@/components/ActionBar";
import { EventCard } from "@/components/EventCard";
import { EmptyState } from "@/components/EmptyState";
import { RSVPButton } from "@/components/RSVPButton";
import { StatusChip } from "@/components/StatusChip";
import { featuredEvent, upcomingEvents } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="page-grid home-grid fade-in">
      <section className="panel" style={{ padding: 20 }}>
        <div className="stack">
          <div className="pill">Curated RSVP selection</div>
          <div>
            <h1 className="section-title" style={{ fontSize: "2rem" }}>Reserve a spot before the room closes.</h1>
            <p className="section-copy">Browse active events, check timing, and confirm your attendance in a few taps.</p>
          </div>
          <EventCard event={featuredEvent} priority />
          <ActionBar
            primary={<Link href={`/rsvp?eventId=${featuredEvent.id}`} className="button-primary">Start RSVP</Link>}
            secondary={<Link href={`/event/${featuredEvent.id}`} className="button-soft">View details</Link>}
          />
        </div>
      </section>

      <section className="stack">
        <div className="panel" style={{ padding: 20 }}>
          <div className="stack">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
              <div>
                <h2 className="section-title">Fast event status</h2>
                <p className="section-copy">Priority events with live RSVP intent and room capacity cues.</p>
              </div>
              <StatusChip tone="attention" label="Closing soon" />
            </div>
            <div className="mini-list">
              {upcomingEvents.slice(0, 3).map((event) => (
                <div
                  key={event.id}
                  style={{
                    display: "grid",
                    gap: 10,
                    padding: 14,
                    borderRadius: 20,
                    background: "rgba(241,245,251,0.9)",
                    border: "1px solid rgba(26,61,124,0.1)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <strong>{event.name}</strong>
                    <StatusChip tone={event.statusTone} label={event.statusLabel} />
                  </div>
                  <span style={{ color: "var(--muted)" }}>{event.dateLabel}</span>
                  <RSVPButton eventId={event.id} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel" style={{ padding: 20 }}>
          <div className="stack">
            <div>
              <h2 className="section-title">More rooms</h2>
              <p className="section-copy">Compact cards designed for fast scanning on mobile.</p>
            </div>
            <div className="event-grid">
              {upcomingEvents.slice(1).map((event) => <EventCard key={event.id} event={event} />)}
            </div>
            {upcomingEvents.length === 0 ? <EmptyState title="No open rooms" copy="New events will appear here." /> : null}
          </div>
        </div>
      </section>
    </main>
  );
}

