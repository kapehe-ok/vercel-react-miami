import Link from "next/link";
import Image from "next/image";
import { Yellowtail } from "next/font/google";
import { cn } from "@/lib/utils";
const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-6 py-12 flex flex-col items-center text-center">
        <div className="mb-12 flex items-center gap-4">
          <Image
            src="/vercel-logotype-dark.png"
            alt="Vercel"
            width={120}
            height={120}
            priority
          />
          <span className="text-xl text-gray-600 font-mono">@</span>
          <span className={cn(yellowtail.className, "text-3xl neon-text")}>
            React Miami
          </span>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Link
            href="https://vercel.com/careers?function=Engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">
              JOIN OUR TEAM
            </span>
          </Link>

          <Link
            href="https://discord.com/invite/bUG2bvbtHy"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">
              NEXT.JS DISCORD
            </span>
          </Link>

          <Link
            href="https://community.vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">
              VERCEL COMMUNITY
            </span>
          </Link>

          <Link
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">VERCEL</span>
          </Link>

          <Link
            href="https://v0.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">v0</span>
          </Link>

          <Link
            href="https://sdk.vercel.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">AI SDK</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
