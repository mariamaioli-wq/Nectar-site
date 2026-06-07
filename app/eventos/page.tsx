import type { Metadata } from "next";
import { AuroraBackground } from "@/components/brand/AuroraBackground";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { CalendarCheck, Users, Mic, Store } from "lucide-react";

export const metadata: Metadata = { title: "Eventos" };

const items = [
  { icon: Store, title: "Feiras corporativas", description: "Planejamento completo de stands, fluxo de visitantes, credenciamento e operação no dia do evento." },
  { icon: Mic, title: "Convenções e lançamentos", description: "Palco, cerimônia, sonorização e coordenação de programa — do ensaio ao encerramento." },
  { icon: Users, title: "Ativações de marca", description: "Experiências imersivas que colocam o visitante dentro da marca. Conceito, produção e operação." },
  { icon: CalendarCheck, title: "Stands e experiências", description: "Projetos personalizados que transformam metros quadrados em experiência de marca memorável." },
];

export default function EventosPage() {
  return (
    <>
      <AuroraBackground className="min-h-[50vh] flex items-end pb-16 pt-36">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-4">Serviço</p>
          <h1
            className="text-5xl md:text-7xl font-medium text-white tracking-tight max-w-2xl"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Gestão de eventos.
          </h1>
          <p className="mt-4 text-base text-white/60 max-w-lg">
            Do conceito à última luz apagada. Cuidamos do planejamento, da operação e da experiência.
          </p>
        </Container>
      </AuroraBackground>

      <section className="bg-[#07050E] py-24">
        <Container>
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((item) => (
              <Card key={item.title} gradient className="pl-8">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(225,29,116,0.15))" }}>
                  <item.icon size={20} className="text-[#E11D74]" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-white" style={{ fontFamily: "var(--font-clash)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
