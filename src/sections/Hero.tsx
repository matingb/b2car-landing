"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { APP_NAME } from "../constants";
import { Button, Reveal } from "../components/UI";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>

          <div className="flex flex-row items-start">
            <div className="flex flex-col text-start mr-22">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
                Gestión inteligente para <br className="hidden md:block" />
                <span className="text-accent">talleres modernos</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-secondary mb-10">
                Simplificá la administración de clientes, vehículos y reparaciones. Menos papeles, más
                control y un taller más rentable.
              </p>
              <div className="flex flex-col sm:flex-row justify-start gap-4 mb-16">
                <Button
                  size="lg"
                  onClick={() =>
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Pedir una demo <ArrowRight className="ml-2" size={18} />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    document.getElementById("características")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Ver características
                </Button>
              </div>
            </div>
            <img src="/logos/logoGrande.svg" alt={`${APP_NAME} logo`} className="mx-auto mb-6 w-100" />
          </div>

        </Reveal>

        <Reveal delay={200}>
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm p-2 shadow-2xl">
            <div className="rounded-xl bg-white border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-secondary font-semibold">{APP_NAME}</span>
              </div>

              <div className="relative w-full bg-bg-main">
                <Image
                  src="/screenDesktop1.png"
                  alt={`Captura del sistema ${APP_NAME}`}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
