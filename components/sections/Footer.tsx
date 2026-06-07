import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NectarLogo } from "@/components/brand/NectarLogo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#07050E]" style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
      <Container className="py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-5">Contato</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@nectar.com.br" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                <Mail size={14} />
                Maioli@nectareventos.com.br
              </a>
              <a href="tel:+551199999999" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={14} />
                +55 11 96618-6666
              </a>
              <span className="flex items-center gap-2.5 text-sm text-white/40">
                <MapPin size={14} />
                São Paulo, SP
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-5">Site</p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/eventos", label: "Eventos" },
                { href: "/locacao", label: "Locação" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors w-fit">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-5">Redes</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                <span className="text-[10px] font-bold w-3.5 text-center">IG</span>
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                <span className="text-[10px] font-bold w-3.5 text-center">in</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "0.5px solid rgba(255,255,255,0.05)" }}
        >
          <div className="opacity-20 w-full">
            <NectarLogo size="lg" />
          </div>
          <p className="text-xs text-white/20 whitespace-nowrap">
            © 2025 nectar. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
