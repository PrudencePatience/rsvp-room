import { createConfig, http, injected } from "@wagmi/core";
import { base } from "wagmi/chains";

// TODO(builder-code): Replace the placeholder suffix below with the production Base builder code data suffix.
// Example target shape:
// const builderCodeSuffix = "?builder=<encoded-builder-code>";
const builderCodeSuffix = "";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(`https://mainnet.base.org/${builderCodeSuffix}`),
  },
});

