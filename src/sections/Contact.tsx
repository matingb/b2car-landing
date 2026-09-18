"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

import { APP_NAME, CONTACT_INFO } from "../constants";
import { Button, Reveal } from "../components/UI";

export const Contact: React.FC = () => {
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

    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, []);

  const handleSalesEmail = React.useCallback(() => {
    window.location.href = mailtoHref;
  }, [mailtoHref]);

  const handleCall = React.useCallback(() => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;
    window.location.href = `tel:${CONTACT_INFO.phoneE164}`;
  }, []);

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
           
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base sm:text-lg font-semibold rounded-lg text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg shadow-[#25D366]/30 hover:scale-[1.02] active:scale-98 transition-all duration-200"
                aria-label="Contactar por WhatsApp"
              >
                <svg className="mr-2.5 w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Escribir por WhatsApp
              </a>

              <Button
                size="lg"
                onClick={handleSalesEmail}
                className="bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25"
                aria-label="Contactar ventas por email"
              >
                 <Mail className="mr-2 w-5 h-5" />
                 Enviar Email
              </Button>

              <Button
                size="lg"
                variant="ghost"
                onClick={handleCall}
                className="text-white border border-white/20 hover:bg-white/10 sm:hidden"
                aria-label="Llamar a ventas"
              >
                 <Phone className="mr-2 w-5 h-5" />
                 Llamar ({CONTACT_INFO.phoneDisplay})
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

