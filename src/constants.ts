import type { FeatureItem, StepItem, FAQItem } from "./types";

export const APP_NAME = "B2Car";

export const FEATURES: FeatureItem[] = [
  {
    id: "clients",
    title: "Gestión de Clientes",
    description:
      "Centraliza toda la información de tus clientes. Historial completo y acceso rápido a datos de contacto.",
    iconName: "Users",
    bullets: ["Base de datos unificada", "Historial de visitas"],
  },
  {
    id: "vehicles",
    title: "Flota y Vehículos",
    description:
      "Control total sobre los vehículos ingresados. Asocia dueños, carga fichas técnicas y fotos del estado.",
    iconName: "Car",
    bullets: ["Fichas técnicas", "Registro fotográfico"],
  },
  {
    id: "repairs",
    title: "Arreglos y Taller",
    description:
      "Seguimiento de reparaciones en tiempo real. Desde el presupuesto hasta la entrega final.",
    iconName: "Wrench",
    bullets: ["Estados de reparación", "Presupuestos PDF"],
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
