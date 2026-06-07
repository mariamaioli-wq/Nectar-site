"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Monitor, Lightbulb, Volume2, LayoutGrid } from "lucide-react";

const items = [
  {
    icon: Monitor,
    title: "Painéis de LED",
    description: "P2, P2.6 e P3.9 indoor/outdoor. Alta resolução para qualquer escala de evento.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação cênica",
    description: "Moving heads, par LED e consoles DMX. Atmosfera sob controle.",
  },
  {
    icon: Volume2,
    title: "Áudio profissional",
    description: "Line array, subwoofers e microfones. Som que cobre cada metro do espaço.",
  },
  {
    icon: LayoutGrid,
    title: "Estruturas",
    description: "Treliças, palcos e backdrops. Infraestrutura robusta para qualquer layout.",
  },
];

export function Technology() {
  return (
    <section className="bg-[#0F0A1C] py-24">
      <Container>
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-3">Tecnologia</p>
          <h2
            className="text-4xl font-medium text-white tracking-tight"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Equipamento certo,<br />no momento certo.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card gradient className="pl-8">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(249,115,22,0.15))" }}>
                  <item.icon size={20} className="text-[#F97316]" />
                </div>
                <h3 className="mb-1.5 text-lg font-medium text-white" style={{ fontFamily: "var(--font-clash)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
