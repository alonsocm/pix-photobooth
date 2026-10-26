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
    id: 11,
    category: "booth",
    title: "Lista antes de que lleguen",
    subtitle: "El salón ya tiene su rincón",
    src: "/images/cabina-led-salon-frontal.jpg",
    alt: "Cabina de fotos inflable con luz LED, lista de frente en un salón de eventos en Tulancingo",
    objectPosition: "center top",
    badge: "Montaje real",
    width: 1200,
    height: 1600,
  },
  {
    id: 7,
    category: "booth",
    title: "Se ve desde la pista",
    subtitle: "La luz prendida, de lado",
    src: "/images/cabina-led-salon-lateral.jpg",
    alt: "Cabina de fotos inflable iluminada, vista de lado en un salón en Tulancingo",
    badge: "Salón",
    width: 1200,
    height: 1600,
  },
  {
    id: 9,
    category: "booth",
    title: "Elige con qué quieres salir",
    subtitle: "La mesa ya está puesta",
    src: "/images/cabina-interior-props-led.jpg",
    alt: "Mesa de sombreros, lentes y props dentro de la cabina de fotos Pix, con luz LED, en Tulancingo",
    badge: "Props",
    width: 1200,
    height: 1600,
  },
  {
    id: 12,
    category: "booth",
    title: "También funciona de día",
    subtitle: "Armada afuera, con los postes",
    src: "/images/cabina-dia-exterior.jpg",
    alt: "Cabina de fotos inflable Pix montada al aire libre de día, con postes, en Tulancingo",
    badge: "Exterior",
    width: 1200,
    height: 1600,
  },
  {
    id: 1,
    category: "booth",
    title: "Cuando cae el sol",
    subtitle: "El jardín se queda con esa luz",
    src: "/images/cabina-inflable.jpg",
    alt: "Cabina de fotos inflable con luz LED en un jardín de eventos al atardecer en Tulancingo",
    badge: "Montaje real",
    width: 1024,
    height: 768,
  },
  {
    id: 4,
    category: "booth",
    title: "Adentro cabe la fiesta",
    subtitle: "Espacio y luz para posar",
    src: "/images/evento-cabina-interior-led.jpg",
    alt: "Interior amplio e iluminado de la cabina de fotos inflable Pix en Tulancingo",
    badge: "Interior LED",
    width: 768,
    height: 1024,
  },
];

