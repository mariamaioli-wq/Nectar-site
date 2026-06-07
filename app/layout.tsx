import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — nectar | Eventos corporativos e tecnologia",
    default: "nectar | Eventos corporativos e tecnologia",
  },
  description:
    "Nectar é uma promotora de eventos corporativos e locação de tecnologia. Operamos feiras, convenções e ativações de marca do conceito à execução.",
  openGraph: {
    siteName: "nectar",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600&display=swap"
          rel="stylesheet"
        />
        <style>{`:root { --font-clash: 'Clash Display', sans-serif; }`}</style>
      </head>
      <body className="bg-[#07050E] text-[#FAFAF7] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
