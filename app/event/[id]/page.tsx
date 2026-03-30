import { notFound } from "next/navigation";
import { EventDetailsPanel } from "@/components/EventDetailsPanel";
import { RSVPButton } from "@/components/RSVPButton";
import { getEventById } from "@/lib/mock-data";

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <main className="page-grid detail-grid fade-in">
      <EventDetailsPanel event={event} />
      <section className="panel" style={{ padding: 20 }}>
        <div className="stack">
          <div className="pill">Attendance flow</div>
          <div>
            <h2 className="section-title">Join the guest list</h2>
            <p className="section-copy">Use the RSVP flow to register, review your status, and receive a confirmation state on success.</p>
          </div>
          <div className="meta-grid">
            <div className="meta-card"><strong>Host</strong><span>{event.host}</span></div>
            <div className="meta-card"><strong>Capacity</strong><span>{event.capacity}</span></div>
          </div>
          <RSVPButton eventId={event.id} fullWidth />
        </div>
      </section>
    </main>
  );
}

