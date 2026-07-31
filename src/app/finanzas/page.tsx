import React from "react";
import { TrendingUp, PieChart, BarChart3 } from "lucide-react";
import { FeaturePageTemplate } from "@/components/FeaturePageTemplate";

export default function FinanzasPage() {
  const mockupContent = (
    <div className="flex flex-col h-full">
      <div className="w-48 h-8 bg-gray-200 rounded-lg mb-6"></div>
      
      <div className="flex gap-4 mb-6">
        <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-4">
          <div className="w-16 h-4 bg-gray-200 rounded mb-4"></div>
          <div className="w-24 h-8 bg-green-100 rounded-lg"></div>
        </div>
        <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-4">
          <div className="w-16 h-4 bg-gray-200 rounded mb-4"></div>
          <div className="w-24 h-8 bg-red-100 rounded-lg"></div>
        </div>
        <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-4">
          <div className="w-16 h-4 bg-gray-200 rounded mb-4"></div>
          <div className="w-24 h-8 bg-blue-100 rounded-lg"></div>
        </div>
      </div>

      <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col justify-end gap-2 relative overflow-hidden">
        <div className="absolute top-6 left-6 w-32 h-4 bg-gray-200 rounded"></div>
        
        <div className="flex items-end justify-between h-32 gap-2 mt-8">
          {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
            <div key={i} className="w-full bg-blue-100 rounded-t-sm" style={{ height: `${h}%` }}>
              <div className="w-full bg-blue-500 rounded-t-sm" style={{ height: `${h * 0.6}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <FeaturePageTemplate
      heroIcon={<TrendingUp size={32} className="text-accent" />}
      heroTitle="Finanzas y Facturación"
      heroDescription="El pulso económico de tu negocio en tiempo real. Analiza ingresos, gastos y márgenes de rentabilidad al instante."
      detailsTitle="Visualiza el crecimiento de tu taller"
      detailsDescription="Obtén métricas clave y reportes detallados para entender la salud financiera de tu negocio y tomar mejores decisiones día a día."
      features={[
        {
          icon: <PieChart className="text-purple-600" size={24} />,
          iconContainerClassName: "bg-purple-50",
          title: "Desglose de Ingresos",
          description:
            "Gráficos interactivos que muestran tu facturación agrupada por categoría de arreglo o por rendimiento de cada mecánico.",
        },
        {
          icon: <BarChart3 className="text-green-600" size={24} />,
          iconContainerClassName: "bg-green-50",
          title: "Facturación Global",
          description:
            "Monitorea el total facturado diariamente, semanalmente o mensualmente para proyectar el flujo de caja.",
        },
        {
          icon: <TrendingUp className="text-blue-600" size={24} />,
          iconContainerClassName: "bg-blue-50",
          title: "Control de Rentabilidad",
          description:
            "Resta automáticamente los costos de repuestos y sueldos a tus ingresos para ver la rentabilidad neta real de tu taller.",
        },
      ]}
      mockupContent={mockupContent}
      mockupGradientClassName="from-accent/20 to-purple-500/20 rotate-3"
      loomVideoUrl="https://www.loom.com/embed/placeholder"
    />
  );
}
