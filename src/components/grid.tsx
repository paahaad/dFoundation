import React from "react";
import Link from "next/link";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Solana from "@/components/solana";
import Drift from "@/components/drift";
import Bitcoin from "@/components/bitcoin";
import Uniswap from "@/components/uniswap";
import Eth from "@/components/eth";
import Sui from "@/components/sui";
import Chainlink from "@/components/chainlink";
import XRP from "@/components/xrp";
import IPFS from "@/components/ipfs";

import { cn } from "@/lib/utils";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <Link
          href={`/paper/${item.name}`}
          className="block w-full h-full"
          key={i}
        >
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("cursor-pointer h-full", item.className)}
            icon={item.icon}
          />
        </Link>
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Revolutionizing Finance",
    name: "bitcoin",
    description:
      "The Bitcoin Foundation is the longest established Bitcoin advocacy organization in the world",
    header: <Bitcoin />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Future of Fast Finance",
    description: "Dive into the transformative power of technology.",
    name: "solana",
    header: <Solana />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Smart Contract Pioneer",
    description:
      "Ethereum introduced programmable blockchain technology, enabling decentralized applications and innovation.",
    name: "eth",
    header: <Eth />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Redefining Decentralized Trading",
    description:
      "Uniswap empowers users with trustless, permissionless, and automated token swaps on Ethereum.",
    header: <Uniswap />,
    name: "uniswap",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bridging the Blockchain Gap",
    description:
      "Chainlink connects smart contracts with real-world data, ensuring trust and reliability.",
    name: "chainlink",
    header: <Chainlink />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Bridge for Global Payments",
    description:
      "XRP enables fast, low-cost, cross-border transactions, revolutionizing financial settlements.",
    name:"xrp",
    header: <XRP />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Next-Gen Blockchain Performance",
    description:
      "Sui is a high-speed, low-latency blockchain designed for seamless digital asset ownership.",
    name: "sui",
    header: <Sui />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Revolutionizing Perpetual Trading",
    description:
      "Drift brings decentralized, high-performance perpetual futures trading to Solana with deep liquidity.",
    name: "drif",
    header: <Drift />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Decentralizing the Web",
    description:
      "IPFS revolutionizes data storage with a peer-to-peer protocol for a more open internet.",
    name: "ipfs",
    header: <IPFS />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
