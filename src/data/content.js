export const ZONES = [
  { name: "Tulancingo de Bravo", travelIncluded: true },
  { name: "Santiago Tulantepec", travelIncluded: true },
  { name: "Cuautepec de Hinojosa", travelIncluded: false },
  { name: "Acatlán", travelIncluded: false },
  { name: "Singuilucan", travelIncluded: false },
  { name: "Pachuca y alrededores", travelIncluded: false },
];

export const QUOTER_ZONES = [
  ...ZONES,
  { name: "Otro municipio", travelIncluded: false },
];

export const BUSINESS_INFO = {
  name: "PIX Cabina Fotográfica",
  shortName: "PIX",
  slogan: "Hacemos tu evento INOLVIDABLE",
  phone: "5513403023",
  phoneFormatted: "55 1340 3023",
  whatsappUrl: "https://wa.me/525513403023",
  location: "Tulancingo de Bravo, Hidalgo",
  coverage: ZONES.map((zone) => zone.name),
  socials: {
    instagram: "https://www.instagram.com/somospixmx",
    facebook: "https://www.facebook.com/somospixmx",
    tiktok: "https://www.tiktok.com/@somospixmx",
  },
};

export const SHARED_INCLUSIONS = [
  "Cabina inflable con luz LED",
  "Fotos impresas ilimitadas al instante (2 tiras por toma)",
  "Descarga digital por QR",
  "Diseño personalizado de la tira con el tema o nombres del evento",
  "Props y accesorios",
  "2 operadores durante el evento",
  "PLUS: USB de regalo con todas las fotos del evento",
];

export const EXTRA_HOUR = {
  id: "extra_hour",
  name: "Hora adicional",
  description: "Una hora más de cabina, con fotos impresas ilimitadas.",
  price: 1100,
};

export const ADDONS = [EXTRA_HOUR];

export const PACKAGES = [
  {
    id: "esencial",
    name: "Paquete Esencial",
    hours: 2,
    price: 3100,
    popular: false,
    summary: "Ideal para la recepción o el inicio del baile",
    ctaText: "Apartar Paquete Esencial",
  },
  {
    id: "celebracion",
    name: "Paquete Celebración",
    hours: 3,
    price: 3900,
    popular: true,
    badge: "El más pedido",
    summary: "Para que nadie se quede sin foto durante la fiesta",
    ctaText: "Apartar Paquete Celebración",
  },
];

export function formatMxn(amount) {
  return `$${Number(amount).toLocaleString("es-MX")}`;
}

export function travelStatusLabel(travelIncluded) {
  return travelIncluded ? "Traslado incluido" : "Traslado según ubicación";
}

export function quoteTotalLabel(amount, travelIncluded) {
  const price = formatMxn(amount);
  return travelIncluded ? `${price} MXN` : `${price} + traslado`;
}

export const EVENT_TYPES = [
  { id: "boda", name: "Boda / Matrimonio", icon: "💍" },
  { id: "xv", name: "XV Años / Sweet 16", icon: "👑" },
  { id: "graduacion", name: "Graduación Escolar / Universitaria", icon: "🎓" },
  { id: "cumpleanos", name: "Cumpleaños / Fiestas", icon: "🎉" },
  { id: "corporativo", name: "Evento Empresarial / Fin de Año", icon: "🏢" },
  { id: "bautizo", name: "Bautizo / Primera Comunión", icon: "🕊️" },
];

export const FAQS = [
  {
    question: "¿Con cuánta anticipación debo apartar mi fecha?",
    answer: "Recomendamos apartar con al menos 2 a 4 semanas de anticipación, especialmente para fines de semana en temporada alta (bodas, graduaciones y fin de año). Puedes apartar tu fecha con un anticipo accesible vía transferencia o efectivo.",
  },
  {
    question: "¿Qué requisitos técnicos y espacio necesita la cabina inflable?",
    answer: "La cabina inflable mide aproximadamente 2.5m x 2.5m x 2.5m. Solo necesitamos un espacio plano de al menos 3x3 metros y una toma de corriente eléctrica estándar (110V) a menos de 10 metros.",
  },
  {
    question: "¿Las fotos impresas son realmente ilimitadas?",
    answer: "¡Sí, totalmente! Durante todo el tiempo contratado tus invitados pueden pasar todas las veces que quieran. Cada toma imprime 2 tiras al instante, en papel fotográfico de alta calidad y secado inmediato.",
  },
  {
    question: "¿Cómo se personaliza el diseño de las tiras de fotos?",
    answer: "Nosotros diseñamos el marco de las fotos de acuerdo a los colores, nombres, fecha, logotipo o temática de tu evento. Te enviamos propuestas previas por WhatsApp para tu visto bueno antes del día del evento.",
  },
  {
    question: "¿Cobran traslado?",
    answer: "Dentro de Tulancingo y Santiago Tulantepec no. Fuera de ahí depende de la distancia y te lo confirmamos antes de apartar.",
  },
  {
    question: "¿Cuándo y cómo recibo las fotos en digital?",
    answer: "Durante el evento tus invitados descargan sus fotos con un código QR. Además, todos los paquetes incluyen un USB de regalo con todas las fotos del evento.",
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "booth",
    title: "Montaje en jardín de eventos",
    subtitle: "Cabina inflable iluminada con luz LED en Tulancingo",
    src: "/images/cabina-inflable.jpg",
    badge: "Montaje real",
  },
  {
    id: 2,
    category: "events",
    title: "Bodas con props",
    subtitle: "Novios y familia con sombreros, lentes y accesorios",
    src: "/images/evento-boda-novios-props.jpg",
    badge: "Boda",
  },
  {
    id: 3,
    category: "strips",
    title: "Tiras impresas al instante",
    subtitle: "Invitadas mostrando sus tiras impresas en el evento",
    src: "/images/evento-chicas-tiras.jpg",
    badge: "Tiras",
  },
  {
    id: 4,
    category: "booth",
    title: "Interior con luz LED",
    subtitle: "Espacio amplio con mesa de props y accesorios",
    src: "/images/evento-cabina-interior-led.jpg",
    badge: "Interior LED",
  },
  {
    id: 5,
    category: "events",
    title: "Props y accesorios",
    subtitle: "Sombreros, lentes y accesorios para que los invitados posen",
    src: "/images/evento-props-vaquero.jpg",
    badge: "Props",
  },
  {
    id: 6,
    category: "strips",
    title: "Recuerdos para cada invitado",
    subtitle: "Tiras con diseño personalizado del evento",
    src: "/images/evento-invitados-tiras.jpg",
    badge: "Tiras impresas",
  },
];

export const TRAVEL_PRICE_NOTE =
  "Precio para Tulancingo y Santiago Tulantepec. Para otros municipios, el traslado varía según la distancia; te lo confirmamos por WhatsApp junto con tu disponibilidad.";
