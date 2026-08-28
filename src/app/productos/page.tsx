import React from "react";
import { Package, Search, Bell } from "lucide-react";
import { FeaturePageTemplate } from "@/components/FeaturePageTemplate";

export default function ProductosPage() {
  const mockupContent = (
    <>
      <div className="w-48 h-8 bg-gray-200 rounded-lg mb-6"></div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="w-full h-16 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center px-4 gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-100"></div>
            <div className="flex-1">
              <div className="w-24 h-3 bg-gray-200 rounded mb-2"></div>
              <div className="w-16 h-2 bg-gray-100 rounded"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 font-bold flex items-center justify-center text-xs">
              {i * 5}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <FeaturePageTemplate
      heroIcon={<Package size={32} className="text-accent" />}
      heroTitle="Catálogo y Control de Stock"
      heroDescription="Maneja repuestos e insumos sin fricción. Evita quiebres de stock y controla múltiples talleres desde un solo lugar."
      detailsTitle="Control total de tu inventario"
      detailsDescription="Centraliza tu catálogo de productos y gestiona el stock de manera eficiente. Toma decisiones basadas en datos reales y automatiza tus precios."
      features={[
        {
          icon: <Search className="text-blue-600" size={24} />,
          iconContainerClassName: "bg-blue-50",
          title: "Matriz de Stock por Taller",
          description:
            "Visualiza y filtra la cantidad de cada producto en distintas sucursales. Mueve mercadería de un taller a otro fácilmente.",
        },
        {
          icon: <Bell className="text-red-600" size={24} />,
          iconContainerClassName: "bg-red-50",
          title: "Alertas de reposición",
          description:
            "Identifica rápidamente los repuestos que están por agotarse para hacer pedidos a tiempo y nunca dejar un arreglo a la mitad.",
        },
        {
          icon: <Package className="text-green-600" size={24} />,
          iconContainerClassName: "bg-green-50",
          title: "Control de Precios Automático",
          description:
            "Configura tu margen de ganancia. Cuando actualices el costo de compra, el precio de venta se ajustará automáticamente.",
        },
      ]}
      mockupContent={mockupContent}
      mockupGradientClassName="from-accent/20 to-blue-500/20 -rotate-3"
      loomVideoUrl="https://www.loom.com/embed/placeholder"
    />
  );
}
