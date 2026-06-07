"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const cases = [
  { client: "Grupo Boticário", type: "Convenção nacional", year: "2024" },
  { client: "Embraer", type: "Lançamento de produto", year: "2024" },
  { client: "Itaú BBA", type: "Feira corporativa", year: "2023" },
  { client: "Ambev", type: "Ativação de marca", year: "2023" },
  { client: "Totvs", type: "Conferência anual", year: "2023" },
  { client: "Localiza", type: "Evento de revendedores", year: "2022" },
];

const gradients = [
  "from-[#7C3AED] to-[#E11D74]",
  "from-[#E11D74] to-[#F97316]",
  "from-[#F97316] to-[#7C3AED]",
  "from-[#7C3AED] to-[#F97316]",
  "from-[#E11D74] to-[#7C3AED]",
  "from-[#F97316] to-[#E11D74]",
];

export function Portfolio() {
  return (
    <section className="bg-[#07050E] py-24">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-3">Portfolio</p>
            <h2
              className="text-4xl font-medium text-white tracking-tight"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              Cases realizados.
            </h2>
          </div>
          <Link href="/portfolio" className="hidden md:block text-sm text-white/40 hover:text-white transition-colors">
            Ver todos →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={`${c.client}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative rounded-[14px] overflow-hidden border border-white/[0.08] bg-[#0F0A1C] cursor-pointer hover:border-white/20 transition-colors"
            >
              <div className={`h-44 bg-gradient-to-br ${gradients[i]} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-1">{c.year}</span>
                <h3 className="text-base font-medium text-white" style={{ fontFamily: "var(--font-clash)" }}>
                  {c.client}
                </h3>
                <p className="text-sm text-white/50">{c.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
