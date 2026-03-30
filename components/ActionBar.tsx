import type { ReactNode } from "react";

export function ActionBar({ primary, secondary }: { primary: ReactNode; secondary?: ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      {primary}
      {secondary}
    </div>
  );
}

