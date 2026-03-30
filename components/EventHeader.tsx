"use client";

import Link from "next/link";
import { WalletButton } from "@/components/WalletButton";

export function EventHeader() {
  return (
    <header
      className="panel fade-in"
      style={{
        padding: 18,
        marginBottom: 18,
        background: "linear-gradient(135deg, rgba(26,61,124,0.96), rgba(36,92,168,0.92) 60%, rgba(161,228,216,0.82))",
        color: "white",
      }}
    >
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
          <div style={{ display: "grid", gap: 8 }}>
            <div className="pill" style={{ background: "rgba(255,255,255,0.14)", color: "white" }}>
              Base RSVP mini app
            </div>
            <Link href="/" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.5rem" }}>
              RSVP Room
            </Link>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.84)", maxWidth: 520 }}>
              Event-first registration for curated rooms, attendance status, and onchain confirmation.
            </p>
          </div>
          <WalletButton />
        </div>
      </div>
    </header>
  );
}

