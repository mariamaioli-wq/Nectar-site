import type { Metadata } from "next";
import { AuroraBackground } from "@/components/brand/AuroraBackground";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Monitor, Lightbulb, Volume2, LayoutGrid } from "lucide-react";

export const metadata: Metadata = { title: "Locação" };

const items = [
  {
    icon: Monitor,
    title: "Painéis de LED",
    specs: ["P2 — indoor, alta resolução", "P2.6 — indoor, eventos médios a grandes", "P3.9 — indoor/outdoor, estruturas externas"],
    description: "Resolução e brilho calibrados para cada ambiente. Montagem em até 4h para painéis até 80m².",
  },
  {
    icon: Lightbulb,
    title: "Iluminação cênica",
    specs: ["Moving heads — efeitos dinâmicos", "Par LED RGBWA — wash e cor", "Consoles DMX — controle total"],
    description: "Atmosfera certa para cada momento do evento. Operação por técnico especializado.",
  },
  {
    icon: Volume2,
    title: "Áudio profissional",
    specs: ["Line array — cobertura uniforme", "Subwoofers — graves precisos", "Microfones sem fio — liberdade de palco"],
    description: "Som que cobre cada metro quadrado sem distorção. Engenheiro de som incluso na locação.",
  },
  {
    icon: LayoutGrid,
    title: "Estruturas",
    specs: ["Treliças — suporte para LED e iluminação", "Palcos modulares — qualquer dimensão", "Backdrops — impressão ou LED"],
    description: "Infraestrutura robusta projetada para cada layout. Montagem e desmontagem pela equipe nectar.",
  },
];

export default function LocacaoPage() {
  return (
    <>
      <AuroraBackground className="min-h-[50vh] flex items-end pb-16 pt-36">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-4">Serviço</p>
          <h1
            className="text-5xl md:text-7xl font-medium text-white tracking-tight max-w-2xl"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Locação de tecnologia.
          </h1>
          <p className="mt-4 text-base text-white/60 max-w-lg">
            Equipamentos profissionais com a operação certa. Sem improviso, sem surpresa.
          </p>
        </Container>
      </AuroraBackground>

      <section className="bg-[#07050E] py-24">
        <Container>
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((item) => (
              <Card key={item.title} gradient className="pl-8">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(249,115,22,0.15))" }}>
                  <item.icon size={20} className="text-[#F97316]" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-white" style={{ fontFamily: "var(--font-clash)" }}>
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-white/50 leading-relaxed">{item.description}</p>
                <ul className="flex flex-col gap-1.5">
                  {item.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="h-1 w-1 rounded-full bg-[#F97316]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
