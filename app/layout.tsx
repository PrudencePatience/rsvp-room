import type { ReactNode } from "react";
import { BottomNav } from "@/components/BottomNav";
import { EventHeader } from "@/components/EventHeader";
import { Providers } from "@/components/Providers";
import {
  baseAppDescription,
  baseAppId,
  baseAppName,
  baseAppSubtitle,
  baseAppUrl,
  baseIconUrl,
  baseOgImageUrl,
  talentVerificationTag,
} from "@/lib/base-app";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content={baseAppId} />
        <meta name="talentapp:project_verification" content={talentVerificationTag} />
        <title>{baseAppName}</title>
        <meta name="description" content={baseAppDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#1A3D7C" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={baseAppName} />
        <meta property="og:description" content={baseAppDescription} />
        <meta property="og:url" content={baseAppUrl} />
        <meta property="og:image" content={baseOgImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={baseAppName} />
        <meta name="twitter:description" content={baseAppSubtitle} />
        <meta name="twitter:image" content={baseOgImageUrl} />
        <link rel="canonical" href={baseAppUrl} />
        <link rel="icon" type="image/png" href={baseIconUrl} />
        <link rel="apple-touch-icon" href={baseIconUrl} />
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
