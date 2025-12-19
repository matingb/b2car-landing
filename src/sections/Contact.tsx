"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

import { APP_NAME } from "../constants";
import { Button, Reveal } from "../components/UI";

export const Contact: React.FC = () => {
  const salesEmail = "contacto@b2car.ar";
  const phoneE164 = "+541140420816";

  const mailtoHref = React.useMemo(() => {
    const subject = `Contacto comercial - ${APP_NAME}`;
    const body =
      `Hola equipo de ${APP_NAME},\n\n` +
      "Quiero coordinar una demo y habilitar mi cuenta.\n\n" +
      "Nombre y apellido:\n" +
      "Taller / Empresa:\n" +
      "Dirección:\n" +
      "Teléfono:\n\n" +
      "¡Gracias!";

    return `mailto:${salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [salesEmail]);

  const handleSalesEmail = React.useCallback(() => {
    window.location.href = mailtoHref;
  }, [mailtoHref]);

  const handleCall = React.useCallback(() => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;
    window.location.href = `tel:${phoneE164}`;
  }, [phoneE164]);

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-primary to-gray-900 text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
             ¿Listo para profesionalizar tu taller?
           </h2>
           <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
             Únete a los talleres que ya están optimizando su gestión con {APP_NAME}. 
             Contáctanos para habilitar tu cuenta y recibir una demostración personalizada.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Button
               size="lg"
               onClick={handleSalesEmail}
               className="bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25"
               aria-label="Contactar ventas por email"
              >
                 <Mail className="mr-2 w-5 h-5" />
                 Contactar Ventas
              </Button>

              <Button
               size="lg"
               variant="ghost"
               onClick={handleCall}
               className="text-white border border-white/20 hover:bg-white/10 sm:hidden"
               aria-label="Llamar a ventas"
              >
                 <Phone className="mr-2 w-5 h-5" />
                 Agendar llamada
              </Button>
           </div>
           
           <p className="mt-8 text-sm text-gray-500">
             Sin costos de instalación. Soporte incluido.
           </p>
        </Reveal>
      </div>
    </section>
  );
};
