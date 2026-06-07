"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuroraBackground } from "@/components/brand/AuroraBackground";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTAFinal() {
  return (
    <AuroraBackground>
      <Container className="py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="mb-4 font-medium text-white tracking-tight"
            style={{
              fontFamily: "var(--font-clash)",
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            Vamos planejar seu próximo evento?
          </h2>
          <p className="mb-10 text-base text-white/60 max-w-md mx-auto">
            Conte pra gente o que você precisa. Respondemos em até 24h com uma proposta inicial.
          </p>
          <Link href="/contato">
            <Button variant="primary" size="lg">
              Solicite uma proposta
            </Button>
          </Link>
        </motion.div>
      </Container>
    </AuroraBackground>
  );
}
