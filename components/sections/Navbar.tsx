"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NectarLogo } from "@/components/brand/NectarLogo";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/eventos", label: "Eventos" },
  { href: "/locacao", label: "Locação" },
  { href: "/sobre", label: "Sobre" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,5,14,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <Link href="/">
          <NectarLogo size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contato">
            <Button variant="primary" size="sm">
              Solicite uma proposta
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-[#07050E] z-50 flex flex-col px-6 py-8">
          <div className="flex items-center justify-between mb-12">
            <NectarLogo size="sm" />
            <button onClick={() => setOpen(false)} className="text-white/70">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-2xl font-medium text-white/80 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contato" onClick={() => setOpen(false)}>
              <Button variant="primary" className="mt-4 w-full">
                Solicite uma proposta
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
