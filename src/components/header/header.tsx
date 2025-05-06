"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggleButton } from "../buttons/ModeToggleButton";
import { cn } from "@/lib/utils";
import { navLinks } from "@/utils/data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function AppHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b px-4 py-2 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Interactive Poll Creator App
      </Link>

      <div className="hidden md:flex items-center gap-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-sm font-medium hover:underline",
              pathname === href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {label}
          </Link>
        ))}

        <ModeToggleButton />
      </div>

      <div className="md:hidden flex items-center gap-2">
        <ModeToggleButton />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-56 p-6">
            <DialogTitle>Menu</DialogTitle>

            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium hover:underline",
                    pathname === href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
