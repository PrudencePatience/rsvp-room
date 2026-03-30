import Link from "next/link";

export function EmptyState({ title, copy }: { title: string; copy: string }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        padding: 18,
        borderRadius: 24,
        background: "rgba(241,245,251,0.92)",
        border: "1px solid rgba(26,61,124,0.1)",
      }}
    >
      <strong>{title}</strong>
      <span style={{ color: "var(--muted)" }}>{copy}</span>
      <Link href="/" className="button-soft" style={{ width: "fit-content" }}>
        Browse events
      </Link>
    </div>
  );
}

