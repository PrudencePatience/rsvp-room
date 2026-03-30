"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/my-events", label: "My Events" },
  { href: "/about", label: "About" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="panel"
      aria-label="Primary"
      style={{
        position: "fixed",
        left: "50%",
        bottom: 12,
        transform: "translateX(-50%)",
        width: "min(calc(100% - 24px), 620px)",
        padding: 10,
        zIndex: 50,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`, gap: 8 }}>
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "button-secondary" : "button-soft"}
              style={{ minHeight: 46, paddingInline: 10, fontSize: "0.92rem" }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

