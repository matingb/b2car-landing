import type { FeatureItem, StepItem, FAQItem } from "./types";

export const APP_NAME = "B2Car";

export const FEATURES: FeatureItem[] = [
  {
    id: "arreglos",
    title: "Gestión de Arreglos",
    description:
      "Supervisa el ciclo de vida de cada reparación. Mantén a tu equipo sincronizado y a tus clientes informados.",
    iconName: "Wrench",
    bullets: [
      "Historial de reparaciones por cliente",
      "Generación de presupuestos en PDF",
      "Envío de comprobantes por WhatsApp",
    ],
  },
  {
    id: "productos",
    title: "Catálogo y Stock",
    description:
      "Maneja repuestos e insumos sin fricción. Evita quiebres de stock y controla múltiples talleres.",
    iconName: "Package", 
    bullets: [
      "Matriz de stock multitaller",
      "Alertas automáticas de bajo stock",
      "Búsqueda rápida por código o marca",
    ],
  },
  {
    id: "finanzas",
    title: "Finanzas y Facturación",
    description:
      "El pulso económico de tu negocio en tiempo real. Analiza ingresos, gastos y márgenes.",
    iconName: "TrendingUp",
    bullets: [
      "Control de flujo de caja",
      "Proyecciones de crecimiento anual",
      "Exportación ágil de balances",
    ],
  },
];

export const STEPS: StepItem[] = [
  {
    id: 1,
    title: "Cargar Clientes",
    description:
      "Da de alta al cliente en segundos. Escaneá documentos o ingresá datos manualmente con autocompletado inteligente.",
  },
  {
    id: 2,
    title: "Asociar Vehículos",
    description:
      "Vinculá uno o más vehículos al perfil del cliente. Registrá marca, modelo, año y patente al instante.",
  },
  {
    id: 3,
    title: "Registrar Arreglos",
    description:
      "Creá órdenes de trabajo, asigná mecánicos y actualizá el estado del servicio para mantener al cliente informado.",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "¿Es seguro guardar los datos de mis clientes?",
    answer:
      "Absolutamente. Utilizamos encriptación en todos nuestros datos y copias de seguridad diarias automáticas para garantizar que tu información esté siempre protegida.",
  },
  {
    id: "f2",
    question: "¿Funciona en celulares y tablets?",
    answer:
      "Sí, B2Car es una PWA (Progressive Web App). Se adapta a cualquier pantalla y puedes instalarla en tu dispositivo para un acceso rápido y fluido.",
  },
  {
    id: "f3",
    question: "¿Tengo límite de clientes a registrar?",
    answer:
      "Con B2Car, no hay límites en la cantidad de clientes, vehículos o reparaciones que puedes gestionar. Gestiona tu taller sin preocupaciones.",
  },
  {
    id: "f5",
    question: "¿Cómo funciona el soporte técnico?",
    answer:
      "Para cualquier queja, sugerencia o duda técnica, podés contactarnos vía email o a través del formulario en la sección de contacto. Nuestro equipo responde en menos de 24 horas hábiles.",
  },
];
