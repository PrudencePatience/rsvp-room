"use client";

import { useAccount, useReadContract } from "wagmi";
import type { EventItem } from "@/lib/mock-data";
import { StatusChip } from "@/components/StatusChip";
import { baseRsvpAbi, baseRsvpContractAddress } from "@/lib/contracts";

export function EventDetailsPanel({ event }: { event: EventItem }) {
  const { address } = useAccount();
  const joinedQuery = useReadContract({
    address: baseRsvpContractAddress,
    abi: baseRsvpAbi,
    functionName: "joined",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) },
  });
  const totalQuery = useReadContract({
    address: baseRsvpContractAddress,
    abi: baseRsvpAbi,
    functionName: "total",
  });

  return (
    <section className="panel" style={{ padding: 20 }}>
      <div className="stack">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
          <div>
            <div className="pill" style={{ marginBottom: 10 }}>{event.category}</div>
            <h1 className="section-title" style={{ fontSize: "1.95rem" }}>{event.name}</h1>
          </div>
          <StatusChip tone={joinedQuery.data ? "success" : event.statusTone} label={joinedQuery.data ? "Joined" : event.statusLabel} />
        </div>

        <p className="section-copy">{event.description}</p>

        <div className="meta-grid">
          <div className="meta-card"><strong>Date</strong><span>{event.dateLabel}</span></div>
          <div className="meta-card"><strong>Location</strong><span>{event.location}</span></div>
          <div className="meta-card"><strong>Guests onchain</strong><span>{String(totalQuery.data ?? event.mockJoined)}</span></div>
          <div className="meta-card"><strong>Format</strong><span>{event.format}</span></div>
        </div>

        <div style={{ padding: 16, borderRadius: 22, background: "rgba(241,245,251,0.92)", border: "1px solid rgba(26,61,124,0.1)" }}>
          <strong style={{ display: "block", marginBottom: 10 }}>Program highlights</strong>
          <div className="mini-list">
            {event.highlights.map((item) => (
              <span key={item} style={{ color: "var(--muted)" }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

