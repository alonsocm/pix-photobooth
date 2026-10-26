export function normalizePath(path = "/") {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  const stripped = withSlash.replace(/\/+$/, "");
  return stripped === "" ? "/" : stripped;
}

const PHOTOS = {
  novios: {
    src: "/images/evento-boda-novios-props.jpg",
    width: 768,
    height: 1024,
    alt: "Novios con sombreros y lentes en la cabina de fotos durante una boda",
  },
  tirasChicas: {
    src: "/images/evento-chicas-tiras.jpg",
    width: 768,
    height: 1024,
    alt: "Invitadas con las tiras recién impresas de la cabina de fotos",
  },
  salonFrontal: {
    src: "/images/cabina-led-salon-frontal.jpg",
    width: 1200,
    height: 1600,
    objectPosition: "center top",
    alt: "Cabina de fotos inflable con luz LED, lista de frente en un salón",
  },
  quince: {
    src: "/images/quinceanera-amigas-cabina.jpg",
    width: 1600,
    height: 1067,
    alt: "Quinceañera con sus amigas y props dentro de la cabina de fotos",
  },
  orejas: {
    src: "/images/amigas-sombrero-orejas-cabina.jpg",
    width: 1292,
    height: 861,
    alt: "Amigas con sombrero y orejas de props en la cabina de fotos",
  },
  mascarasAmigas: {
    src: "/images/amigas-mascaras-unicornio-caballo.jpg",
    width: 1400,
    height: 933,
    alt: "Amigas con máscaras de unicornio y caballo en la cabina de fotos",
  },
  grupo: {
    src: "/images/grupo-invitados-props-cabina.jpg",
    width: 1200,
    height: 1600,
    alt: "Grupo de invitados con sombreros y lentes dentro de la cabina de fotos",
  },
  tirasGrupo: {
    src: "/images/evento-invitados-tiras.jpg",
    width: 768,
    height: 1024,
    alt: "Invitados mostrando las tiras impresas con el diseño de su evento",
  },
  mesaProps: {
    src: "/images/cabina-interior-props-led.jpg",
    width: 1200,
    height: 1600,
    alt: "Mesa de sombreros, lentes y props dentro de la cabina, con luz LED",
  },
  lentesGala: {
    src: "/images/invitadas-lentes-cabina.jpg",
    width: 1200,
    height: 1600,
    alt: "Invitadas de vestido con lentes de props en la cabina de fotos",
  },
  salonLateral: {
    src: "/images/cabina-led-salon-lateral.jpg",
    width: 1200,
    height: 1600,
    alt: "Cabina de fotos inflable iluminada, vista de lado en un salón",
  },
  interior: {
    src: "/images/evento-cabina-interior-led.jpg",
    width: 768,
    height: 1024,
    alt: "Interior amplio e iluminado de la cabina de fotos inflable",
  },
  jardin: {
    src: "/images/cabina-inflable.jpg",
    width: 1024,
    height: 768,
    alt: "Cabina de fotos inflable con luz LED en un jardín al atardecer",
  },
  dia: {
    src: "/images/cabina-dia-exterior.jpg",
    width: 1200,
    height: 1600,
    alt: "Cabina de fotos inflable montada al aire libre de día, con postes",
  },
  fila: {
    src: "/images/cabina-led-atardecer-invitados.jpg",
    width: 1200,
    height: 1600,
    alt: "Invitados formados frente a la cabina de fotos con luz LED al atardecer",
  },
  vaquero: {
    src: "/images/evento-props-vaquero.jpg",
    width: 767,
    height: 1024,
    alt: "Invitados con sombrero de vaquero y props en la cabina de fotos",
  },
  lentesPareja: {
    src: "/images/pareja-lentes-espiral-cabina.jpg",
    width: 1600,
    height: 1067,
    alt: "Pareja con lentes de props haciendo la seña de paz en la cabina",
  },
  sombreros: {
    src: "/images/invitados-sombreros-props-cabina.jpg",
    width: 1200,
    height: 1600,
    objectPosition: "center top",
    alt: "Invitados con sombreros y lentes de props en la cabina inflable",
  },
  instagram: {
    src: "/images/cabina-invitados-instagram.jpg",
    width: 1200,
    height: 1600,
    alt: "Invitados con props dentro de la cabina, frente al marco de la foto",
  },
  caballo: {
    src: "/images/pareja-mascara-caballo-cabina.jpg",
    width: 900,
    height: 1600,
    objectPosition: "center top",
    alt: "Pareja con máscara de caballo y un prop en la cabina inflable",
  },
};

