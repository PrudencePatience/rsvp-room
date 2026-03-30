"use client";

import Link from "next/link";
import { useAccount, useReadContract } from "wagmi";
import { EmptyState } from "@/components/EmptyState";
import { StatusChip } from "@/components/StatusChip";
import { registeredEvents } from "@/lib/mock-data";
import { baseRsvpAbi, baseRsvpContractAddress } from "@/lib/contracts";

export function MyEventsPanel() {
  const { address } = useAccount();
  const joinedQuery = useReadContract({
    address: baseRsvpContractAddress,
    abi: baseRsvpAbi,
    functionName: "joined",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) },
  });

  const events = address ? registeredEvents : [];

  return (
    <section className="panel" style={{ padding: 20 }}>
      <div className="stack">
        <div>
          <div className="pill">Personal overview</div>
          <h1 className="section-title" style={{ fontSize: "1.95rem", marginTop: 10 }}>My event rooms</h1>
          <p className="section-copy">A compact summary of your recent and upcoming RSVP activity.</p>
        </div>

        {!address ? (
          <EmptyState title="Connect your wallet" copy="Your joined rooms will appear here after you connect." />
        ) : events.length === 0 ? (
          <EmptyState title="No RSVP activity yet" copy="Choose an event from the gallery and reserve a spot." />
        ) : (
          <div className="stack">
            {events.map((event, index) => (
              <article
                key={event.id}
                style={{
                  padding: 18,
                  borderRadius: 24,
                  background: index === 0 ? "rgba(26,61,124,0.92)" : "rgba(241,245,251,0.92)",
                  color: index === 0 ? "white" : "var(--text)",
                  display: "grid",
                  gap: 12,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <strong style={{ fontSize: "1.08rem" }}>{event.name}</strong>
                    <p style={{ margin: "6px 0 0", color: index === 0 ? "rgba(255,255,255,0.8)" : "var(--muted)" }}>
                      {event.dateLabel} · {event.location}
                    </p>
                  </div>
                  <StatusChip tone={joinedQuery.data ? "success" : event.statusTone} label={joinedQuery.data ? "Confirmed" : event.statusLabel} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                  <span style={{ color: index === 0 ? "rgba(255,255,255,0.86)" : "var(--muted)" }}>{event.summary}</span>
                  <Link href={`/event/${event.id}`} className={index === 0 ? "button-primary" : "button-soft"} style={{ minWidth: 116 }}>
                    Open
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

