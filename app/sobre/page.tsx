import type { Metadata } from "next";
import Image from "next/image";
import { AuroraBackground } from "@/components/brand/AuroraBackground";
import { Container } from "@/components/ui/Container";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = { title: "Sobre" };

const credentials = [
  { number: "+25 anos", label: "em eventos corporativos" },
  { number: "200+", label: "projetos operados na carreira" },
  { number: "100%", label: "entregas dentro do prazo" },
];

export default function SobrePage() {
  return (
    <>
      <AuroraBackground className="min-h-[40vh] flex items-end pb-16 pt-36">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-4">Sobre</p>
          <h1
            className="text-5xl md:text-7xl font-medium text-white tracking-tight max-w-2xl"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            A nectar começou no chão de feira.
          </h1>
        </Container>
      </AuroraBackground>

      <section className="bg-[#07050E] py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="flex flex-col gap-6 text-base text-white/60 leading-relaxed">
              <p>
                Antes da marca existir, <strong className="text-white/90 font-medium">Bruno Maioli</strong> já vinha operando eventos corporativos no Brasil há mais de 25 anos. Convenções, lançamentos, feiras de grande porte — todo tipo de evento que depende de planejamento minucioso e execução impecável passou pelas mãos dele em algum momento dessa trajetória.
              </p>
              <p>
                A Nectar nasce dessa experiência acumulada. Da convicção de que feira boa não é sorte: é processo, equipe certa e tecnologia que entrega no segundo. E também da inquietação de quem viu o mercado evoluir — e percebeu que ainda existe espaço pra uma promotora que junta o rigor operacional de décadas com a estética e a tecnologia que os eventos atuais pedem.
              </p>
              <p>
                Hoje a Nectar opera com uma equipe sênior, painéis de LED de última geração e a mesma cabeça que aprendeu a fazer evento na base do 'tem que dar certo' — porque sempre deu.
              </p>
            </div>

            <div
              className="relative rounded-[14px] overflow-hidden"
              style={{
                border: "0.5px solid rgba(255,255,255,0.08)",
                minHeight: "400px",
              }}
            >
              <Image
                src="/bruno.jpg"
                alt="Bruno Maioli — Founder da Nectar"
                fill
                className="object-cover"
                style={{ filter: "grayscale(30%)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(7,5,14,0.75) 0%, transparent 50%)" }}
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-1">Founder & CEO</p>
                  <p className="text-2xl font-medium text-white" style={{ fontFamily: "var(--font-clash)" }}>
                    Bruno Maioli
                  </p>
                  <p className="text-sm text-white/50 mt-1">+25 anos em eventos corporativos</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-[14px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ background: "#0F0A1C", border: "0.5px solid rgba(255,255,255,0.08)" }}
          >
            {credentials.map((c) => (
              <div key={c.label}>
                <span
                  className="block font-medium leading-none tracking-tight text-transparent bg-clip-text mb-2"
                  style={{
                    fontFamily: "var(--font-clash)",
                    fontSize: "clamp(40px, 5vw, 64px)",
                    backgroundImage: "linear-gradient(135deg, #7C3AED 0%, #E11D74 50%, #F97316 100%)",
                  }}
                >
                  {c.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/40">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
