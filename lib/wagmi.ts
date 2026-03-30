import { createConfig, http, injected } from "@wagmi/core";
import { base } from "wagmi/chains";
import { baseBuilderCode, baseBuilderDataSuffix } from "@/lib/base-app";

// Base builder code attribution is enabled at the Wagmi client level so every transaction
// can append the ERC-8021 data suffix outside the Base app as recommended by Base docs.
export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
  dataSuffix: baseBuilderDataSuffix,
});

export const builderCodeConfig = {
  code: baseBuilderCode,
  dataSuffix: baseBuilderDataSuffix,
} as const;
