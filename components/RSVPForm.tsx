"use client";

import { useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import type { EventItem } from "@/lib/mock-data";
import { baseRsvpAbi, baseRsvpContractAddress } from "@/lib/contracts";
import { StatusChip } from "@/components/StatusChip";
import { trackTransaction } from "@/utils/track";

export function RSVPForm({ event }: { event: EventItem }) {
  const { address, isConnected } = useAccount();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const { writeContractAsync, isPending } = useWriteContract();
  const joinedQuery = useReadContract({
    address: baseRsvpContractAddress,
    abi: baseRsvpAbi,
    functionName: "joined",
    args: address ? [address] : undefined,
    query: { enabled: Boolean(address) },
  });

  async function handleSubmit(eventObject: React.FormEvent<HTMLFormElement>) {
    eventObject.preventDefault();

    if (!isConnected || !address) {
      setFeedback("Connect your wallet to continue.");
      return;
    }

    if (!fullName || !email) {
      setFeedback("Add your name and email before submitting.");
      return;
    }

    try {
      const hash = await writeContractAsync({
        address: baseRsvpContractAddress,
        abi: baseRsvpAbi,
        functionName: "join",
      });

      await trackTransaction("app-001", "RSVP Room", address, hash);
      setFeedback("RSVP confirmed. Your attendance was submitted onchain.");
    } catch {
      setFeedback("The RSVP transaction could not be completed.");
    }
  }

  return (
    <section className="panel" style={{ padding: 20 }}>
      <form className="stack" onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>
            <h2 className="section-title">Guest details</h2>
            <p className="section-copy">Keep it short. The form is designed for quick mobile completion.</p>
          </div>
          <StatusChip tone={joinedQuery.data ? "success" : "neutral"} label={joinedQuery.data ? "Joined" : "Open"} />
        </div>

        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" name="fullName" placeholder="Alex Morgan" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="alex@studio.co" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="note">Note</label>
          <textarea id="note" name="note" rows={4} placeholder="Optional arrival note" value={note} onChange={(e) => setNote(e.target.value)} />
        </div>

        <div className="meta-grid">
          <div className="meta-card">
            <strong>Event</strong>
            <span>{event.name}</span>
          </div>
          <div className="meta-card">
            <strong>Wallet</strong>
            <span>{address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Not connected"}</span>
          </div>
        </div>

        <button type="submit" className="button-primary" disabled={isPending}>
          {isPending ? "Submitting RSVP..." : "Confirm RSVP"}
        </button>

        {feedback ? (
          <div
            style={{
              padding: 14,
              borderRadius: 18,
              background: "rgba(161,228,216,0.25)",
              border: "1px solid rgba(26,61,124,0.12)",
              color: "var(--primary)",
              fontWeight: 600,
            }}
          >
            {feedback}
          </div>
        ) : null}
      </form>
    </section>
  );
}

