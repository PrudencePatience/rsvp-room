const toneStyles = {
  neutral: {
    background: "rgba(26,61,124,0.08)",
    color: "var(--primary)",
  },
  success: {
    background: "rgba(161,228,216,0.32)",
    color: "#0f6f61",
  },
  attention: {
    background: "rgba(246,201,77,0.28)",
    color: "#8a6300",
  },
} as const;

export function StatusChip({ label, tone = "neutral" }: { label: string; tone?: keyof typeof toneStyles }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 34,
        padding: "0 12px",
        borderRadius: 999,
        fontSize: "0.82rem",
        fontWeight: 700,
        whiteSpace: "nowrap",
        ...toneStyles[tone],
      }}
    >
      {label}
    </span>
  );
}

