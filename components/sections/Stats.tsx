"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const stats = [
  { number: "100+", label: "eventos operados" },
  { number: "50+", label: "marcas parceiras" },
  { number: "25", label: "anos de experiência" },
  { number: "100%", label: "entregas no prazo" },
];

export function Stats() {
  return (
    <section className="bg-[#0F0A1C] py-20 border-y border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col"
            >
              <span
                className="font-medium leading-none tracking-tight text-transparent bg-clip-text"
                style={{
                  fontFamily: "var(--font-clash)",
                  fontSize: "clamp(48px, 6vw, 80px)",
                  backgroundImage: "linear-gradient(135deg, #7C3AED 0%, #E11D74 50%, #F97316 100%)",
                }}
              >
                {s.number}
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
