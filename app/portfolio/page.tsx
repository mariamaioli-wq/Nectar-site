import type { Metadata } from "next";
import { AuroraBackground } from "@/components/brand/AuroraBackground";
import { Container } from "@/components/ui/Container";
import { CTAFinal } from "@/components/sections/CTAFinal";

export const metadata: Metadata = { title: "Portfolio" };

const cases = [
  { client: "Grupo Boticário", type: "Convenção nacional", year: "2024", desc: "Convenção anual com 1.200 participantes, painel LED 24x6m, iluminação cênica e coordenação completa de programa." },
  { client: "Embraer", type: "Lançamento de produto", year: "2024", desc: "Evento de lançamento para imprensa e clientes estratégicos. Montagem em hangar com infraestrutura completa de A/V." },
  { client: "Itaú BBA", type: "Feira corporativa", year: "2023", desc: "Feira interna com 40 expositores, gestão de stands, credenciamento e operação por 3 dias." },
  { client: "Ambev", type: "Ativação de marca", year: "2023", desc: "Ativação experiencial em evento de varejo. Stand interativo com tecnologia LED integrada." },
  { client: "Totvs", type: "Conferência anual", year: "2023", desc: "TOTVS Universe — 3.000 participantes, palco principal de 30m, transmissão simultânea e breakout rooms." },
  { client: "Localiza", type: "Evento de revendedores", year: "2022", desc: "Convenção de franqueados com 800 pessoas. Produção completa, palco, iluminação e cerimônia de premiação." },
  { client: "Vivo", type: "Ativação de produto", year: "2022", desc: "Lançamento de linha de produtos com experiência imersiva. Painel P2 curvo como cenografia principal." },
  { client: "XP Inc.", type: "Evento para investidores", year: "2022", desc: "XP Investor Day — auditório para 500 pessoas, transmissão ao vivo e simultânea para 3 cidades." },
];

const gradients = [
  "from-[#7C3AED] to-[#E11D74]",
  "from-[#E11D74] to-[#F97316]",
  "from-[#F97316] to-[#7C3AED]",
  "from-[#7C3AED] to-[#F97316]",
  "from-[#E11D74] to-[#7C3AED]",
  "from-[#F97316] to-[#E11D74]",
  "from-[#7C3AED] to-[#E11D74]",
  "from-[#E11D74] to-[#F97316]",
];

export default function PortfolioPage() {
  return (
    <>
      <AuroraBackground className="min-h-[50vh] flex items-end pb-16 pt-36">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-4">Portfolio</p>
          <h1
            className="text-5xl md:text-7xl font-medium text-white tracking-tight"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Cases realizados.
          </h1>
          <p className="mt-4 text-base text-white/60 max-w-lg">
            Mais de 100 eventos operados. Cada um com a mesma atenção ao detalhe.
          </p>
        </Container>
      </AuroraBackground>

      <section className="bg-[#07050E] py-24">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map((c, i) => (
              <div
                key={`${c.client}-${i}`}
                className="group relative rounded-[14px] overflow-hidden border border-white/[0.08] bg-[#0F0A1C] hover:border-white/20 transition-colors"
              >
                <div className={`h-40 bg-gradient-to-br ${gradients[i]} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">{c.year} · {c.type}</span>
                  <h3 className="mt-1.5 mb-2 text-lg font-medium text-white" style={{ fontFamily: "var(--font-clash)" }}>
                    {c.client}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
