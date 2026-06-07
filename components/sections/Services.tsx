"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CalendarDays, Monitor } from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Gestão de eventos",
    description: "Do conceito à última luz apagada. Cuidamos do planejamento, da operação e da experiência.",
    items: ["Feiras corporativas", "Convenções e lançamentos", "Ativações de marca", "Stands e experiências imersivas"],
    href: "/eventos",
    cta: "Saiba mais",
  },
  {
    icon: Monitor,
    title: "Locação de tecnologia",
    description: "Equipamentos profissionais com a operação certa. Sem improviso, sem surpresa.",
    items: ["Painéis de LED (P2, P2.6, P3.9)", "Iluminação cênica (moving heads, par LED)", "Áudio profissional (line array, microfones)", "Estruturas (treliças, palcos, backdrops)"],
    href: "/locacao",
    cta: "Ver equipamentos",
  },
];

export function Services() {
  return (
    <section className="bg-[#07050E] py-24">
      <Container>
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-3">Serviços</p>
          <h2
            className="text-4xl font-medium text-white tracking-tight"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Duas frentes, uma entrega.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card gradient className="h-full flex flex-col pl-8">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(225,29,116,0.2))" }}>
                  <s.icon size={20} className="text-[#E11D74]" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-white" style={{ fontFamily: "var(--font-clash)" }}>
                  {s.title}
                </h3>
                <p className="mb-5 text-sm text-white/50 leading-relaxed">{s.description}</p>
                <ul className="mb-8 flex flex-col gap-2 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="h-1 w-1 rounded-full bg-[#E11D74]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  {s.cta} →
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
