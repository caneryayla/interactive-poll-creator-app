"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h6v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" />
      </svg>

      <div className="space-y-4 max-w-md">
        <h1 className="text-3xl font-bold">
          Welcome to Interactive Poll Creator
        </h1>
        <p className="text-muted-foreground">
          Create, preview, and answer polls in real time. No sign-up required —
          it&apos;s all local and instant.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/create">
          <Button size="lg" className="cursor-pointer">
            Create a Poll
          </Button>
        </Link>
        <Link href="/list">
          <Button variant="outline" size="lg" className="cursor-pointer">
            View Polls
          </Button>
        </Link>
      </div>
    </main>
  );
}
