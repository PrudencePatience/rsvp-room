"use client";

import Link from "next/link";
import { useAccount, usePublicClient, useWriteContract } from "wagmi";
import { baseRsvpAbi, baseRsvpContractAddress } from "@/lib/contracts";
import { trackTransaction } from "@/utils/track";
import { baseBuilderDataSuffix } from "@/lib/base-app";

export function RSVPButton({ eventId, fullWidth = false }: { eventId: string; fullWidth?: boolean }) {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync, isPending } = useWriteContract();

  async function handleJoin() {
    try {
      const hash = await writeContractAsync({
        address: baseRsvpContractAddress,
        abi: baseRsvpAbi,
        functionName: "join",
        dataSuffix: baseBuilderDataSuffix,
      });

      await publicClient?.waitForTransactionReceipt({ hash });
      await trackTransaction("app-001", "RSVP Room", address, hash);
    } catch {
      // Keep the CTA responsive even if the transaction is rejected.
    }
  }

  if (!isConnected) {
    return (
      <Link href={`/rsvp?eventId=${eventId}`} className="button-secondary" style={{ width: fullWidth ? "100%" : undefined }}>
        Connect to RSVP
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="button-primary"
      style={{ width: fullWidth ? "100%" : undefined }}
      disabled={isPending}
      onClick={handleJoin}
    >
      {isPending ? "Submitting RSVP..." : "Submit RSVP"}
    </button>
  );
}