export const EVENT_PHOTOS = [
  {
    id: 10,
    category: "events",
    title: "La fila que valió la pena",
    subtitle: "Invitados formados frente a la cabina con luz LED",
    src: "/images/cabina-led-atardecer-invitados.jpg",
    alt: "Invitados formados frente a la cabina de fotos con luz LED al atardecer en Tulancingo",
    badge: "Evento real",
    width: 1200,
    height: 1600,
  },
  {
    id: 13,
    category: "events",
    title: "La foto que nadie quiso perderse",
    subtitle: "Vestido, sombrero rosa y máscara de unicornio en la cabina",
    src: "/images/quinceanera-amigas-cabina.jpg",
    alt: "Quinceañera con sus amigas y props en la cabina de fotos Pix en Tulancingo",
    frameClass: "aspect-[3/2] self-start sm:aspect-[4/3] sm:self-auto",
    badge: "XV años",
    width: 1600,
    height: 1067,
  },
  {
    id: 8,
    category: "events",
    title: "Entran y ya están posando",
    subtitle: "Entrada de la cabina con marco tipo Instagram y props",
    src: "/images/cabina-invitados-instagram.jpg",
    alt: "Invitados con props dentro de la cabina de fotos Pix, frente al marco de la foto, en Tulancingo",
    badge: "Invitados",
    width: 1200,
    height: 1600,
  },
  {
    id: 2,
    category: "events",
    title: "Los novios se animaron",
    subtitle: "Novios y familia con sombreros, lentes y accesorios",
    src: "/images/evento-boda-novios-props.jpg",
    alt: "Novios con sombreros y lentes en la cabina de fotos durante una boda en Tulancingo",
    badge: "Boda",
    width: 768,
    height: 1024,
  },
  {
    id: 3,
    category: "strips",
    title: "Ya no la quieren soltar",
    subtitle: "Invitadas mostrando sus tiras impresas en el evento",
    src: "/images/evento-chicas-tiras.jpg",
    alt: "Invitadas con sus tiras recién impresas junto a la cabina de fotos en Tulancingo",
    badge: "Tiras",
    width: 768,
    height: 1024,
  },
  {
    id: 6,
    category: "strips",
    title: "Cada quien se lleva la suya",
    subtitle: "Tiras con diseño personalizado del evento",
    src: "/images/evento-invitados-tiras.jpg",
    alt: "Invitados mostrando las tiras que se llevaron de la cabina de fotos Pix en Tulancingo",
    badge: "Tiras impresas",
    width: 768,
    height: 1024,
  },
  {
    id: 5,
    category: "events",
    title: "El sombrero de vaquero ganó",
    subtitle: "Sombreros, lentes y accesorios para que los invitados posen",
    src: "/images/evento-props-vaquero.jpg",
    alt: "Invitados con sombrero de vaquero y props posando en la cabina de fotos Pix",
    badge: "Props",
    width: 767,
    height: 1024,
  },
  {
    id: 14,
    category: "events",
    title: "Hoy sí hay función estelar",
    subtitle: "Invitados con máscaras de lucha libre",
    src: "/images/invitados-luchadores-cabina.jpg",
    alt: "Invitados con máscaras de luchador en la cabina inflable Pix en Tulancingo",
    badge: "Lucha libre",
    width: 1600,
    height: 1067,
  },
  {
    id: 15,
    category: "events",
    title: "Cupo lleno y nadie se queja",
    subtitle: "Invitados con sombreros, lentes y accesorios en la cabina",
    src: "/images/grupo-invitados-props-cabina.jpg",
    alt: "Grupo de invitados con props en la cabina inflable Pix en Tulancingo",
    badge: "Invitados",
    width: 1200,
    height: 1600,
  },
  {
    id: 16,
    category: "events",
    title: "El disfraz se armó solo",
    subtitle: "Invitados con sombrero de Mario, sombrero de copa y lentes",
    src: "/images/invitados-sombreros-props-cabina.jpg",
    alt: "Invitados con sombreros y lentes de props en la cabina inflable Pix en Tulancingo",
    objectPosition: "center top",
    badge: "Props",
    width: 1200,
    height: 1600,
  },
  {
    id: 17,
    category: "events",
    title: "De gala, pero con lentes",
    subtitle: "Invitadas con vestido y lentes azules en la cabina",
    src: "/images/invitadas-lentes-cabina.jpg",
    alt: "Dos invitadas de vestido con lentes azules en la cabina de fotos Pix en Tulancingo",
    badge: "Invitadas",
    width: 1200,
    height: 1600,
  },
  {
    id: 18,
    category: "events",
    title: "Cuando el caballo también quiere salir",
    subtitle: "Máscara de caballo y prop de rata en la cabina",
    src: "/images/pareja-mascara-caballo-cabina.jpg",
    alt: "Pareja con máscara de caballo y prop en la cabina inflable Pix en Tulancingo",
    objectPosition: "center top",
    badge: "Pareja",
    width: 900,
    height: 1600,
  },
  {
    id: 19,
    category: "events",
    title: "La seña de paz salió sola",
    subtitle: "Lentes de espiral y lentes rosas en la cabina",
    src: "/images/pareja-lentes-espiral-cabina.jpg",
    alt: "Pareja con lentes de espiral y lentes rosas haciendo la seña de paz en la cabina de fotos Pix en Tulancingo",
    badge: "Pareja",
    width: 1600,
    height: 1067,
  },
  {
    id: 20,
    category: "events",
    title: "El abrazo del unicornio",
    subtitle: "Máscaras de caballo y unicornio en la cabina",
    src: "/images/amigos-mascaras-caballo-unicornio.jpg",
    alt: "Amigos con máscaras de caballo y unicornio en la cabina inflable Pix en Tulancingo",
    badge: "Amigos",
    width: 1421,
    height: 947,
  },
  {
    id: 21,
    category: "events",
    title: "Se prestaron el disfraz",
    subtitle: "Sombrero rosa y orejas de Mickey en la cabina",
    src: "/images/amigas-sombrero-orejas-cabina.jpg",
    alt: "Amigas con sombrero y orejas de props en la cabina inflable Pix en Tulancingo",
    badge: "Amigas",
    width: 1292,
    height: 861,
  },
  {
    id: 22,
    category: "events",
    title: "Las dos se escondieron bien",
    subtitle: "Máscaras de unicornio y caballo en la cabina",
    src: "/images/amigas-mascaras-unicornio-caballo.jpg",
    alt: "Amigas con máscaras de unicornio y caballo en la cabina inflable Pix en Tulancingo",
    badge: "Amigas",
    width: 1400,
    height: 933,
  },
];

export const TRAVEL_PRICE_NOTE =
  "Precio para Tulancingo y Santiago Tulantepec. Para otros municipios, el traslado varía según la distancia; te lo confirmamos por WhatsApp junto con tu disponibilidad.";
