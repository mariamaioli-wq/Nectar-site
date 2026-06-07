"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuroraBackground } from "@/components/brand/AuroraBackground";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <AuroraBackground className="min-h-[calc(100vh-80px)] mt-20 flex items-center">
      <Container className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/15 px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/60">
              eventos corporativos · feiras · tecnologia
            </span>
          </div>

          <h1
            className="mb-6 font-medium leading-[1.05] tracking-tight text-white"
            style={{
              fontFamily: "var(--font-clash)",
              fontSize: "clamp(48px, 8vw, 96px)",
            }}
          >
            Sua marca,
            <br />
            em alta definição.
          </h1>

          <p className="mb-10 max-w-[480px] text-base leading-relaxed text-white/60">
            Operamos eventos do conceito à execução e fornecemos a tecnologia que faz cada momento ganhar volume, brilho e memória.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contato">
              <Button variant="primary" size="lg">
                Solicite uma proposta
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="ghost" size="lg">
                Conheça nossos cases
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </AuroraBackground>
  );
}
