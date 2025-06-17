/**
 * Sistema de insignias y recompensas para la gamificación
 * 
 * Este archivo define todas las insignias, niveles y recompensas disponibles
 * en la aplicación, siguiendo el principio de Gamificación Narrativa.
 */

const badges = [
  // Insignias del Primer Parcial: Las Grandes Preguntas de la Humanidad
  {
    id: "preguntador_cosmico",
    nombre: "Preguntador Cósmico",
    descripcion: "Has comenzado tu viaje cuestionando el origen del universo y la humanidad.",
    imagen: "/assets/images/badges/preguntador-cosmico.svg",
    requisito: "Completar la Sesión 1 del Tema 1 del Primer Parcial",
    xp: 50,
    parcial: 1,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "narrador_de_mitos",
    nombre: "Narrador de Mitos",
    descripcion: "Has explorado los mitos griegos y su forma de explicar el mundo.",
    imagen: "/assets/images/badges/narrador-mitos.svg",
    requisito: "Completar la Sesión 2 del Tema 1 del Primer Parcial",
    xp: 50,
    parcial: 1,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "filosofo_natural",
    nombre: "Filósofo Natural",
    descripcion: "Has conocido a los primeros filósofos y su búsqueda de explicaciones racionales.",
    imagen: "/assets/images/badges/filosofo-natural.svg",
    requisito: "Completar la Sesión 3 del Tema 1 del Primer Parcial",
    xp: 50,
    parcial: 1,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "creador_de_mundos",
    nombre: "Creador de Mundos",
    descripcion: "Has creado tu propio mito moderno y lo has contrastado con la ciencia.",
    imagen: "/assets/images/badges/creador-mundos.svg",
    requisito: "Completar la Actividad del Tema 1 del Primer Parcial",
    xp: 100,
    parcial: 1,
    tema: 1,
    tipo: "logro"
  },
  {
    id: "discipulo_de_socrates",
    nombre: "Discípulo de Sócrates",
    descripcion: "Has conocido al maestro que lo cuestionaba todo.",
    imagen: "/assets/images/badges/discipulo-socrates.svg",
    requisito: "Completar la Sesión 1 del Tema 2 del Primer Parcial",
    xp: 50,
    parcial: 1,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "conocedor_del_ser",
    nombre: "Conocedor del Ser",
    descripcion: "Has explorado el autoconocimiento y su importancia en la adolescencia.",
    imagen: "/assets/images/badges/conocedor-ser.svg",
    requisito: "Completar la Sesión 2 del Tema 2 del Primer Parcial",
    xp: 50,
    parcial: 1,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "buscador_de_virtud",
    nombre: "Buscador de la Virtud",
    descripcion: "Has reflexionado sobre qué significa ser bueno y vivir virtuosamente.",
    imagen: "/assets/images/badges/buscador-virtud.svg",
    requisito: "Completar la Sesión 3 del Tema 2 del Primer Parcial",
    xp: 50,
    parcial: 1,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "maestro_del_dialogo",
    nombre: "Maestro del Diálogo",
    descripcion: "Has aplicado el método socrático a dilemas adolescentes.",
    imagen: "/assets/images/badges/maestro-dialogo.svg",
    requisito: "Completar la Actividad del Tema 2 del Primer Parcial",
    xp: 100,
    parcial: 1,
    tema: 2,
    tipo: "logro"
  },
  {
    id: "explorador_del_origen",
    nombre: "Explorador del Origen",
    descripcion: "Has completado el Tema 1 del Primer Parcial.",
    imagen: "/assets/images/badges/explorador-origen.svg",
    requisito: "Completar todas las sesiones del Tema 1 del Primer Parcial",
    xp: 150,
    parcial: 1,
    tema: 1,
    tipo: "tema_completo"
  },
  {
    id: "sabio_interior",
    nombre: "Sabio Interior",
    descripcion: "Has completado el Tema 2 del Primer Parcial.",
    imagen: "/assets/images/badges/sabio-interior.svg",
    requisito: "Completar todas las sesiones del Tema 2 del Primer Parcial",
    xp: 150,
    parcial: 1,
    tema: 2,
    tipo: "tema_completo"
  },
  {
    id: "navegante_de_preguntas",
    nombre: "Navegante de las Grandes Preguntas",
    descripcion: "¡Felicidades! Has completado el Primer Parcial y explorado las grandes preguntas de la humanidad.",
    imagen: "/assets/images/badges/navegante-preguntas.svg",
    requisito: "Completar todos los temas del Primer Parcial",
    xp: 300,
    parcial: 1,
    tipo: "parcial_completo"
  },
  
  // Insignias del Segundo Parcial: Los Grandes Maestros del Pensamiento
  {
    id: "aprendiz_de_platon",
    nombre: "Aprendiz de Platón",
    descripcion: "Has comenzado a explorar el mundo de las Ideas perfectas de Platón.",
    imagen: "/assets/images/badges/aprendiz-platon.svg",
    requisito: "Completar la Sesión 1 del Tema 1 del Segundo Parcial",
    xp: 50,
    parcial: 2,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "liberado_de_la_caverna",
    nombre: "Liberado de la Caverna",
    descripcion: "Has comprendido la alegoría de la caverna y sus implicaciones sobre la realidad.",
    imagen: "/assets/images/badges/liberado-caverna.svg",
    requisito: "Completar la Sesión 2 del Tema 1 del Segundo Parcial",
    xp: 50,
    parcial: 2,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "arquitecto_social",
    nombre: "Arquitecto Social",
    descripcion: "Has explorado la visión platónica de la sociedad ideal.",
    imagen: "/assets/images/badges/arquitecto-social.svg",
    requisito: "Completar la Sesión 3 del Tema 1 del Segundo Parcial",
    xp: 50,
    parcial: 2,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "filosofo_rey",
    nombre: "Filósofo Rey",
    descripcion: "Has diseñado tu propia 'República' ideal para adolescentes.",
    imagen: "/assets/images/badges/filosofo-rey.svg",
    requisito: "Completar la Actividad del Tema 1 del Segundo Parcial",
    xp: 100,
    parcial: 2,
    tema: 1,
    tipo: "logro"
  },
  {
    id: "discipulo_de_aristoteles",
    nombre: "Discípulo de Aristóteles",
    descripcion: "Has conocido al estudiante que superó a su maestro.",
    imagen: "/assets/images/badges/discipulo-aristoteles.svg",
    requisito: "Completar la Sesión 1 del Tema 2 del Segundo Parcial",
    xp: 50,
    parcial: 2,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "pensador_logico",
    nombre: "Pensador Lógico",
    descripcion: "Has explorado la lógica aristotélica y su aplicación en la vida cotidiana.",
    imagen: "/assets/images/badges/pensador-logico.svg",
    requisito: "Completar la Sesión 2 del Tema 2 del Segundo Parcial",
    xp: 50,
    parcial: 2,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "buscador_de_eudaimonia",
    nombre: "Buscador de Eudaimonía",
    descripcion: "Has reflexionado sobre la felicidad según Aristóteles.",
    imagen: "/assets/images/badges/buscador-eudaimonia.svg",
    requisito: "Completar la Sesión 3 del Tema 2 del Segundo Parcial",
    xp: 50,
    parcial: 2,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "maestro_del_debate",
    nombre: "Maestro del Debate",
    descripcion: "Has participado en un debate sobre diferentes tipos de felicidad.",
    imagen: "/assets/images/badges/maestro-debate.svg",
    requisito: "Completar la Actividad del Tema 2 del Segundo Parcial",
    xp: 100,
    parcial: 2,
    tema: 2,
    tipo: "logro"
  },
  {
    id: "estoico_sereno",
    nombre: "Estoico Sereno",
    descripcion: "Has explorado la filosofía estoica y su enfoque en controlar lo que podemos controlar.",
    imagen: "/assets/images/badges/estoico-sereno.svg",
    requisito: "Completar la Sesión 1 del Tema 3 del Segundo Parcial",
    xp: 50,
    parcial: 2,
    tema: 3,
    tipo: "progreso"
  },
  {
    id: "epicureo_sabio",
    nombre: "Epicúreo Sabio",
    descripcion: "Has comprendido la filosofía epicúrea y su distinción entre placeres.",
    imagen: "/assets/images/badges/epicureo-sabio.svg",
    requisito: "Completar la Sesión 2 del Tema 3 del Segundo Parcial",
    xp: 50,
    parcial: 2,
    tema: 3,
    tipo: "progreso"
  },
  {
    id: "filosofo_practico",
    nombre: "Filósofo Práctico",
    descripcion: "Has creado tu propio manual de vida filosófico.",
    imagen: "/assets/images/badges/filosofo-practico.svg",
    requisito: "Completar la Actividad del Tema 3 del Segundo Parcial",
    xp: 100,
    parcial: 2,
    tema: 3,
    tipo: "logro"
  },
  {
    id: "guardian_de_las_ideas",
    nombre: "Guardián de las Ideas",
    descripcion: "Has completado el Tema 1 del Segundo Parcial.",
    imagen: "/assets/images/badges/guardian-ideas.svg",
    requisito: "Completar todas las sesiones del Tema 1 del Segundo Parcial",
    xp: 150,
    parcial: 2,
    tema: 1,
    tipo: "tema_completo"
  },
  {
    id: "maestro_empirico",
    nombre: "Maestro Empírico",
    descripcion: "Has completado el Tema 2 del Segundo Parcial.",
    imagen: "/assets/images/badges/maestro-empirico.svg",
    requisito: "Completar todas las sesiones del Tema 2 del Segundo Parcial",
    xp: 150,
    parcial: 2,
    tema: 2,
    tipo: "tema_completo"
  },
  {
    id: "sabio_practico",
    nombre: "Sabio Práctico",
    descripcion: "Has completado el Tema 3 del Segundo Parcial.",
    imagen: "/assets/images/badges/sabio-practico.svg",
    requisito: "Completar todas las sesiones del Tema 3 del Segundo Parcial",
    xp: 150,
    parcial: 2,
    tema: 3,
    tipo: "tema_completo"
  },
  {
    id: "navegante_de_maestros",
    nombre: "Navegante de los Grandes Maestros",
    descripcion: "¡Felicidades! Has completado el Segundo Parcial y conocido a los grandes maestros del pensamiento.",
    imagen: "/assets/images/badges/navegante-maestros.svg",
    requisito: "Completar todos los temas del Segundo Parcial",
    xp: 300,
    parcial: 2,
    tipo: "parcial_completo"
  },
  
  // Insignias del Tercer Parcial: El Encuentro entre Fe y Razón
  {
    id: "apologista_filosofico",
    nombre: "Apologista Filosófico",
    descripcion: "Has explorado los primeros intentos de reconciliar filosofía y cristianismo.",
    imagen: "/assets/images/badges/apologista-filosofico.svg",
    requisito: "Completar la Sesión 1 del Tema 1 del Tercer Parcial",
    xp: 50,
    parcial: 3,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "discipulo_de_agustin",
    nombre: "Discípulo de Agustín",
    descripcion: "Has conocido a San Agustín y su síntesis de platonismo y cristianismo.",
    imagen: "/assets/images/badges/discipulo-agustin.svg",
    requisito: "Completar la Sesión 2 del Tema 1 del Tercer Parcial",
    xp: 50,
    parcial: 3,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "buscador_interior",
    nombre: "Buscador Interior",
    descripcion: "Has explorado 'Las Confesiones' y la búsqueda personal de sentido.",
    imagen: "/assets/images/badges/buscador-interior.svg",
    requisito: "Completar la Sesión 3 del Tema 1 del Tercer Parcial",
    xp: 50,
    parcial: 3,
    tema: 1,
    tipo: "progreso"
  },
  {
    id: "autobiografo_filosofico",
    nombre: "Autobiógrafo Filosófico",
    descripcion: "Has escrito tu propia 'mini-confesión' filosófica.",
    imagen: "/assets/images/badges/autobiografo-filosofico.svg",
    requisito: "Completar la Actividad del Tema 1 del Tercer Parcial",
    xp: 100,
    parcial: 3,
    tema: 1,
    tipo: "logro"
  },
  {
    id: "discipulo_de_tomas",
    nombre: "Discípulo de Tomás",
    descripcion: "Has conocido a Santo Tomás de Aquino y su síntesis aristotélica.",
    imagen: "/assets/images/badges/discipulo-tomas.svg",
    requisito: "Completar la Sesión 1 del Tema 2 del Tercer Parcial",
    xp: 50,
    parcial: 3,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "teologo_natural",
    nombre: "Teólogo Natural",
    descripcion: "Has explorado los argumentos racionales sobre la existencia de Dios.",
    imagen: "/assets/images/badges/teologo-natural.svg",
    requisito: "Completar la Sesión 2 del Tema 2 del Tercer Parcial",
    xp: 50,
    parcial: 3,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "armonizador_fe_razon",
    nombre: "Armonizador de Fe y Razón",
    descripcion: "Has reflexionado sobre la complementariedad entre fe y razón.",
    imagen: "/assets/images/badges/armonizador-fe-razon.svg",
    requisito: "Completar la Sesión 3 del Tema 2 del Tercer Parcial",
    xp: 50,
    parcial: 3,
    tema: 2,
    tipo: "progreso"
  },
  {
    id: "investigador_intercultural",
    nombre: "Investigador Intercultural",
    descripcion: "Has investigado sobre pensadores de diferentes tradiciones religiosas.",
    imagen: "/assets/images/badges/investigador-intercultural.svg",
    requisito: "Completar la Actividad del Tema 2 del Tercer Parcial",
    xp: 100,
    parcial: 3,
    tema: 2,
    tipo: "logro"
  },
  {
    id: "historiador_filosofico",
    nombre: "Historiador Filosófico",
    descripcion: "Has reflexionado sobre la relevancia contemporánea del pensamiento medieval.",
    imagen: "/assets/images/badges/historiador-filosofico.svg",
    requisito: "Completar la Sesión 1 del Tema 3 del Tercer Parcial",
    xp: 50,
    parcial: 3,
    tema: 3,
    tipo: "progreso"
  },
  {
    id: "sintetizador_de_ideas",
    nombre: "Sintetizador de Ideas",
    descripcion: "Has participado en una mesa redonda sobre fe y razón.",
    imagen: "/assets/images/badges/sintetizador-ideas.svg",
    requisito: "Completar la Actividad del Tema 3 del Tercer Parcial",
    xp: 100,
    parcial: 3,
    tema: 3,
    tipo: "logro"
  },
  {
    id: "heredero_de_agustin",
    nombre: "Heredero de Agustín",
    descripcion: "Has completado el Tema 1 del Tercer Parcial.",
    imagen: "/assets/images/badges/heredero-agustin.svg",
    requisito: "Completar todas las sesiones del Tema 1 del Tercer Parcial",
    xp: 150,
    parcial: 3,
    tema: 1,
    tipo: "tema_completo"
  },
  {
    id: "heredero_de_tomas",
    nombre: "Heredero de Tomás",
    descripcion: "Has completado el Tema 2 del Tercer Parcial.",
    imagen: "/assets/images/badges/heredero-tomas.svg",
    requisito: "Completar todas las sesiones del Tema 2 del Tercer Parcial",
    xp: 150,
    parcial: 3,
    tema: 2,
    tipo: "tema_completo"
  },
  {
    id: "puente_entre_mundos",
    nombre: "Puente Entre Mundos",
    descripcion: "Has completado el Tema 3 del Tercer Parcial.",
    imagen: "/assets/images/badges/puente-entre-mundos.svg",
    requisito: "Completar todas las sesiones del Tema 3 del Tercer Parcial",
    xp: 150,
    parcial: 3,
    tema: 3,
    tipo: "tema_completo"
  },
  {
    id: "navegante_de_fe_razon",
    nombre: "Navegante del Encuentro entre Fe y Razón",
    descripcion: "¡Felicidades! Has completado el Tercer Parcial y explorado la relación entre fe y razón.",
    imagen: "/assets/images/badges/navegante-fe-razon.svg",
    requisito: "Completar todos los temas del Tercer Parcial",
    xp: 300,
    parcial: 3,
    tipo: "parcial_completo"
  },
  
  // Insignias especiales por logros destacados
  {
    id: "maestro_del_pensamiento",
    nombre: "Maestro del Pensamiento",
    descripcion: "¡Felicidades! Has completado todo el primer semestre de Historia del Pensamiento.",
    imagen: "/assets/images/badges/maestro-pensamiento.svg",
    requisito: "Completar los tres parciales del primer semestre",
    xp: 500,
    tipo: "semestre_completo"
  },
  {
    id: "pensador_critico",
    nombre: "Pensador Crítico",
    descripcion: "Has demostrado excelencia en el análisis y evaluación de argumentos filosóficos.",
    imagen: "/assets/images/badges/pensador-critico.svg",
    requisito: "Obtener al menos 90% en todos los quizzes de un parcial",
    xp: 200,
    tipo: "excelencia"
  },
  {
    id: "filosofo_creativo",
    nombre: "Filósofo Creativo",
    descripcion: "Has destacado por tu originalidad y creatividad en las actividades prácticas.",
    imagen: "/assets/images/badges/filosofo-creativo.svg",
    requisito: "Obtener la máxima calificación en tres actividades creativas",
    xp: 200,
    tipo: "excelencia"
  },
  {
    id: "explorador_constante",
    nombre: "Explorador Constante",
    descripcion: "Has mantenido un ritmo constante de aprendizaje, sin dejar pasar más de tres días sin actividad.",
    imagen: "/assets/images/badges/explorador-constante.svg",
    requisito: "Usar la aplicación durante 30 días consecutivos",
    xp: 150,
    tipo: "constancia"
  }
];

