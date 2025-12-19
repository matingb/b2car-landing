"use client";

import React from "react";
import Image from "next/image";
import {
  type CarouselApi,
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type CarouselSlide = {
  src: string;
  alt: string;
  priority?: boolean;
};

type CarouselProps = {
  slides: CarouselSlide[];
  title?: string;
  className?: string;
  imageSizes?: string;
  autoplay?: boolean;
  autoplayDelayMs?: number;
};

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  title = "",
  className = "",
  imageSizes = "(max-width: 1280px) 100vw, 1024px",
  autoplay = true,
  autoplayDelayMs = 4000,
}) => {
  const safeSlides = slides.length > 0 ? slides : [{ src: "/screenDesktop1.png", alt: "Captura" }];
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!autoplay) return;
    if (!api) return;
    if (safeSlides.length <= 1) return;

    const id = window.setInterval(() => {
      api.scrollNext();
    }, autoplayDelayMs);

    return () => window.clearInterval(id);
  }, [api, autoplay, autoplayDelayMs, safeSlides.length]);

  return (
    <ShadcnCarousel opts={{ loop: true }} setApi={setApi} className={className}>
      <CarouselContent>
        {safeSlides.map((slide, i) => (
          <CarouselItem key={`${slide.src}-${i}`}>
            <div className="relative mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm p-2">
              <div className="rounded-xl bg-white border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  {title ? (
                    <span className="ml-3 text-xs text-secondary font-semibold">{title}</span>
                  ) : null}
                </div>

                <div className="relative w-full bg-bg-main">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1920}
                    height={1080}
                    priority={slide.priority ?? i === 0}
                    className="w-full h-auto"
                    sizes={imageSizes}
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        className="hidden sm:inline-flex left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/80 border border-gray-200 text-secondary hover:text-primary hover:bg-white"
      />
      <CarouselNext
        className="hidden sm:inline-flex right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white/80 border border-gray-200 text-secondary hover:text-primary hover:bg-white"
      />
    </ShadcnCarousel>
  );
};
