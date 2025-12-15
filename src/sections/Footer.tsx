"use client";

import React from "react";
import { Car, Mail, MapPin, Phone } from "lucide-react";

import { APP_NAME } from "../constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <img src="/logos/iconoB2Car.svg" alt="Car icon" className="w-5" />
              </div>
              <div>
                <div className="font-extrabold text-primary">{APP_NAME}</div>
                <div className="text-xs text-secondary">Gestión inteligente de talleres</div>
              </div>
            </div>
            <p className="mt-4 text-secondary max-w-md">
              Una plataforma simple y moderna para organizar tus clientes, vehículos y arreglos.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold text-primary">Secciones</div>
            <div className="mt-4 space-y-2">
              <a href="#características" className="block text-sm text-secondary hover:text-primary">
                Características
              </a>
              <a href="#cómo-funciona" className="block text-sm text-secondary hover:text-primary">
                Cómo funciona
              </a>
              <a href="#faq" className="block text-sm text-secondary hover:text-primary">
                FAQ
              </a>
              <a href="#contacto" className="block text-sm text-secondary hover:text-primary">
                Contacto
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-primary">Contacto</div>
            <div className="mt-4 space-y-2 text-sm text-secondary">
              <div className="flex items-center gap-2">
                <Mail size={16} /> contacto@b2car.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> +54 11 0000-0000
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Argentina
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.
          </div>
          
        </div>
      </div>
    </footer>
  );
};
