export const BUSINESS_INFO = {
  name: "PIX Cabina Fotográfica",
  shortName: "PIX",
  slogan: "Hacemos tu evento INOLVIDABLE",
  phone: "5513403023",
  phoneFormatted: "55 1340 3023",
  whatsappUrl: "https://wa.me/525513403023",
  location: "Tulancingo de Bravo, Hidalgo",
  coverage: [
    "Tulancingo de Bravo",
    "Santiago Tulantepec",
    "Cuautepec de Hinojosa",
    "Acatlán",
    "Singuilucan",
    "Pachuca y alrededores"
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  }
};

export const PACKAGES = [
  {
    id: "clasico",
    name: "Paquete Clásico",
    hours: "2 Horas de Servicio",
    price: "$3,200",
    priceNumber: 3200,
    popular: false,
    badge: "Ideal para eventos pequeños",
    features: [
      "Cabina inflable con iluminación LED",
      "Fotos impresas al instante en tiras (2x6 pulgadas)",
      "Impresiones ilimitadas durante el servicio",
      "Diseño de tira personalizado con tu nombre y fecha",
      "Mesa con divertidos accesorios y props (lentes, sombreros, letreros)",
      "Operador calificado durante todo el evento",
      "Entrega digital de todas las fotos tomadas (vía enlace/QR)"
    ],
    ctaText: "Apartar Paquete Clásico"
  },
  {
    id: "fiesta",
    name: "Paquete Fiesta",
    hours: "3 Horas de Servicio",
    price: "$4,400",
    priceNumber: 4400,
    popular: true,
    badge: "⭐ El Más Solicitado",
    features: [
      "Todo lo incluido en el Paquete Clásico",
      "3 Horas continuas de pura diversión",
      "Diseño de plantilla premium a juego con tu invitación",
      "Alfombra y postes dorados con cordón rojo estilo VIP",
      "Libro de firmas / Álbum de recuerdos para pegar tiras y dedicatorias",
      "Props temáticos especiales según tu tipo de evento",
      "Galería digital privada en alta resolución"
    ],
    ctaText: "Apartar Paquete Fiesta"
  },
  {
    id: "vip",
    name: "Paquete VIP Todo Incluido",
    hours: "4 Horas de Servicio",
    price: "$5,600",
    priceNumber: 5600,
    popular: false,
    badge: "Experiencia Total",
    features: [
      "Todo lo incluido en el Paquete Fiesta",
      "4 Horas completas de servicio",
      "Impresión de tira para cada invitado que salga en la foto",
      "Álbum de recuerdos de lujo con plumas metálicas y pegatinas",
      "2 Operadores para agilizar filas y cuidar la experiencia",
      "Letrero neón de ambientación para la cabina",
      "Memoria USB de regalo con todas las fotos en máxima resolución"
    ],
    ctaText: "Apartar Paquete VIP"
  }
];

export const EVENT_TYPES = [
  { id: "boda", name: "Boda / Matrimonio", icon: "💍" },
  { id: "xv", name: "XV Años / Sweet 16", icon: "👑" },
  { id: "graduacion", name: "Graduación Escolar / Universitaria", icon: "🎓" },
  { id: "cumpleanos", name: "Cumpleaños / Fiestas", icon: "🎉" },
  { id: "corporativo", name: "Evento Empresarial / Fin de Año", icon: "🏢" },
  { id: "bautizo", name: "Bautizo / Primera Comunión", icon: "🕊️" }
];

export const ADDONS = [
  {
    id: "guestbook",
    name: "Álbum de Recuerdos & Firmas",
    description: "Libro artesanal donde los invitados pegan su foto y escriben dedicatorias.",
    price: 450
  },
  {
    id: "vip_carpet",
    name: "Montaje VIP (Alfombra + Postes Dorados)",
    description: "Acceso estilo alfombra roja con unifilas doradas y cordón rojo terciopelo.",
    price: 350
  },
  {
    id: "extra_hour",
    name: "Hora Adicional de Cabina",
    description: "Extiende la diversión con fotos ilimitadas por una hora extra.",
    price: 1100
  },
  {
    id: "neon_sign",
    name: "Letrero Neón Decorativo",
    description: "Iluminación neón 'Better Together', 'Mis XV' o 'Happy Birthday'.",
    price: 300
  }
];

export const FAQS = [
  {
    question: "¿Con cuánta anticipación debo apartar mi fecha?",
    answer: "Recomendamos apartar con al menos 2 a 4 semanas de anticipación, especialmente para fines de semana en temporada alta (bodas, graduaciones y fin de año). Puedes apartar tu fecha con un anticipo accesible vía transferencia o efectivo."
  },
  {
    question: "¿Qué requisitos técnicos y espacio necesita la cabina inflable?",
    answer: "La cabina inflable mide aproximadamente 2.5m x 2.5m x 2.5m. Solo necesitamos un espacio plano de al menos 3x3 metros y una toma de corriente eléctrica estándar (110V) a menos de 10 metros."
  },
  {
    question: "¿Las fotos impresas son realmente ilimitadas?",
    answer: "¡Sí, totalmente! Durante todo el tiempo contratado tus invitados pueden pasar todas las veces que quieran y llevarse sus tiras de fotos impresas en papel fotográfico de alta calidad y secado instantáneo."
  },
  {
    question: "¿Cómo se personaliza el diseño de las tiras de fotos?",
    answer: "Nosotros diseñamos el marco de las fotos de acuerdo a los colores, nombres, fecha, logotipo o temática de tu evento. Te enviamos propuestas previas por WhatsApp para tu visto bueno antes del día del evento."
  },
  {
    question: "¿Cubren eventos fuera de Tulancingo?",
    answer: "¡Sí! Cubrimos todo Tulancingo de Bravo, Santiago Tulantepec, Cuautepec, Singuilucan, Acatlán, Pachuca y municipios cercanos en Hidalgo. Para zonas más alejadas se aplica un costo mínimo de viáticos."
  },
  {
    question: "¿Cuándo y cómo recibo las fotos en digital?",
    answer: "Al finalizar el evento te compartimos un enlace digital privado con todas las fotos individuales y tiras completas en alta definición para que las descargues y compartas en tus redes."
  }
];

export const TESTIMONIALS = [
  {
    name: "Mariana & Carlos",
    event: "Boda en Tulancingo",
    comment: "¡La mejor decisión para nuestra boda! La cabina inflable con luces se veía increíble en el jardín y las tiras de fotos salieron de súper buena calidad. A todos los invitados les encantó el álbum de firmas.",
    rating: 5
  },
  {
    name: "Familia Gómez",
    event: "XV Años de Valeria",
    comment: "El diseño de la tira quedó idéntico a las invitaciones de mi hija. Los chavos no pararon de tomarse fotos con los props y sombreros. Muy puntuales y excelente atención.",
    rating: 5
  },
  {
    name: "Lic. Roberto Soto",
    event: "Cena de Fin de Año Empresarial",
    comment: "Excelente servicio para nuestra posada corporativa. Pusieron el logo de nuestra empresa en cada tira y el proceso fue muy rápido y profesional.",
    rating: 5
  }
];
