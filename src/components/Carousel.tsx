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
  contentClassName?: string;
  itemClassName?: string;
  imageContainerClassName?: string;
  imageSizes?: string;
  autoplay?: boolean;
  autoplayDelayMs?: number;
};

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  title = "",
  className = "",
  contentClassName = "w-[70%] mx-auto h-auto pb-8",
  itemClassName = "pl-12 basis-[92%] sm:basis-[85%] lg:basis-[75%]",
  imageContainerClassName = "h-[260px] sm:h-[360px] lg:h-[525px]",
  imageSizes = "(max-width: 1024px) 100vw, 1024px",
  autoplay = true,
  autoplayDelayMs = 5000,
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
    <ShadcnCarousel
      opts={{ loop: true, align: "center" }}
      setApi={setApi}
      className={`${className} w-full`}
    >
      <CarouselContent className={contentClassName}>
        {safeSlides.map((slide, i) => (
          <CarouselItem
            key={`${slide.src}-${i}`}
            className={itemClassName}
          >
            <div className="relative w-full rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm p-2 shadow-md ">
              <div className="rounded-xl bg-white border border-gray-100 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  {title ? (
                    <span className="ml-3 text-xs text-secondary font-semibold">{title}</span>
                  ) : null}
                </div>

                <div className={`relative w-full bg-bg-main ${imageContainerClassName}`}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={slide.priority ?? i === 0}
                    className=" object-cover"
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