// Niveles de experiencia para el sistema de progresión
const niveles = [
  { nivel: 1, nombre: "Aprendiz Curioso", xpRequerida: 0, recompensa: "Desbloqueo de la aplicación" },
  { nivel: 2, nombre: "Buscador de Sabiduría", xpRequerida: 300, recompensa: "Desbloqueo de fondos de perfil" },
  { nivel: 3, nombre: "Pensador Novato", xpRequerida: 600, recompensa: "Desbloqueo de avatares especiales" },
  { nivel: 4, nombre: "Filósofo Aprendiz", xpRequerida: 1000, recompensa: "Desbloqueo de modo oscuro" },
  { nivel: 5, nombre: "Razonador Hábil", xpRequerida: 1500, recompensa: "Desbloqueo de citas filosóficas diarias" },
  { nivel: 6, nombre: "Dialéctico Competente", xpRequerida: 2100, recompensa: "Desbloqueo de minijuegos filosóficos" },
  { nivel: 7, nombre: "Pensador Profundo", xpRequerida: 2800, recompensa: "Desbloqueo de contenido extra sobre filósofos" },
  { nivel: 8, nombre: "Sabio en Formación", xpRequerida: 3600, recompensa: "Desbloqueo de modo sin distracciones" },
  { nivel: 9, nombre: "Maestro del Logos", xpRequerida: 4500, recompensa: "Desbloqueo de temas visuales premium" },
  { nivel: 10, nombre: "Navegante Maestro", xpRequerida: 5500, recompensa: "Certificado digital de Navegante del Tiempo" }
];

