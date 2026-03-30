export const baseAppId = "69c9d2010e56240fea198ed9";
export const talentVerificationTag =
  "b31bacf20342c29bcab156ec1ba9b8024742f3341c6eb851181dbc9fba9aeb2217c9b8f19fef1a653e77aee9a9caf58f7267e23fa9fbd2d488fb8bed08c55179";

export const baseBuilderCode = "bc_ntsm1cm6";
export const baseBuilderDataSuffix =
  "0x62635f6e74736d31636d360b0080218021802180218021802180218021";

export const baseAppName = "RSVP Room";
export const baseAppSubtitle = "Reserve curated event rooms";
export const baseAppTagline = "Fast event RSVP on Base";
export const baseAppDescription =
  "Reserve a seat, check event details, and confirm attendance with a clean Base-native RSVP flow.";
export const baseAppUrl = "https://rsvp-room.vercel.app";
export const baseContractExplorerUrl = "https://basescan.org/address/0x1fad2cd32fa194c3776e32b607a491216d4abac4";
export const baseOgImageUrl = `${baseAppUrl}/hero-1200x630.png`;
export const baseIconUrl = `${baseAppUrl}/icon-1024.png`;
export const baseSplashImageUrl = `${baseAppUrl}/splash-200.png`;
export const baseScreenshotUrls = [
  `${baseAppUrl}/screenshot-1.png`,
  `${baseAppUrl}/screenshot-2.png`,
  `${baseAppUrl}/screenshot-3.png`,
] as const;

export const baseManifestPrimaryCategory = "productivity";
export const baseManifestTags = ["events", "rsvp", "tickets", "social", "utility"] as const;

// TODO(base-manifest): Replace these empty strings with the signed Account Association values
// generated in Base Build Preview -> Account Association for https://rsvp-room.vercel.app.
export const baseManifestAccountAssociation = {
  header: "",
  payload: "",
  signature: "",
} as const;

// TODO(base-manifest): Replace with the wallet address used to import this project into Base Build.
export const baseBuilderOwnerAddress = "";
