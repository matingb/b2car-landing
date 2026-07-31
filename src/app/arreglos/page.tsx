import React from "react";
import { Wrench, Activity, FileCheck } from "lucide-react";
import { FeaturePageTemplate } from "@/components/FeaturePageTemplate";

export default function ArreglosPage() {
  const mockupContent = (
    <>
      <div className="w-64 h-8 bg-gray-200 rounded-lg mb-6"></div>
      <div className="flex gap-4 mb-6">
        <div className="flex-1 h-24 bg-white border border-gray-100 rounded-xl shadow-sm p-4">
          <div className="w-16 h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-10 h-8 bg-orange-100 rounded"></div>
        </div>
        <div className="flex-1 h-24 bg-white border border-gray-100 rounded-xl shadow-sm p-4">
          <div className="w-16 h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-10 h-8 bg-green-100 rounded"></div>
        </div>
      </div>
      <div className="w-full h-40 bg-white border border-gray-100 rounded-xl shadow-sm p-4 flex flex-col justify-between">
        <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-gray-100 rounded"></div>
          <div className="w-full h-2 bg-gray-100 rounded"></div>
          <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
        </div>
        <div className="flex justify-end">
          <div className="w-24 h-8 bg-blue-600 rounded-lg"></div>
        </div>
      </div>
    </>
  );

  return (
    <FeaturePageTemplate
      heroIcon={<Wrench size={32} className="text-accent" />}
      heroTitle="Gestión de Arreglos"
      heroDescription="Supervisa el ciclo de vida de cada reparación. Mantén a tu equipo sincronizado y a tus clientes informados en cada etapa."
      detailsTitle="Control total de tus órdenes de trabajo"
      detailsDescription="Centraliza todas las operaciones de tu taller. Desde que el vehículo ingresa hasta que se factura, todo queda registrado y organizado."
      features={[
        {
          icon: <Activity className="text-orange-600" size={24} />,
          iconContainerClassName: "bg-orange-50",
          title: "Estados y Tiempos",
          description:
            "Visualiza en qué etapa está cada trabajo y gestiona los tiempos de reparación. Diferencia fácilmente entre pendiente, en proceso y terminado.",
        },
        {
          icon: <FileCheck className="text-teal-600" size={24} />,
          iconContainerClassName: "bg-teal-50",
          title: "Líneas de servicio y repuestos",
          description:
            "Agrega mano de obra y repuestos directamente desde tu inventario a cada orden. Calcula costos y márgenes automáticamente.",
        },
        {
          icon: <Wrench className="text-blue-600" size={24} />,
          iconContainerClassName: "bg-blue-50",
          title: "Registro de Pagos",
          description:
            "Mantén el control de lo que cada cliente debe. Registra pagos parciales, señas y saldos pendientes con un clic.",
        },
      ]}
      mockupContent={mockupContent}
      mockupGradientClassName="from-accent/20 to-orange-500/20 rotate-3"
      loomVideoUrl="https://www.loom.com/embed/placeholder"
    />
  );
}