export const LANDINGS = [
  {
    path: "/cabina-de-fotos-bodas-tulancingo",
    group: "eventos",
    navLabel: "Bodas",
    title: "Cabina de fotos para bodas en Tulancingo | PIX",
    description:
      "Cabina inflable con luz LED para tu boda en Tulancingo. Tiras ilimitadas, marco con sus nombres y 2 operadores. Paquetes desde $3,100 MXN.",
    h1: "Cabina de fotos para bodas en Tulancingo",
    eyebrow: "Bodas en Tulancingo",
    lead: "Un rincón de la recepción donde los invitados se llevan dos tiras impresas y ustedes no tienen que operar nada.",
    whyTitle: "Por qué funciona en la recepción",
    why: [
      "En la boda hay invitados que no se quedan toda la noche en la pista y aun así quieren un recuerdo para llevarse. La cabina inflable, con luz LED, se queda en un rincón del salón. Dos operadores arman la fila, acomodan a la gente y entregan las tiras mientras ustedes están con sus invitados.",
      "El marco de la tira lleva sus nombres, la fecha o el tema de la boda. Se los mandamos por WhatsApp para el visto bueno antes del día. Llegamos con anticipación para dejar la cabina lista antes de que lleguen los primeros invitados.",
    ],
    includedLead:
      "El servicio de la boda es el mismo en los dos paquetes. Cambia cuántas horas se queda la cabina en el salón.",
    packagesLead:
      "Para una recepción en Tulancingo, el traslado va incluido. Si la fila sigue después de la cena, se puede sumar una hora.",
    travelNote:
      "En Tulancingo el traslado va incluido. Si el salón está en otro lugar cercano, lo revisamos por WhatsApp antes de apartar.",
    photos: [PHOTOS.novios, PHOTOS.salonFrontal, PHOTOS.tirasChicas],
    whatsappMessage:
      "¡Hola PIX! Quiero cotizar la cabina de fotos para una boda en Tulancingo.",
    cta: "Cotizar mi boda por WhatsApp",
    faqs: [
      {
        question: "¿La cabina cabe en el salón de la boda?",
        answer:
          "La cabina inflable mide aproximadamente 2.5 m x 2.5 m x 2.5 m. Pedimos un espacio plano de al menos 3x3 metros y una toma de corriente de 110V a menos de 10 metros.",
      },
      {
        question: "¿Pueden poner nuestros nombres en la tira?",
        answer:
          "Sí. Diseñamos el marco con los nombres, la fecha, los colores o el tema de la boda y te lo enviamos por WhatsApp para tu visto bueno antes del evento.",
      },
      {
        question: "¿La cabina está lista antes de que lleguen los invitados?",
        answer:
          "Sí. Llegamos con anticipación para tener todo listo antes de que lleguen tus primeros invitados. La instalación queda lista antes del inicio de la fiesta.",
      },
      {
        question: "¿El traslado en Tulancingo tiene costo?",
        answer:
          "No. Dentro de Tulancingo y Santiago Tulantepec el traslado va incluido. Fuera de ahí depende de la ubicación y te lo confirmamos por WhatsApp, sin una tarifa fija.",
      },
    ],
  },
  {
    path: "/cabina-de-fotos-xv-anos-tulancingo",
    group: "eventos",
    navLabel: "XV años",
    title: "Cabina de fotos para XV años en Tulancingo | PIX",
    description:
      "Cabina de fotos para XV años en Tulancingo: props para todas las edades, tiras ilimitadas y diseño de la tira. Desde $3,100 MXN, traslado incluido.",
    h1: "Cabina de fotos para XV años en Tulancingo",
    eyebrow: "XV años en Tulancingo",
    lead: "La quinceañera, su corte y las mesas de invitados tienen un lugar para posar juntos y llevarse la tira.",
    whyTitle: "Para la quinceañera y toda la mesa",
    why: [
      "Los XV años juntan a la quinceañera, su corte y mesas de invitados de edades muy distintas. La cabina les da un lugar para posar juntos, con sombreros, lentes, máscaras, diademas y muchos props más, para que nadie se quede solo mirando.",
      "Las impresiones son ilimitadas durante las horas contratadas, así que el grupo puede volver después del vals o de la cena. Cada toma sale en dos tiras. Diseñamos el marco con su nombre, la fecha o los colores de la fiesta y te lo mandamos por WhatsApp antes del evento.",
    ],
    includedLead:
      "En un XV la cabina se usa por tandas: primero la festejada y sus amigas, después el resto de los invitados. Esto es lo que queda incluido.",
    packagesLead:
      "El paquete de 2 horas cubre el rato más lleno. El de 3 horas deja que la gente vuelva más tarde, cuando ya se soltó la fiesta.",
    travelNote:
      "En Tulancingo el traslado va incluido. Llegamos con anticipación para armar la cabina antes de que entren los invitados.",
    photos: [PHOTOS.quince, PHOTOS.orejas, PHOTOS.mascarasAmigas],
    whatsappMessage:
      "¡Hola PIX! Quiero cotizar la cabina de fotos para unos XV años en Tulancingo.",
    cta: "Cotizar los XV por WhatsApp",
    faqs: [
      {
        question: "¿Los props sirven para invitados de distintas edades?",
        answer:
          "Sí. Llevamos sombreros, lentes, máscaras, diademas y muchos props más para todas las edades.",
      },
      {
        question: "¿Las impresiones tienen límite durante el XV?",
        answer:
          "No, durante el tiempo contratado. Tus invitados pueden pasar las veces que quieran y cada toma imprime 2 tiras al instante.",
      },
      {
        question: "¿Con cuánta anticipación aparto un XV en fin de semana?",
        answer:
          "Recomendamos apartar con al menos 2 a 4 semanas, sobre todo si es en fin de semana. El anticipo es de $500 MXN, por transferencia o efectivo.",
      },
      {
        question: "¿Se llevan la foto impresa y también la digital?",
        answer:
          "Sí. Se llevan las 2 tiras impresas y, si quieren, descargan esa foto con el QR. El paquete también incluye un USB con todas las fotos del evento.",
      },
    ],
  },
  {
    path: "/cabina-de-fotos-posadas-y-eventos-empresariales-tulancingo",
    group: "eventos",
    navLabel: "Posadas y empresas",
    title: "Cabina para posadas y empresas en Tulancingo | PIX",
    description:
      "Cabina para posadas y eventos de empresa en Tulancingo. Marco con logotipo, fotos ilimitadas y 2 operadores. Paquetes de 2 y 3 horas.",
    h1: "Cabina de fotos para posadas y eventos empresariales en Tulancingo",
    eyebrow: "Posadas y eventos de empresa",
    lead: "Una fila corta, un marco con el logotipo o el tema de la posada, y tiras que la gente se lleva al terminar.",
    whyTitle: "Para la posada o el cierre de año",
    why: [
      "Una posada o un cierre de año junta a gente que no siempre convive. La cabina, con props y dos operadores, les da una excusa fácil para formarse, posar y llevarse algo impreso. En un evento de empresa, el marco puede llevar el logotipo, el nombre del equipo o la fecha.",
      "No hace falta que la cabina dure toda la noche. El paquete de 2 horas cubre el rato de más movimiento y el de 3 horas deja margen si la fila se alarga. Llegamos con anticipación para tener el montaje listo antes de que empiece la reunión.",
    ],
    includedLead:
      "En una posada o un evento de empresa el servicio es el mismo: la cabina, las impresiones, el diseño de la tira y quien la opera.",
    packagesLead:
      "Los dos paquetes incluyen lo mismo. Eliges 2 o 3 horas según qué tanto rato quieres la cabina abierta. La hora de más se cotiza aparte.",
    travelNote:
      "En Tulancingo el traslado va incluido. Atendemos todos los días, de 9:00 a 22:00.",
    photos: [PHOTOS.grupo, PHOTOS.tirasGrupo, PHOTOS.mesaProps],
    whatsappMessage:
      "¡Hola PIX! Quiero cotizar la cabina de fotos para una posada o un evento empresarial en Tulancingo.",
    cta: "Cotizar la posada o el evento",
    faqs: [
      {
        question: "¿El marco puede llevar el logotipo de la empresa?",
        answer:
          "Sí. Lo diseñamos con el logotipo, el nombre del equipo, la fecha o la temática de la posada, y te mandamos la propuesta por WhatsApp antes del evento.",
      },
      {
        question: "¿Cuántas horas convienen?",
        answer:
          "El paquete Esencial son 2 horas y el Celebración son 3. Si la fila sigue, la hora adicional cuesta $1,100 MXN. Los dos paquetes incluyen el mismo servicio; cambia la duración.",
      },
      {
        question: "¿Atienden por la noche?",
        answer:
          "Sí. El horario de atención es todos los días, de 9:00 a 22:00. Llegamos con anticipación para dejar la cabina lista antes del inicio.",
      },
      {
        question: "¿El traslado a un salón en Tulancingo va incluido?",
        answer:
          "Sí. En Tulancingo y en Santiago Tulantepec el traslado está incluido. Si el evento es en otro lugar cercano, lo revisamos por WhatsApp y el traslado no tiene una tarifa fija.",
      },
    ],
  },
  {
    path: "/cabina-de-fotos-graduaciones-tulancingo",
    group: "eventos",
    navLabel: "Graduaciones",
    title: "Cabina de fotos para graduaciones en Tulancingo | PIX",
    description:
      "Cabina de fotos para graduaciones en Tulancingo. Tira con el nombre de la generación, impresiones ilimitadas y USB de regalo. Desde $3,100 MXN.",
    h1: "Cabina de fotos para graduaciones en Tulancingo",
    eyebrow: "Graduaciones en Tulancingo",
    lead: "La foto del grupo y la de cada quien, impresa en el momento, con el nombre de la generación en la tira.",
    whyTitle: "Para la generación y las familias",
    why: [
      "La graduación se llena de vestidos, familias y compañeros que quieren la foto del grupo y también la de cada quien. En la cabina caben las dos cosas: se ponen los lentes o el sombrero, salen las tiras y cada invitado se lleva la suya.",
      "El diseño puede llevar el nombre de la generación, la escuela o la fecha. En temporada de graduaciones las fechas se apartan rápido, así que conviene escribirnos con al menos 2 a 4 semanas. El USB de regalo se queda con todas las fotos del evento, además de la descarga por QR de esa noche.",
    ],
    includedLead:
      "Lo que se entrega en una graduación es el mismo servicio de la cabina. La tira se arma con los datos de esa generación.",
    packagesLead:
      "Si el grupo es grande, las 3 horas dejan más tiempo de fila. Las impresiones siguen siendo ilimitadas dentro de las horas contratadas.",
    travelNote:
      "En Tulancingo el traslado va incluido. Llegamos con anticipación para tener la cabina lista antes del inicio.",
    photos: [PHOTOS.lentesGala, PHOTOS.salonLateral, PHOTOS.interior],
    whatsappMessage:
      "¡Hola PIX! Quiero cotizar la cabina de fotos para una graduación en Tulancingo.",
    cta: "Cotizar la graduación por WhatsApp",
    faqs: [
      {
        question: "¿La tira puede decir el nombre de la generación?",
        answer:
          "Sí. Usamos el nombre de la generación, la escuela, la fecha o los colores que nos pidas, y te lo confirmamos por WhatsApp antes del evento.",
      },
      {
        question: "¿Alcanza el tiempo para todo el grupo?",
        answer:
          "Durante las horas contratadas las impresiones son ilimitadas y cada toma da 2 tiras. El paquete de 3 horas deja más margen que el de 2. Si se ocupa más tiempo, la hora adicional cuesta $1,100 MXN.",
      },
      {
        question: "¿Hay que apartar con tiempo?",
        answer:
          "Sí. En temporada de graduaciones recomendamos apartar con al menos 2 a 4 semanas, sobre todo en fin de semana. El anticipo es de $500 MXN, por transferencia o efectivo.",
      },
      {
        question: "¿Qué espacio necesitan en el lugar?",
        answer:
          "Un área plana de al menos 3x3 metros y una toma de 110V a menos de 10 metros. La cabina inflable mide aproximadamente 2.5 m x 2.5 m x 2.5 m.",
      },
    ],
  },
  {
    path: "/renta-cabina-de-fotos-santiago-tulantepec",
    group: "zonas",
    navLabel: "Santiago Tulantepec",
    title: "Renta de cabina de fotos en Santiago Tulantepec | PIX",
    description:
      "Renta de cabina de fotos en Santiago Tulantepec con traslado incluido. Luz LED, tiras ilimitadas y 2 operadores. Paquetes desde $3,100 MXN.",
    h1: "Renta de cabina de fotos en Santiago Tulantepec",
    eyebrow: "Santiago Tulantepec",
    lead: "El mismo servicio que en Tulancingo, con el traslado incluido si tu evento es en Santiago Tulantepec.",
    whyTitle: "Llevamos la cabina a tu evento en Santiago",
    why: [
      "Si tu evento es en Santiago Tulantepec, la renta incluye la misma cabina inflable con luz LED, fotos ilimitadas, tira personalizada, props y dos operadores. El traslado dentro de Santiago Tulantepec va incluido, igual que en Tulancingo.",
      "Nos dices el salón, el jardín o la casa, y la fecha. Llegamos con anticipación para armar la cabina antes de que lleguen tus invitados. Si el lugar está en otro punto cercano, lo revisamos contigo por WhatsApp antes de apartar.",
    ],
    includedLead:
      "Rentar la cabina en Santiago Tulantepec no cambia lo que incluye el servicio. Cambia solo la dirección a la que llegamos.",
    packagesLead:
      "Los precios de abajo ya incluyen el traslado en Santiago Tulantepec. El anticipo para dejar la fecha es de $500 MXN.",
    travelNote:
      "En Santiago Tulantepec y en Tulancingo el traslado va incluido. En Acatlán, Cuautepec u otro lugar cercano, el traslado se confirma por WhatsApp y no tiene tarifa fija.",
    photos: [PHOTOS.jardin, PHOTOS.dia, PHOTOS.fila],
    whatsappMessage:
      "¡Hola PIX! Quiero cotizar la renta de cabina de fotos para un evento en Santiago Tulantepec.",
    cta: "Cotizar en Santiago Tulantepec",
    faqs: [
      {
        question: "¿El traslado a Santiago Tulantepec está incluido?",
        answer:
          "Sí. En Santiago Tulantepec y en Tulancingo el traslado va incluido en el paquete. En Acatlán, Cuautepec u otro lugar cercano depende de la ubicación y te lo confirmamos por WhatsApp.",
      },
      {
        question: "¿Es el mismo servicio que en Tulancingo?",
        answer:
          "Sí. La misma cabina inflable con luz LED, fotos impresas ilimitadas (2 tiras por toma), descarga por QR, diseño de la tira, props y 2 operadores, más el USB con todas las fotos.",
      },
      {
        question: "¿Cuánto cuestan los paquetes?",
        answer:
          "Esencial son 2 horas por $3,100 MXN. Celebración son 3 horas por $3,900 MXN. La hora adicional cuesta $1,100 MXN. En Santiago Tulantepec esos precios ya incluyen el traslado.",
      },
      {
        question: "¿Cómo aparto la fecha?",
        answer:
          "Por WhatsApp, con la fecha y la dirección del evento. Recomendamos escribir con al menos 2 a 4 semanas. El anticipo es de $500 MXN. Atendemos todos los días, de 9:00 a 22:00.",
      },
    ],
  },
  {
    path: "/renta-cabina-de-fotos-acatlan",
    group: "zonas",
    navLabel: "Acatlán",
    title: "Renta de cabina de fotos en Acatlán | PIX",
    description:
      "Renta de cabina de fotos en Acatlán. Mismo servicio que en Tulancingo; el traslado se confirma por WhatsApp, sin tarifa fija. Desde $3,100 MXN.",
    h1: "Renta de cabina de fotos en Acatlán",
    eyebrow: "Acatlán",
    lead: "Llevamos la cabina a Acatlán. El precio del paquete es el servicio; el traslado se confirma aparte, según la ubicación.",
    whyTitle: "La misma cabina, con el traslado por confirmar",
    why: [
      "En Acatlán montamos la cabina para bodas, XV años, graduaciones y reuniones. El servicio es el de siempre: luz LED, impresiones ilimitadas con 2 tiras por toma, descarga por QR, props y dos operadores que se quedan durante las horas contratadas.",
      "El precio que ves es el del paquete, no el del viaje. El traslado a Acatlán no va incluido y no tiene una tarifa fija: depende de la ubicación. Te lo decimos por WhatsApp, junto con la disponibilidad, antes de que dejes el anticipo.",
    ],
    includedLead:
      "Lo que incluye la renta en Acatlán es el servicio de la cabina. El traslado se cotiza con la dirección del evento.",
    packagesLead:
      "Estos precios son del servicio. Para un evento en Acatlán hay que sumar el traslado, y ese monto se confirma por WhatsApp.",
    travelNote:
      "El traslado a Acatlán depende de la ubicación. No manejamos una tarifa fija. En Tulancingo y Santiago Tulantepec, en cambio, el traslado sí va incluido.",
    photos: [PHOTOS.vaquero, PHOTOS.lentesPareja, PHOTOS.salonLateral],
    whatsappMessage:
      "¡Hola PIX! Quiero cotizar la renta de cabina de fotos para un evento en Acatlán.",
    cta: "Cotizar en Acatlán por WhatsApp",
    faqs: [
      {
        question: "¿El precio incluye el traslado a Acatlán?",
        answer:
          "No. El precio del paquete es el servicio. El traslado a Acatlán depende de la ubicación, no tiene tarifa fija y lo confirmamos por WhatsApp antes de apartar.",
      },
      {
        question: "¿Qué incluye la renta?",
        answer:
          "Cabina inflable con luz LED, fotos impresas ilimitadas (2 tiras por toma), descarga por QR, diseño de la tira, sombreros, lentes, máscaras, diademas y más props, 2 operadores y un USB con todas las fotos.",
      },
      {
        question: "¿Pueden montar en salón o en casa?",
        answer:
          "Sí, si hay un espacio plano de al menos 3x3 metros y una toma de 110V a menos de 10 metros. Llegamos con anticipación para dejar la cabina lista antes de tus invitados.",
      },
      {
        question: "¿Con cuánto tiempo les escribo?",
        answer:
          "Con al menos 2 a 4 semanas, sobre todo en fin de semana. El anticipo es de $500 MXN. Atendemos todos los días, de 9:00 a 22:00.",
      },
    ],
  },
  {
    path: "/renta-cabina-de-fotos-cuautepec",
    group: "zonas",
    navLabel: "Cuautepec",
    title: "Renta de cabina de fotos en Cuautepec | PIX",
    description:
      "Renta de cabina de fotos en Cuautepec de Hinojosa. Cabina inflable con luz LED y tiras ilimitadas. El traslado se cotiza por WhatsApp.",
    h1: "Renta de cabina de fotos en Cuautepec",
    eyebrow: "Cuautepec de Hinojosa",
    lead: "Llegamos a Cuautepec de Hinojosa con la cabina inflable. El traslado se revisa con la dirección, sin un precio fijo.",
    whyTitle: "Fiestas en Cuautepec, con la cabina lista",
    why: [
      "En Cuautepec de Hinojosa montamos la misma cabina inflable que en Tulancingo: luz LED, mesa de props y tiras impresas al momento. Sirve para una fiesta en salón, en jardín o en casa, siempre que haya un espacio plano de al menos 3x3 metros y una toma de 110V cerca.",
      "El traslado no está incluido en el precio y no lo cotizamos igual para todos. Cuéntanos la dirección y te decimos disponibilidad y costo de traslado por WhatsApp. Llegamos con anticipación para dejar todo listo antes de tus invitados.",
    ],
    includedLead:
      "La renta en Cuautepec incluye el servicio completo de la cabina. El viaje se confirma cuando ya tenemos la dirección.",
    packagesLead:
      "Los paquetes cuestan lo mismo que en Tulancingo. En Cuautepec el traslado se suma aparte y te lo confirmamos antes de apartar.",
    travelNote:
      "No hay una tarifa fija de traslado a Cuautepec de Hinojosa. Lo revisamos por WhatsApp. En Tulancingo y Santiago Tulantepec el traslado sí va incluido.",
    photos: [PHOTOS.sombreros, PHOTOS.instagram, PHOTOS.caballo],
    whatsappMessage:
      "¡Hola PIX! Quiero cotizar la renta de cabina de fotos para un evento en Cuautepec.",
    cta: "Cotizar en Cuautepec por WhatsApp",
    faqs: [
      {
        question: "¿Llegan a Cuautepec de Hinojosa?",
        answer:
          "Sí. Atendemos Tulancingo, Santiago Tulantepec, Acatlán, Cuautepec y alrededores. Para Cuautepec necesitamos la dirección del evento y así confirmamos disponibilidad.",
      },
      {
        question: "¿Cuánto cobran de traslado?",
        answer:
          "No hay una tarifa fija. El traslado fuera de Tulancingo y Santiago Tulantepec depende de la ubicación y te lo decimos por WhatsApp antes de apartar.",
      },
      {
        question: "¿Los paquetes cambian por el municipio?",
        answer:
          "No. Esencial son 2 horas por $3,100 MXN y Celebración son 3 horas por $3,900 MXN. La hora adicional cuesta $1,100 MXN. En Cuautepec el traslado se cotiza aparte.",
      },
      {
        question: "¿Qué les digo en el primer mensaje?",
        answer:
          "La fecha, el tipo de evento y la dirección en Cuautepec. Con eso revisamos disponibilidad y costo de traslado. El anticipo para apartar es de $500 MXN y atendemos todos los días, de 9:00 a 22:00.",
      },
    ],
  },
];

export function findLanding(path) {
  const normalized = normalizePath(path);
  return LANDINGS.find((page) => page.path === normalized) || null;
}

export function siblingLandings(page) {
  return LANDINGS.filter((item) => item.group === page.group && item.path !== page.path);
}
