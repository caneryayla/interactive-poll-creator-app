"use client";

import Link from "next/link";
import { ModeToggleButton } from "../buttons/ModeToggleButton";

export default function AppHeader() {
  return (
    <header className="w-full border-b px-4 py-2 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Interactive Poll Creator App
      </Link>

      <div>
        <ModeToggleButton />
      </div>
    </header>
  );
}