// Función para obtener el nivel actual basado en XP
const obtenerNivelPorXP = (xp) => {
  // Encuentra el nivel más alto que el usuario ha alcanzado
  for (let i = niveles.length - 1; i >= 0; i--) {
    if (xp >= niveles[i].xpRequerida) {
      return niveles[i];
    }
  }
  return niveles[0]; // Por defecto, nivel 1
};

// Función para obtener el progreso hacia el siguiente nivel
const obtenerProgresoNivel = (xp) => {
  const nivelActual = obtenerNivelPorXP(xp);
  const indexNivelActual = niveles.findIndex(n => n.nivel === nivelActual.nivel);
  
  // Si es el nivel máximo, retorna 100%
  if (indexNivelActual === niveles.length - 1) {
    return 100;
  }
  
  const siguienteNivel = niveles[indexNivelActual + 1];
  const xpNecesaria = siguienteNivel.xpRequerida - nivelActual.xpRequerida;
  const xpActual = xp - nivelActual.xpRequerida;
  
  return Math.min(Math.floor((xpActual / xpNecesaria) * 100), 100);
};

// Función para obtener insignias por parcial
const obtenerInsigniasPorParcial = (parcialId) => {
  return badges.filter(badge => badge.parcial === parcialId);
};

// Función para obtener insignias por tipo
const obtenerInsigniasPorTipo = (tipo) => {
  return badges.filter(badge => badge.tipo === tipo);
};

export { 
  badges, 
  niveles, 
  obtenerNivelPorXP, 
  obtenerProgresoNivel,
  obtenerInsigniasPorParcial,
  obtenerInsigniasPorTipo
};