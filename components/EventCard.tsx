import Link from "next/link";
import type { EventItem } from "@/lib/mock-data";
import { StatusChip } from "@/components/StatusChip";

export function EventCard({ event, priority = false }: { event: EventItem; priority?: boolean }) {
  return (
    <article
      className="panel"
      style={{
        padding: 18,
        background: priority ? "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(246,201,77,0.16))" : "rgba(255,255,255,0.92)",
      }}
    >
      <div className="stack">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
          <div>
            <div className="pill" style={{ marginBottom: 10 }}>{event.category}</div>
            <h2 className="section-title">{event.name}</h2>
          </div>
          <StatusChip tone={event.statusTone} label={event.statusLabel} />
        </div>
        <p className="section-copy">{event.summary}</p>
        <div className="meta-grid">
          <div className="meta-card">
            <strong>Time</strong>
            <span>{event.dateLabel}</span>
          </div>
          <div className="meta-card">
            <strong>Place</strong>
            <span>{event.location}</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href={`/event/${event.id}`} className="button-soft">Details</Link>
          <Link href={`/rsvp?eventId=${event.id}`} className="button-primary">RSVP now</Link>
        </div>
      </div>
    </article>
  );
}

