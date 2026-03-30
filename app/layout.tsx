import type { ReactNode } from "react";
import { BottomNav } from "@/components/BottomNav";
import { EventHeader } from "@/components/EventHeader";
import { Providers } from "@/components/Providers";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="69c9d2010e56240fea198ed9" />
        <meta
          name="talentapp:project_verification"
          content="b31bacf20342c29bcab156ec1ba9b8024742f3341c6eb851181dbc9fba9aeb2217c9b8f19fef1a653e77aee9a9caf58f7267e23fa9fbd2d488fb8bed08c55179"
        />
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



