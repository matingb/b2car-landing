"use client";

import React, { useMemo, useState } from "react";
import { ArrowRight, Car, Menu, X } from "lucide-react";

import { APP_NAME } from "../constants";
import { Button } from "../components/UI";
import router from "next/router";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: "Características", href: "#características" },
      { label: "Cómo funciona", href: "#cómo-funciona" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
    [],
  );

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <img src="/logos/iconoB2Car.svg" alt="Car icon" className="w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-accent tracking-tight">{APP_NAME}</div>
              <div className="text-[11px] text-secondary -mt-0.5">Gestión de talleres</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contactar
            </Button>
            <Button
              size="sm"
              onClick={() =>
                window.location.href ="https://app.b2car.ar"
              }
            >
              Abrir App <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center rounded-lg p-2 text-secondary hover:text-primary hover:bg-gray-100 transition"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-semibold text-secondary hover:text-primary hover:bg-gray-50 transition"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => {
                setIsOpen(false);
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contactar
            </Button>
            <Button
              fullWidth
              onClick={() => {
                setIsOpen(false);
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solicitar demo <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
