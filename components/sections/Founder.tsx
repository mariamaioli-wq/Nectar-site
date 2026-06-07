"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Founder() {
  return (
    <section className="bg-[#07050E] py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="relative aspect-[4/5] rounded-[14px] overflow-hidden"
              style={{ border: "0.5px solid rgba(255,255,255,0.08)" }}
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
                style={{
                  background: "linear-gradient(to top, rgba(7,5,14,0.7) 0%, transparent 50%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/50 mb-1">Founder</p>
                  <p className="text-xl font-medium text-white" style={{ fontFamily: "var(--font-clash)" }}>
                    Bruno Maioli
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 mb-4">Quem está por trás</p>
            <h2
              className="mb-6 text-4xl font-medium text-white tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              25 anos de operação.<br />Uma marca nova.
            </h2>
            <p className="mb-6 text-base text-white/60 leading-relaxed">
              A Nectar é nova. A bagagem, não. Fundada por Bruno Maioli, que há mais de 25 anos opera eventos corporativos no Brasil — de convenções a feiras de grande porte.
            </p>
            <p className="mb-8 text-base text-white/60 leading-relaxed">
              A empresa nasce da convicção de que feira boa não é sorte: é processo, equipe certa e tecnologia certa, no momento certo.
            </p>
            <Link
              href="/sobre"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              Conheça o time →
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
