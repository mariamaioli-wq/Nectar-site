"use client";

import { AuroraBackground } from "@/components/brand/AuroraBackground";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  empresa: z.string().min(1, "Empresa obrigatória"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().optional(),
  descricao: z.string().min(10, "Descreva o que você precisa"),
});

type FormData = z.infer<typeof schema>;

export default function ContatoPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
  };

  return (
    <>
      <AuroraBackground className="min-h-[40vh] flex items-end pb-16 pt-36">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-4">Contato</p>
          <h1
            className="text-5xl md:text-7xl font-medium text-white tracking-tight max-w-2xl"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            Vamos planejar seu próximo evento?
          </h1>
          <p className="mt-4 text-base text-white/60 max-w-md">
            Respondemos em até 24h com uma proposta inicial.
          </p>
        </Container>
      </AuroraBackground>

      <section className="bg-[#07050E] py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex flex-col gap-5">
                <a href="mailto:Maioli@nectareventos.com.br" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(225,29,116,0.1)" }}>
                    <Mail size={18} className="text-[#E11D74]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-[0.1em] mb-0.5">E-mail</p>
                    <p className="text-sm">Maioli@nectareventos.com.br</p>
                  </div>
                </a>
                <a href="tel:+5511999999999" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(124,58,237,0.1)" }}>
                    <Phone size={18} className="text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-[0.1em] mb-0.5">Telefone</p>
                    <p className="text-sm">+55 11 96618-6666</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-white/40">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(249,115,22,0.1)" }}>
                    <MapPin size={18} className="text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-[0.1em] mb-0.5">Localização</p>
                    <p className="text-sm">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-[16px] p-8"
              style={{ background: "#0F0A1C", border: "0.5px solid rgba(255,255,255,0.08)" }}
            >
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="h-12 w-12 rounded-full mb-4 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #E11D74)" }}>
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: "var(--font-clash)" }}>
                    Recebemos sua mensagem.
                  </h3>
                  <p className="text-sm text-white/50">Retornaremos em até 24h com uma proposta inicial.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-[0.1em] mb-1.5 block">Nome</label>
                      <input
                        {...register("nome")}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors"
                        placeholder="Seu nome"
                      />
                      {errors.nome && <p className="text-xs text-[#E11D74] mt-1">{errors.nome.message}</p>}
                    </div>
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-[0.1em] mb-1.5 block">Empresa</label>
                      <input
                        {...register("empresa")}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors"
                        placeholder="Nome da empresa"
                      />
                      {errors.empresa && <p className="text-xs text-[#E11D74] mt-1">{errors.empresa.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-[0.1em] mb-1.5 block">E-mail</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors"
                      placeholder="seu@email.com"
                    />
                    {errors.email && <p className="text-xs text-[#E11D74] mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-[0.1em] mb-1.5 block">Telefone (opcional)</label>
                    <input
                      {...register("telefone")}
                      className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors"
                      placeholder="+55 11 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 uppercase tracking-[0.1em] mb-1.5 block">Descreva o evento</label>
                    <textarea
                      {...register("descricao")}
                      rows={4}
                      className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/20 transition-colors resize-none"
                      placeholder="Tipo de evento, número de participantes, data prevista..."
                    />
                    {errors.descricao && <p className="text-xs text-[#E11D74] mt-1">{errors.descricao.message}</p>}
                  </div>
                  <Button variant="primary" type="submit" disabled={isSubmitting} className="w-full mt-2">
                    {isSubmitting ? "Enviando..." : "Solicite uma proposta"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
