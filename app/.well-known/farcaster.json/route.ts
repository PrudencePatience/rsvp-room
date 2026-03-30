import { NextResponse } from "next/server";
import {
  baseAppDescription,
  baseAppName,
  baseAppSubtitle,
  baseAppTagline,
  baseAppUrl,
  baseBuilderOwnerAddress,
  baseIconUrl,
  baseManifestAccountAssociation,
  baseManifestPrimaryCategory,
  baseManifestTags,
  baseOgImageUrl,
  baseScreenshotUrls,
  baseSplashImageUrl,
} from "@/lib/base-app";

export const dynamic = "force-static";

export function GET() {
  const hasAssociation = Object.values(baseManifestAccountAssociation).every(Boolean);
  const hasOwner = Boolean(baseBuilderOwnerAddress);

  return NextResponse.json({
    ...(hasAssociation ? { accountAssociation: baseManifestAccountAssociation } : {}),
    ...(hasOwner ? { baseBuilder: { ownerAddress: baseBuilderOwnerAddress } } : {}),
    miniapp: {
      version: "1",
      name: baseAppName,
      homeUrl: baseAppUrl,
      iconUrl: baseIconUrl,
      splashImageUrl: baseSplashImageUrl,
      splashBackgroundColor: "#1A3D7C",
      subtitle: baseAppSubtitle,
      description: baseAppDescription,
      tagline: baseAppTagline,
      heroImageUrl: baseOgImageUrl,
      screenshotUrls: baseScreenshotUrls,
      primaryCategory: baseManifestPrimaryCategory,
      tags: baseManifestTags,
      noindex: false,
    },
  });
}
