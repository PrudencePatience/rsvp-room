import type { ReactNode } from "react";
import { BottomNav } from "@/components/BottomNav";
import { EventHeader } from "@/components/EventHeader";
import { Providers } from "@/components/Providers";
import { baseAppId, talentVerificationTag } from "@/lib/base-app";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content={baseAppId} />
        <meta name="talentapp:project_verification" content={talentVerificationTag} />
        <title>RSVP Room</title>
        <meta
          name="description"
          content="A modern Base mini app for event registration, RSVP tracking, and attendance confirmation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        <Providers>
          <div className="app-shell">
            <div className="page">
              <EventHeader />
              {children}
            </div>
            <BottomNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}
