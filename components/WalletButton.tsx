"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const connector = connectors[0];

  if (isConnected && address) {
    return (
      <button
        type="button"
        className="button-soft"
        style={{ background: "rgba(255,255,255,0.16)", color: "white", minWidth: 150 }}
        onClick={() => disconnect()}
      >
        {address.slice(0, 6)}...{address.slice(-4)}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="button-primary"
      style={{ minWidth: 150 }}
      onClick={() => connector && connect({ connector })}
      disabled={!connector || isPending}
    >
      {isPending ? "Connecting..." : "Connect wallet"}
    </button>
  );
}

