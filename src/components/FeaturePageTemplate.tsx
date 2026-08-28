"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Navbar, Footer, Contact } from "@/sections";
import { Button, Reveal } from "@/components/UI";

export interface FeatureDetail {
  icon: React.ReactNode;
  iconContainerClassName: string;
  title: string;
  description: string;
}

export interface FeaturePageTemplateProps {
  heroIcon: React.ReactNode;
  heroTitle: string;
  heroDescription: string;
  detailsTitle: string;
  detailsDescription: string;
  features: FeatureDetail[];
  mockupContent: React.ReactNode;
  mockupGradientClassName?: string;
  loomVideoUrl?: string;
}

export const FeaturePageTemplate: React.FC<FeaturePageTemplateProps> = ({
  heroIcon,
  heroTitle,
  heroDescription,
  detailsTitle,
  detailsDescription,
  features,
  mockupContent,
  mockupGradientClassName = "from-accent/20 to-blue-500/20 rotate-3",
  loomVideoUrl,
}) => {
  const [hasVideoError, setHasVideoError] = useState(false);

  const isVideoAvailable = Boolean(
    loomVideoUrl &&
      loomVideoUrl.trim() !== "" &&
      !loomVideoUrl.includes("placeholder") &&
      !hasVideoError
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg-main">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary to-blue-900 text-white">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
              isVideoAvailable
                ? "flex flex-col lg:flex-row items-center gap-12"
                : "text-center"
            }`}
          >
            <Reveal
              className={
                isVideoAvailable ? "flex-1 text-center lg:text-left" : ""
              }
            >
              <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur border border-white/20">
                {heroIcon}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                {heroTitle}
              </h1>
              <p
                className={`text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed ${
                  isVideoAvailable ? "" : "max-w-3xl mx-auto"
                }`}
              >
                {heroDescription}
              </p>
              <div
                className={`flex flex-wrap gap-4 ${
                  isVideoAvailable
                    ? "justify-center lg:justify-start"
                    : "justify-center"
                }`}
              >
                <Link href="/#contacto">
                  <Button
                    size="lg"
                    className="shadow-lg hover:shadow-accent/30"
                  >
                    Solicitar Demo <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Volver al inicio
                  </Button>
                </Link>
              </div>
            </Reveal>

            {isVideoAvailable && (
              <Reveal
                delay={200}
                className="flex-1 w-full max-w-2xl lg:max-w-none mx-auto mt-12 lg:mt-0"
              >
                <div className="relative w-full aspect-video rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur">
                  <iframe
                    src={loomVideoUrl}
                    allowFullScreen
                    onError={() => setHasVideoError(true)}
                    className="absolute top-0 left-0 w-full h-full border-0"
                  ></iframe>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* Details Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  {detailsTitle}
                </h2>
                <p className="text-lg text-secondary mb-8">
                  {detailsDescription}
                </p>
                <div className="space-y-6">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${feature.iconContainerClassName}`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-secondary">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={300} className="relative hidden lg:block">
                <div
                  className={`absolute inset-0 bg-gradient-to-tr rounded-3xl blur-3xl transform ${mockupGradientClassName}`}
                ></div>
                <div className="relative bg-gray-50 border border-gray-200 rounded-3xl shadow-xl overflow-hidden h-[500px] flex flex-col">
                  {/* Mockup header */}
                  <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  {/* Mockup body */}
                  <div className="flex-1 p-8">{mockupContent}</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};
