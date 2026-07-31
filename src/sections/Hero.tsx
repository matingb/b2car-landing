"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

import { APP_NAME } from "../constants";
import { Carousel } from "../components/Carousel";
import { Button, Reveal } from "../components/UI";

export const Hero: React.FC = () => {
  const screens = [
    {
      src: "/screens/desktop/screenDesktop1.png",
      alt: `Dashboard - ${APP_NAME}`,
    },
    {
      src: "/screens/desktop/screenDesktop2.png",
      alt: `Gestión de Clientes - ${APP_NAME}`,
    },
    {
      src: "/screens/desktop/screenDesktop3.png",
      alt: `Control de Arreglos - ${APP_NAME}`,
    },
    {
      src: "/screens/desktop/screenDesktop4.png",
      alt: `Control de Turnos - ${APP_NAME}`,
    },
    {
      src: "/screens/desktop/screenDesktop5.png",
      alt: `Lista de Arreglos - ${APP_NAME}`,
    },
  ];

  const mobileScreens = [
    {
      src: "/screens/mobile/screenMobile1.jpg",
      alt: `Captura del sistema ${APP_NAME} (1)`,
    },
    {
      src: "/screens/mobile/screenMobile2.jpg",
      alt: `Captura del sistema ${APP_NAME} (2)`,
    },
    {
      src: "/screens/mobile/screenMobile3.jpg",
      alt: `Captura del sistema ${APP_NAME} (3)`,
    },
    {
      src: "/screens/mobile/screenMobile4.jpg",
      alt: `Captura del sistema ${APP_NAME} (1)`,
    },
    {
      src: "/screens/mobile/screenMobile5.jpg",
      alt: `Captura del sistema ${APP_NAME} (2)`,
    },
    {
      src: "/screens/mobile/screenMobile6.jpg",
      alt: `Captura del sistema ${APP_NAME} (3)`,
    },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>

          <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center">
            <div className="flex flex-col text-center lg:text-start lg:mr-22 lg:items-start items-center">
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
          <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="hidden lg:block">
                  <Carousel slides={screens} title={""} />
              </div>

              <div className="lg:hidden">
                <Carousel
                  slides={mobileScreens}
                  title={""}
                  contentClassName="w-[92%] mx-auto h-auto pb-8"
                  itemClassName="pl-3 basis-[96%]"
                  imageContainerClassName="h-[520px]"
                  imageSizes="(max-width: 1024px) 92vw, 1024px"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
