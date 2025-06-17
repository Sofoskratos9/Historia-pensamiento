/**
 * Actividades y quizzes para el aprendizaje activo
 * 
 * Este archivo define las actividades interactivas y quizzes para cada sesión,
 * siguiendo los principios de Aprendizaje Activo y Basado en Retos.
 */

// Tipos de actividades disponibles
const TIPOS_ACTIVIDAD = {
  QUIZ: 'quiz',
  REFLEXION: 'reflexion',
  DEBATE: 'debate',
  CREACION: 'creacion',
  INVESTIGACION: 'investigacion',
  COMPARACION: 'comparacion',
  ANALISIS: 'analisis',
  PRACTICA: 'practica',
  DIALOGO: 'dialogo',
  AUTOANALISIS: 'autoanalisis',
  VISUALIZACION: 'visualizacion',
  CLASIFICACION: 'clasificacion',
  EJERCICIO: 'ejercicio',
  LECTURA: 'lectura'
};

// Actividades para el Primer Parcial
const actividadesPrimerParcial = [
  // Tema 1: ¿Cómo Explicamos el Mundo? - Del Mito a la Razón
  {
    id: "p1_t1_s1_a1",
    parcial: 1,
    tema: 1,
    sesion: 1,
    titulo: "Mi pregunta fundamental",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "¿Qué pregunta sobre la existencia te intriga más? Escribe tu reflexión y compártela.",
    instrucciones: [
      "Piensa en una pregunta fundamental sobre la existencia que te intrigue profundamente.",
      "Escribe una reflexión de al menos 150 palabras explicando por qué te interesa esta pregunta.",
      "Considera cómo esta pregunta se relaciona con tu vida y experiencia personal.",
      "Si te sientes cómodo, comparte tu reflexión con el resto de la clase."
    ],
    duracion: 15,
    xp: 30
  },
  {
    id: "p1_t1_s1_a2",
    parcial: 1,
    tema: 1,
    sesion: 1,
    titulo: "Preguntas universales",
    tipo: TIPOS_ACTIVIDAD.QUIZ,
    descripcion: "Pon a prueba tu comprensión sobre las preguntas filosóficas fundamentales.",
    preguntas: [
      {
        pregunta: "¿Cuál de estas NO es considerada una pregunta filosófica fundamental?",
        opciones: [
          "¿Quiénes somos?",
          "¿De dónde venimos?",
          "¿Cuál es el sentido de la vida?",
          "¿Cuánto cuesta un helado?"
        ],
        respuestaCorrecta: 3,
        explicacion: "Las preguntas filosóficas fundamentales abordan temas existenciales, metafísicos, éticos o epistemológicos. El precio de un helado es una pregunta factual, no filosófica."
      },
      {
        pregunta: "¿Qué caracteriza a una pregunta filosófica?",
        opciones: [
          "Tiene una respuesta única y verificable",
          "Puede ser respondida mediante un experimento científico",
          "Invita a la reflexión profunda y tiene múltiples perspectivas válidas",
          "Solo puede ser respondida por expertos en filosofía"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las preguntas filosóficas suelen ser abiertas, invitan a la reflexión profunda y pueden tener múltiples respuestas o perspectivas válidas, a diferencia de las preguntas factuales o científicas."
      },
      {
        pregunta: "¿Cuál de las siguientes culturas NO desarrolló sistemas filosóficos para responder preguntas fundamentales?",
        opciones: [
          "Antigua Grecia",
          "China antigua",
          "India antigua",
          "Ninguna de las anteriores (todas desarrollaron sistemas filosóficos)"
        ],
        respuestaCorrecta: 3,
        explicacion: "Todas las grandes civilizaciones antiguas desarrollaron sistemas filosóficos para abordar preguntas fundamentales sobre la existencia, aunque con diferentes enfoques y tradiciones."
      }
    ],
    duracion: 10,
    xp: 20
  },
  {
    id: "p1_t1_s2_a1",
    parcial: 1,
    tema: 1,
    sesion: 2,
    titulo: "Mitos vs. Ciencia",
    tipo: TIPOS_ACTIVIDAD.COMPARACION,
    descripcion: "Compara cómo un mismo fenómeno (por ejemplo, los truenos) era explicado por los mitos griegos y cómo lo explica la ciencia actual.",
    instrucciones: [
      "Elige uno de los siguientes fenómenos naturales: truenos, terremotos, cambio de estaciones, eclipses, o propón otro.",
      "Investiga cómo explicaban los mitos griegos este fenómeno.",
      "Busca la explicación científica actual del mismo fenómeno.",
      "Crea una tabla comparativa con ambas explicaciones, destacando similitudes y diferencias.",
      "Reflexiona: ¿Qué función cumplía el mito? ¿Qué aporta la explicación científica? ¿Se pierde algo al abandonar la explicación mítica?"
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p1_t1_s2_a2",
    parcial: 1,
    tema: 1,
    sesion: 2,
    titulo: "Tu propio mito",
    tipo: TIPOS_ACTIVIDAD.CREACION,
    descripcion: "Crea un breve mito que explique un fenómeno natural o social de forma simbólica.",
    instrucciones: [
      "Elige un fenómeno natural o social que te interese explicar (puede ser algo moderno como el internet, las redes sociales, etc.).",
      "Crea un mito original que explique este fenómeno, incluyendo:",
      "- Personajes (dioses, héroes, criaturas míticas)",
      "- Una narrativa con inicio, desarrollo y desenlace",
      "- Elementos simbólicos que representen aspectos del fenómeno",
      "- Una moraleja o enseñanza (opcional)",
      "Presenta tu mito de forma creativa (texto, cómic, audio, etc.)"
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p1_t1_s3_a1",
    parcial: 1,
    tema: 1,
    sesion: 3,
    titulo: "Los elementos fundamentales",
    tipo: TIPOS_ACTIVIDAD.INVESTIGACION,
    descripcion: "Investiga qué elemento consideraba cada filósofo presocrático como el principio fundamental (arjé) del universo.",
    instrucciones: [
      "Investiga sobre los siguientes filósofos presocráticos: Tales de Mileto, Anaximandro, Anaxímenes, Heráclito, Empédocles y Demócrito.",
      "Para cada uno, identifica:",
      "- Qué elemento o principio consideraba como arjé (principio fundamental)",
      "- Por qué eligió ese elemento/principio",
      "- Una cita o fragmento atribuido a ese filósofo (si está disponible)",
      "Organiza tu investigación en una tabla o infografía.",
      "Reflexiona: ¿Qué tienen en común estos pensadores a pesar de sus diferentes respuestas?"
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p1_t1_s3_a2",
    parcial: 1,
    tema: 1,
    sesion: 3,
    titulo: "¿Agua, fuego, aire o tierra?",
    tipo: TIPOS_ACTIVIDAD.DEBATE,
    descripcion: "Debate con tus compañeros: si tuvieras que elegir un elemento como el más fundamental, ¿cuál sería y por qué?",
    instrucciones: [
      "La clase se dividirá en cuatro grupos, cada uno defendiendo un elemento: agua, fuego, aire o tierra.",
      "Cada grupo debe preparar argumentos sobre por qué su elemento podría considerarse el más fundamental, inspirándose en los filósofos presocráticos pero añadiendo argumentos contemporáneos.",
      "Consideren aspectos como:",
      "- Importancia del elemento para la vida",
      "- Propiedades físicas y transformaciones",
      "- Presencia en el universo",
      "- Simbolismo y significado cultural",
      "Realicen un debate estructurado con tiempo para presentación, refutación y conclusiones."
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p1_t1_s4_a1",
    parcial: 1,
    tema: 1,
    sesion: 4,
    titulo: "Crear un 'mito moderno' vs. explicación científica",
    tipo: TIPOS_ACTIVIDAD.CREACION,
    descripcion: "Crea un mito moderno para explicar un fenómeno contemporáneo y contrástalo con su explicación científica o racional.",
    instrucciones: [
      "Elige un fenómeno contemporáneo (tecnológico, social, natural) que te interese.",
      "Crea un 'mito moderno' que lo explique de forma simbólica y narrativa, incluyendo personajes, conflictos y resolución.",
      "Luego, proporciona la explicación científica o racional del mismo fenómeno, con datos y conceptos precisos.",
      "Reflexiona sobre las diferencias entre ambas explicaciones:",
      "- ¿Qué aspectos captura mejor el mito? ¿Y la explicación científica?",
      "- ¿Qué emociones evoca cada explicación?",
      "- ¿Pueden complementarse ambas formas de explicación?",
      "Presenta tu trabajo en el formato que prefieras (texto, presentación, video, etc.)."
    ],
    ejemplos: [
      {
        fenomeno: "Internet",
        mito: "La Gran Telaraña: Los antiguos dioses, viendo que los humanos estaban demasiado aislados, pidieron a Aracne, la tejedora, que creara una red invisible que conectara todas las mentes humanas...",
        explicacion: "Internet es una red global de computadoras interconectadas que utilizan protocolos estándar para compartir información..."
      },
      {
        fenomeno: "Cambio climático",
        mito: "La Fiebre de Gaia: La Madre Tierra, agotada por el abuso de sus hijos humanos, comenzó a desarrollar una fiebre para eliminar la infección que amenazaba su existencia...",
        explicacion: "El cambio climático es el resultado del aumento de gases de efecto invernadero en la atmósfera debido principalmente a actividades humanas..."
      }
    ],
    duracion: 45,
    xp: 100
  },
  
  // Tema 2: ¿Cómo Debo Vivir? - Sócrates y la Búsqueda de la Sabiduría
  {
    id: "p1_t2_s1_a1",
    parcial: 1,
    tema: 2,
    sesion: 1,
    titulo: "Práctica del método socrático",
    tipo: TIPOS_ACTIVIDAD.DIALOGO,
    descripcion: "En parejas, practica el método socrático para explorar un concepto como 'justicia' o 'amistad'.",
    instrucciones: [
      "Forma una pareja con otro estudiante.",
      "Elijan uno de los siguientes conceptos para explorar: justicia, amistad, libertad, felicidad, o propongan otro.",
      "Uno de ustedes asumirá el papel de 'Sócrates', haciendo preguntas para profundizar en la definición del concepto.",
      "El otro responderá inicialmente con una definición simple, que 'Sócrates' irá cuestionando con ejemplos y contraejemplos.",
      "El objetivo no es llegar a una definición perfecta, sino explorar la complejidad del concepto.",
      "Después de 10 minutos, intercambien roles y elijan un nuevo concepto.",
      "Al finalizar, reflexionen juntos: ¿Qué descubrieron sobre el concepto? ¿Qué aprendieron sobre el método socrático?"
    ],
    ejemploPreguntas: [
      "¿Qué es X para ti?",
      "¿Podrías dar un ejemplo concreto?",
      "¿Sería X en todas las circunstancias?",
      "¿Qué pasaría si...? (plantear un contraejemplo)",
      "¿Cómo se relaciona X con Y?",
      "¿Estás seguro de que esa definición abarca todos los casos?"
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p1_t2_s1_a2",
    parcial: 1,
    tema: 2,
    sesion: 1,
    titulo: "La ignorancia consciente",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "Reflexiona: ¿En qué áreas de tu vida reconoces que 'no sabes'? ¿Por qué es importante reconocer nuestra ignorancia?",
    instrucciones: [
      "Reflexiona sobre la famosa frase de Sócrates: 'Solo sé que no sé nada'.",
      "Identifica al menos tres áreas o temas en tu vida donde reconoces tu ignorancia o falta de conocimiento.",
      "Para cada área, responde:",
      "- ¿Cómo te hace sentir reconocer que no sabes sobre esto?",
      "- ¿Qué ventajas podría tener reconocer esta ignorancia?",
      "- ¿Te gustaría aprender más sobre este tema? ¿Por qué?",
      "Finalmente, reflexiona: ¿Por qué crees que Sócrates consideraba que reconocer la propia ignorancia era el primer paso hacia la sabiduría?",
      "Escribe tu reflexión en formato de ensayo breve (250-300 palabras)."
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p1_t2_s2_a1",
    parcial: 1,
    tema: 2,
    sesion: 2,
    titulo: "Mi mapa personal",
    tipo: TIPOS_ACTIVIDAD.AUTOANALISIS,
    descripcion: "Crea un 'mapa' de ti mismo: tus fortalezas, debilidades, valores, metas y preguntas sin responder.",
    instrucciones: [
      "Crea un mapa visual que represente diferentes aspectos de ti mismo, incluyendo:",
      "- Fortalezas y talentos",
      "- Áreas de mejora o debilidades",
      "- Valores fundamentales",
      "- Metas a corto y largo plazo",
      "- Preguntas importantes que te haces sobre tu vida",
      "- Personas o influencias significativas",
      "Puedes usar cualquier formato: mapa mental, infografía, collage, dibujo, etc.",
      "Reflexiona: ¿Qué descubriste sobre ti mismo al crear este mapa? ¿Hay algún patrón o conexión interesante?",
      "Este mapa es personal; solo compartirás los aspectos con los que te sientas cómodo."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p1_t2_s2_a2",
    parcial: 1,
    tema: 2,
    sesion: 2,
    titulo: "Máscaras sociales",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "Reflexiona: ¿Actúas diferente en distintos contextos sociales? ¿Cuál es tu 'yo' más auténtico?",
    instrucciones: [
      "Identifica al menos tres 'máscaras' o formas de presentarte que adoptas en diferentes contextos (familia, amigos, escuela, redes sociales, etc.).",
      "Para cada 'máscara', describe:",
      "- Cómo te comportas en ese contexto",
      "- Qué aspectos de ti mismo muestras u ocultas",
      "- Por qué adoptas esa forma de presentarte",
      "Reflexiona sobre las siguientes preguntas:",
      "- ¿Hay un 'yo verdadero' detrás de estas máscaras?",
      "- ¿Es posible o deseable ser completamente auténtico en todos los contextos?",
      "- ¿Cómo se relaciona esto con el mandato socrático de 'conócete a ti mismo'?",
      "Escribe tu reflexión en formato de diario personal (300-350 palabras)."
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p1_t2_s3_a1",
    parcial: 1,
    tema: 2,
    sesion: 3,
    titulo: "Dilemas morales",
    tipo: TIPOS_ACTIVIDAD.ANALISIS,
    descripcion: "Analiza diferentes dilemas morales y discute qué haría Sócrates en cada situación.",
    instrucciones: [
      "Lee los dilemas morales proporcionados.",
      "Para cada dilema, analiza:",
      "- ¿Cuáles son los valores o virtudes en conflicto?",
      "- ¿Qué preguntas haría Sócrates para explorar este dilema?",
      "- ¿Qué decisión crees que tomaría Sócrates y por qué?",
      "- ¿Qué decisión tomarías tú y por qué?",
      "Comparte tu análisis con un pequeño grupo y discutan las diferentes perspectivas.",
      "Reflexionen juntos: ¿Cómo nos ayuda el enfoque socrático a pensar mejor sobre dilemas éticos?"
    ],
    dilemas: [
      "Encuentras una cartera con mucho dinero y la identificación del dueño. Necesitas dinero urgentemente para una emergencia familiar. ¿Qué haces?",
      "Un amigo te confía que está pensando en abandonar la escuela. Te pide que no se lo digas a nadie, pero tú crees que necesita ayuda. ¿Respetas su confidencialidad o buscas ayuda?",
      "Descubres que un compañero hace trampa en los exámenes. Obtiene mejores calificaciones que tú, quien estudia honestamente. ¿Lo reportas, le hablas directamente, o no haces nada?"
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p1_t2_s3_a2",
    parcial: 1,
    tema: 2,
    sesion: 3,
    titulo: "¿Existen valores universales?",
    tipo: TIPOS_ACTIVIDAD.DEBATE,
    descripcion: "Debate: ¿Hay valores que deberían ser universales para todos los seres humanos, o todo es relativo a la cultura?",
    instrucciones: [
      "La clase se dividirá en dos grupos para debatir:",
      "- Grupo A: Defenderá la existencia de valores universales que aplican a todos los seres humanos.",
      "- Grupo B: Defenderá que los valores son relativos a la cultura, época y contexto.",
      "Cada grupo debe preparar:",
      "- Argumentos principales (al menos 3)",
      "- Ejemplos concretos que apoyen su posición",
      "- Respuestas a posibles contraargumentos",
      "El debate seguirá este formato:",
      "- Presentación inicial de cada grupo (3 minutos)",
      "- Ronda de argumentos y contraargumentos (10 minutos)",
      "- Preguntas del público (5 minutos)",
      "- Conclusiones finales (2 minutos por grupo)",
      "Al finalizar, toda la clase reflexionará sobre qué posición les parece más convincente y por qué."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p1_t2_s4_a1",
    parcial: 1,
    tema: 2,
    sesion: 4,
    titulo: "Diálogos socráticos sobre dilemas adolescentes",
    tipo: TIPOS_ACTIVIDAD.DIALOGO,
    descripcion: "Aplicamos el método socrático para analizar dilemas comunes en la vida adolescente.",
    instrucciones: [
      "Forma un grupo pequeño (3-4 personas).",
      "Elijan uno de los dilemas propuestos o creen uno propio relacionado con la vida adolescente.",
      "Designen a un 'Sócrates' que guiará la conversación mediante preguntas (pueden rotar este rol).",
      "Los demás participantes intentarán responder honestamente, explorando el dilema en profundidad.",
      "El diálogo debe durar al menos 15 minutos y explorar diferentes perspectivas del dilema.",
      "Al finalizar, reflexionen juntos:",
      "- ¿Qué nuevas perspectivas descubrieron sobre el dilema?",
      "- ¿Cómo les ayudó el método socrático a profundizar en el tema?",
      "- ¿Llegaron a alguna conclusión o el tema quedó abierto?",
      "Preparen un breve resumen de su diálogo para compartir con la clase."
    ],
    dilemasPropuestos: [
      "Un amigo te confía un secreto importante pero potencialmente peligroso. ¿Debes mantener tu promesa de confidencialidad o buscar ayuda?",
      "Descubres que puedes hacer trampa en un examen sin consecuencias. Nadie lo sabría jamás. ¿Lo harías?",
      "Tus amigos presionan para que participes en una actividad que va contra tus valores. ¿Cómo manejas la presión social?",
      "Te gusta alguien que está en una relación. Esa persona muestra interés en ti también. ¿Qué harías?",
      "Descubres información personal comprometedora sobre alguien que no te agrada. ¿La usarías en su contra?"
    ],
    preguntasSocraticas: [
      "¿Qué significa realmente ser un buen amigo?",
      "¿El fin justifica los medios?",
      "¿Qué es más importante: la aceptación social o la integridad personal?",
      "¿Cómo sabes lo que es correcto en esta situación?",
      "¿Qué pasaría si todos actuaran como tú propones?",
      "¿Cómo te sentirías si estuvieras en la posición de la otra persona?"
    ],
    duracion: 45,
    xp: 100
  }
];

// Actividades para el Segundo Parcial
const actividadesSegundoParcial = [
  // Tema 1: Platón - El Mundo de las Ideas Perfectas
  {
    id: "p2_t1_s1_a1",
    parcial: 2,
    tema: 1,
    sesion: 1,
    titulo: "Lo perfecto y lo real",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "Piensa en un objeto cotidiano (una silla, por ejemplo). ¿Cómo sería la 'Idea perfecta' de ese objeto según Platón?",
    instrucciones: [
      "Elige un objeto cotidiano (silla, mesa, teléfono, etc.).",
      "Reflexiona sobre cómo sería la 'Idea perfecta' de ese objeto según Platón, considerando:",
      "- ¿Qué características esenciales definen este objeto?",
      "- ¿Qué hace que este objeto sea lo que es, independientemente de sus variaciones?",
      "- ¿Cómo sería la versión 'perfecta' o 'ideal' de este objeto?",
      "Dibuja o describe tanto el objeto real como su 'Idea perfecta'.",
      "Reflexiona: ¿Qué nos dice esta comparación sobre la teoría platónica? ¿Crees que existen realmente estas 'Ideas perfectas'?"
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p2_t1_s1_a2",
    parcial: 2,
    tema: 1,
    sesion: 1,
    titulo: "¿Existen verdades absolutas?",
    tipo: TIPOS_ACTIVIDAD.DEBATE,
    descripcion: "Debate: ¿Crees que existen verdades absolutas y eternas, o todo conocimiento es relativo y cambiante?",
    instrucciones: [
      "La clase se dividirá en dos grupos para debatir:",
      "- Grupo A: Defenderá la posición platónica de que existen verdades absolutas y eternas.",
      "- Grupo B: Defenderá que todo conocimiento es relativo al contexto, cultura, época, etc.",
      "Cada grupo debe preparar:",
      "- Al menos 3 argumentos principales",
      "- Ejemplos concretos de áreas donde su posición parece más convincente",
      "- Respuestas a posibles contraargumentos",
      "El debate seguirá este formato:",
      "- Presentación inicial (3 minutos por grupo)",
      "- Ronda de argumentos y contraargumentos (12 minutos)",
      "- Preguntas del público (5 minutos)",
      "- Conclusiones finales (2 minutos por grupo)",
      "Al finalizar, la clase votará sobre qué posición les pareció mejor argumentada."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p2_t1_s2_a1",
    parcial: 2,
    tema: 1,
    sesion: 2,
    titulo: "Modernizando la caverna",
    tipo: TIPOS_ACTIVIDAD.VISUALIZACION,
    descripcion: "Crea una versión moderna de la alegoría de la caverna utilizando elementos contemporáneos (redes sociales, realidad virtual, etc.).",
    instrucciones: [
      "Revisa la alegoría original de la caverna de Platón.",
      "Crea una versión moderna que transmita el mismo mensaje filosófico, pero utilizando elementos contemporáneos como:",
      "- Redes sociales",
      "- Realidad virtual",
      "- Medios de comunicación",
      "- Tecnología",
      "- Cultura pop",
      "Tu versión debe incluir equivalentes modernos para: los prisioneros, las cadenas, las sombras, el fuego, la salida de la caverna, el sol, y el regreso a la caverna.",
      "Puedes presentar tu alegoría moderna como: narración escrita, cómic, storyboard, video breve, o presentación visual.",
      "Explica brevemente cómo tu versión moderna transmite los mismos conceptos filosóficos que la original."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p2_t1_s2_a2",
    parcial: 2,
    tema: 1,
    sesion: 2,
    titulo: "Mis propias cadenas",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "Reflexiona: ¿Cuáles son las 'sombras' o ilusiones en tu propia vida? ¿Qué 'cadenas' limitan tu percepción de la realidad?",
    instrucciones: [
      "Reflexiona sobre tu propia vida a la luz de la alegoría de la caverna:",
      "- ¿Cuáles son las 'sombras' o ilusiones que podrías estar confundiendo con la realidad?",
      "- ¿Qué 'cadenas' (hábitos, prejuicios, influencias) podrían estar limitando tu percepción?",
      "- ¿Has tenido alguna experiencia de 'salir de la caverna'? ¿Cómo fue?",
      "- ¿Alguna vez has intentado 'liberar' a otros de sus 'cavernas'? ¿Cómo reaccionaron?",
      "Escribe una reflexión personal (300-350 palabras) explorando estas preguntas.",
      "Esta reflexión es personal; solo compartirás los aspectos con los que te sientas cómodo."
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p2_t1_s3_a1",
    parcial: 2,
    tema: 1,
    sesion: 3,
    titulo: "Fortalezas y debilidades",
    tipo: TIPOS_ACTIVIDAD.ANALISIS,
    descripcion: "Analiza las fortalezas y debilidades del sistema político propuesto por Platón.",
    instrucciones: [
      "Investiga los aspectos clave del sistema político propuesto por Platón en 'La República':",
      "- Las tres clases sociales (gobernantes-filósofos, guardianes, productores)",
      "- El proceso de selección y educación de los gobernantes",
      "- El concepto de justicia como armonía social",
      "- La abolición de la propiedad privada y la familia para las clases superiores",
      "Crea una tabla de análisis con las siguientes categorías:",
      "- Fortalezas del sistema platónico",
      "- Debilidades o problemas potenciales",
      "- Aspectos que podrían funcionar en la sociedad actual",
      "- Aspectos que serían problemáticos o inaceptables hoy",
      "Concluye con tu evaluación personal: ¿Qué podemos aprender del sistema platónico para mejorar nuestras sociedades actuales?"
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p2_t1_s3_a2",
    parcial: 2,
    tema: 1,
    sesion: 3,
    titulo: "¿Quién debe gobernar?",
    tipo: TIPOS_ACTIVIDAD.DEBATE,
    descripcion: "Debate: ¿Quiénes deberían gobernar en una sociedad ideal? ¿Los más sabios, los más votados, o algún otro criterio?",
    instrucciones: [
      "La clase se dividirá en tres grupos, cada uno defendiendo un criterio diferente para determinar quién debe gobernar:",
      "- Grupo A: Los más sabios y virtuosos (posición platónica)",
      "- Grupo B: Los elegidos democráticamente por mayoría",
      "- Grupo C: Otro criterio (pueden proponer alternativas como sorteo, rotación, meritocracia, etc.)",
      "Cada grupo debe preparar:",
      "- Argumentos a favor de su criterio",
      "- Ejemplos históricos o contemporáneos que apoyen su posición",
      "- Respuestas a las críticas más comunes",
      "El debate seguirá este formato:",
      "- Presentación inicial (3 minutos por grupo)",
      "- Ronda de preguntas cruzadas (cada grupo hace preguntas a los otros)",
      "- Argumentos de cierre (2 minutos por grupo)",
      "Al finalizar, la clase discutirá: ¿Es posible un sistema híbrido que combine lo mejor de cada propuesta?"
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p2_t1_s4_a1",
    parcial: 2,
    tema: 1,
    sesion: 4,
    titulo: "Diseña tu 'República' ideal para adolescentes",
    tipo: TIPOS_ACTIVIDAD.CREACION,
    descripcion: "Aplicamos los conceptos platónicos para diseñar una sociedad ideal adaptada a las necesidades y valores adolescentes.",
    instrucciones: [
      "Forma un equipo de 3-4 personas.",
      "Imaginen que tienen la oportunidad de crear una comunidad ideal para adolescentes, inspirándose en los conceptos de Platón pero adaptándolos a sus necesidades y valores.",
      "Su 'República Adolescente' debe incluir:",
      "1. Nombre y lema de la comunidad",
      "2. Valores fundamentales (al menos 3)",
      "3. Sistema de gobierno (¿quién toma las decisiones y cómo?)",
      "4. Sistema educativo (¿qué y cómo se aprende?)",
      "5. Organización social (¿hay diferentes roles o todos son iguales?)",
      "6. Sistema de justicia (¿cómo se resuelven los conflictos?)",
      "7. Uso de la tecnología (¿qué papel juega?)",
      "8. Balance entre libertad individual y bien común",
      "Preparen una presentación creativa de su República (10 minutos máximo) utilizando el formato que prefieran.",
      "Estén preparados para responder preguntas sobre cómo funcionaría su sistema en situaciones específicas."
    ],
    formatosPresentacion: [
      "Presentación visual (PowerPoint, Prezi)",
      "Maqueta o modelo 3D",
      "Constitución escrita con ilustraciones",
      "Video o representación dramática",
      "Sitio web o aplicación simulada"
    ],
    duracion: 45,
    xp: 100
  },
  
  // Tema 2: Aristóteles - El Pensador Práctico
  {
    id: "p2_t2_s1_a1",
    parcial: 2,
    tema: 2,
    sesion: 1,
    titulo: "Platón vs. Aristóteles",
    tipo: TIPOS_ACTIVIDAD.COMPARACION,
    descripcion: "Crea una tabla comparativa entre las ideas principales de Platón y Aristóteles.",
    instrucciones: [
      "Investiga las principales diferencias filosóficas entre Platón y Aristóteles.",
      "Crea una tabla comparativa que incluya al menos estos aspectos:",
      "- Teoría del conocimiento (epistemología)",
      "- Visión de la realidad (metafísica)",
      "- Ética y virtud",
      "- Política y sociedad ideal",
      "- Visión sobre el arte",
      "- Método filosófico",
      "Para cada aspecto, explica brevemente la posición de cada filósofo y destaca las principales diferencias.",
      "Concluye con una reflexión: ¿Con cuál de los dos filósofos te identificas más y por qué?"
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p2_t2_s1_a2",
    parcial: 2,
    tema: 2,
    sesion: 1,
    titulo: "Las cuatro causas",
    tipo: TIPOS_ACTIVIDAD.ANALISIS,
    descripcion: "Analiza un objeto cotidiano según las cuatro causas aristotélicas: material, formal, eficiente y final.",
    instrucciones: [
      "Elige un objeto cotidiano (un teléfono móvil, una bicicleta, un libro, etc.).",
      "Analiza este objeto según las cuatro causas aristotélicas:",
      "1. Causa material: ¿De qué está hecho? (materiales)",
      "2. Causa formal: ¿Qué forma o estructura tiene? (diseño, características)",
      "3. Causa eficiente: ¿Quién o qué lo produjo? (fabricante, proceso de creación)",
      "4. Causa final: ¿Para qué sirve? (propósito, función)",
      "Presenta tu análisis en formato visual (infografía, presentación, póster).",
      "Reflexiona: ¿Cómo nos ayuda este análisis a entender mejor el objeto? ¿Hay alguna causa que te parezca más importante que las demás?"
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p2_t2_s2_a1",
    parcial: 2,
    tema: 2,
    sesion: 2,
    titulo: "Construyendo silogismos",
    tipo: TIPOS_ACTIVIDAD.PRACTICA,
    descripcion: "Practica la creación de silogismos válidos e identifica por qué otros son inválidos.",
    instrucciones: [
      "Estudia la estructura básica de un silogismo aristotélico: premisa mayor, premisa menor y conclusión.",
      "Crea tres silogismos válidos sobre temas de tu interés, siguiendo las reglas de la lógica aristotélica.",
      "Identifica tres silogismos inválidos (de los ejemplos proporcionados) y explica por qué son inválidos.",
      "Analiza un argumento que hayas escuchado recientemente (en noticias, redes sociales, etc.) e identifica si sigue una estructura lógica válida.",
      "Reflexiona: ¿Cómo puede ayudarte la lógica aristotélica a evaluar argumentos en tu vida cotidiana?"
    ],
    ejemplosSilogismos: [
      {
        tipo: "Válido",
        premisaMayor: "Todos los humanos son mortales.",
        premisaMenor: "Sócrates es humano.",
        conclusion: "Por lo tanto, Sócrates es mortal."
      },
      {
        tipo: "Inválido",
        premisaMayor: "Todos los perros son animales.",
        premisaMenor: "Mi gato es un animal.",
        conclusion: "Por lo tanto, mi gato es un perro.",
        explicacion: "Este silogismo comete la falacia de afirmación del consecuente. Del hecho de que todos los perros sean animales no se sigue que todos los animales sean perros."
      }
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p2_t2_s2_a2",
    parcial: 2,
    tema: 2,
    sesion: 2,
    titulo: "Cazadores de falacias",
    tipo: TIPOS_ACTIVIDAD.DETECCION,
    descripcion: "Identifica falacias lógicas comunes en publicidad, redes sociales o discursos políticos.",
    instrucciones: [
      "Estudia las falacias lógicas más comunes (ad hominem, falsa dicotomía, hombre de paja, etc.).",
      "Durante una semana, recolecta ejemplos de falacias lógicas que encuentres en:",
      "- Publicidad",
      "- Redes sociales",
      "- Noticias",
      "- Discursos políticos",
      "- Conversaciones cotidianas",
      "Para cada ejemplo, identifica:",
      "- Qué tipo de falacia es",
      "- Por qué es una falacia",
      "- Cómo podría reformularse el argumento de manera lógicamente válida",
      "Crea una 'guía de detección de falacias' con tus mejores ejemplos para compartir con la clase."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p2_t2_s3_a1",
    parcial: 2,
    tema: 2,
    sesion: 3,
    titulo: "Mi concepto de felicidad",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "Reflexiona: ¿Qué significa la felicidad para ti? ¿Coincide con la visión aristotélica?",
    instrucciones: [
      "Reflexiona sobre tu propio concepto de felicidad, respondiendo a estas preguntas:",
      "- ¿Qué significa para ti ser feliz? (estado emocional, logros, relaciones, etc.)",
      "- ¿Cuándo te has sentido más feliz? ¿Qué elementos estaban presentes?",
      "- ¿Crees que la felicidad es un estado temporal o un modo de vida?",
      "- ¿Qué virtudes o cualidades crees que contribuyen más a una vida feliz?",
      "Compara tu visión con la eudaimonía aristotélica (florecimiento humano a través de la virtud y la excelencia).",
      "- ¿En qué coincide tu visión con la de Aristóteles?",
      "- ¿En qué difiere?",
      "Escribe una reflexión personal (350-400 palabras) explorando estas ideas."
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p2_t2_s3_a2",
    parcial: 2,
    tema: 2,
    sesion: 3,
    titulo: "Virtudes y vicios",
    tipo: TIPOS_ACTIVIDAD.ANALISIS,
    descripcion: "Analiza diferentes virtudes según la doctrina del término medio (entre exceso y defecto).",
    instrucciones: [
      "Estudia la doctrina aristotélica del término medio: la virtud como punto medio entre el exceso y el defecto.",
      "Analiza al menos tres de las siguientes virtudes según este esquema:",
      "- Valentía (entre temeridad y cobardía)",
      "- Generosidad (entre prodigalidad y tacañería)",
      "- Honestidad (entre indiscreción y engaño)",
      "- Humildad (entre autodesprecio y arrogancia)",
      "- Ambición (entre conformismo y ambición desmedida)",
      "Para cada virtud, crea un 'termómetro de la virtud' que muestre:",
      "- El defecto (por defecto)",
      "- La virtud (término medio)",
      "- El exceso (por exceso)",
      "- Ejemplos concretos de cada punto del espectro",
      "Reflexiona: ¿Crees que esta doctrina del término medio es útil para desarrollar el carácter? ¿Por qué?"
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p2_t2_s4_a1",
    parcial: 2,
    tema: 2,
    sesion: 4,
    titulo: "Debate: Diferentes tipos de felicidad en la adolescencia",
    tipo: TIPOS_ACTIVIDAD.DEBATE,
    descripcion: "Organizamos un debate estructurado sobre diferentes concepciones de la felicidad relevantes para los adolescentes.",
    instrucciones: [
      "La clase se dividirá en cinco equipos, cada uno defendiendo una perspectiva diferente sobre la felicidad:",
      "1. Perspectiva hedonista: La felicidad consiste en maximizar el placer y minimizar el dolor.",
      "2. Perspectiva aristotélica: La felicidad es el resultado de desarrollar virtudes y alcanzar la excelencia humana.",
      "3. Perspectiva social: La felicidad depende principalmente de nuestras relaciones y conexiones con otros.",
      "4. Perspectiva de logros: La felicidad proviene de establecer y alcanzar metas significativas.",
      "5. Perspectiva de autenticidad: La felicidad consiste en ser fiel a uno mismo y vivir según los propios valores.",
      "Cada equipo debe preparar:",
      "- Una definición clara de su perspectiva",
      "- Argumentos a favor (al menos 3)",
      "- Ejemplos concretos relevantes para la vida adolescente",
      "- Respuestas a posibles críticas",
      "El debate seguirá un formato estructurado con tiempo para presentación, refutación y conclusiones.",
      "Al finalizar, cada estudiante escribirá una breve reflexión sobre qué perspectiva le parece más convincente y por qué."
    ],
    duracion: 45,
    xp: 100
  },
  
  // Tema 3: Filosofías para Vivir Mejor
  {
    id: "p2_t3_s1_a1",
    parcial: 2,
    tema: 3,
    sesion: 1,
    titulo: "Círculos de control",
    tipo: TIPOS_ACTIVIDAD.EJERCICIO,
    descripcion: "Dibuja dos círculos: uno para lo que puedes controlar y otro para lo que no. Clasifica diferentes aspectos de tu vida.",
    instrucciones: [
      "Dibuja dos círculos concéntricos en una hoja:",
      "- Círculo interior: 'Lo que puedo controlar'",
      "- Círculo exterior: 'Lo que no puedo controlar'",
      "Haz una lista de al menos 15 aspectos de tu vida (emociones, situaciones, relaciones, eventos, etc.).",
      "Clasifica cada elemento en el círculo correspondiente.",
      "Reflexiona sobre estas preguntas:",
      "- ¿Qué patrones observas en tu clasificación?",
      "- ¿Cuánto tiempo y energía dedicas a cosas que no puedes controlar?",
      "- ¿Cómo podrías aplicar el principio estoico de enfocarte en lo que está bajo tu control?",
      "- ¿Qué cambiaría en tu vida si adoptaras esta perspectiva?",
      "Escribe una breve reflexión sobre cómo este ejercicio podría ayudarte a manejar mejor el estrés y la ansiedad."
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p2_t3_s1_a2",
    parcial: 2,
    tema: 3,
    sesion: 1,
    titulo: "Diario estoico",
    tipo: TIPOS_ACTIVIDAD.PRACTICA,
    descripcion: "Practica la reflexión estoica escribiendo sobre un evento reciente que te molestó y cómo podrías aplicar principios estoicos.",
    instrucciones: [
      "Elige un evento reciente que te haya causado malestar emocional (frustración, enojo, tristeza, etc.).",
      "Escribe una entrada de diario estoico que incluya:",
      "1. Descripción objetiva del evento (solo hechos, sin juicios)",
      "2. Tu reacción emocional inicial",
      "3. Análisis estoico:",
      "   - ¿Qué aspectos de la situación estaban bajo tu control y cuáles no?",
      "   - ¿Cómo contribuyeron tus juicios o expectativas a tu malestar?",
      "   - ¿Qué virtudes estoicas (sabiduría, justicia, valentía, templanza) podrías aplicar?",
      "4. Reformulación: ¿Cómo podrías ver o manejar la situación de manera más estoica?",
      "5. Propósito: ¿Qué lección o práctica puedes extraer para situaciones futuras?",
      "Practica esta reflexión estoica durante tres días consecutivos con diferentes situaciones."
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p2_t3_s2_a1",
    parcial: 2,
    tema: 3,
    sesion: 2,
    titulo: "Jerarquía de placeres",
    tipo: TIPOS_ACTIVIDAD.CLASIFICACION,
    descripcion: "Clasifica diferentes placeres según las categorías epicúreas: naturales y necesarios, naturales pero no necesarios, ni naturales ni necesarios.",
    instrucciones: [
      "Estudia la clasificación epicúrea de los deseos y placeres:",
      "1. Naturales y necesarios: satisfacen necesidades básicas (comer, dormir, amistad)",
      "2. Naturales pero no necesarios: placeres que van más allá de lo básico (comida gourmet, lujos moderados)",
      "3. Ni naturales ni necesarios: deseos vanos basados en opiniones falsas (fama, poder excesivo, riqueza extrema)",
      "Haz una lista de al menos 15 placeres o deseos comunes en la vida adolescente.",
      "Clasifica cada uno según las categorías epicúreas y explica tu razonamiento.",
      "Reflexiona:",
      "- ¿Qué categoría ocupa más espacio en tu vida?",
      "- ¿Cómo podría cambiar tu felicidad si te centraras más en los placeres naturales y necesarios?",
      "- ¿Estás de acuerdo con la clasificación epicúrea? ¿Por qué sí o por qué no?"
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p2_t3_s2_a2",
    parcial: 2,
    tema: 3,
    sesion: 2,
    titulo: "Placeres simples",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "Reflexiona sobre los placeres simples que más disfrutas y cómo podrían formar parte de una vida buena.",
    instrucciones: [
      "Haz una lista de 10 placeres simples que genuinamente disfrutas (no costosos, accesibles, sostenibles).",
      "Para cada placer, reflexiona:",
      "- ¿Por qué lo disfrutas?",
      "- ¿Qué necesidad satisface (física, emocional, intelectual, social)?",
      "- ¿Con qué frecuencia lo experimentas?",
      "- ¿Qué te impide disfrutarlo más a menudo?",
      "Diseña un 'plan epicúreo' para incorporar más de estos placeres simples en tu vida cotidiana.",
      "Reflexiona sobre cómo este enfoque contrasta con los mensajes culturales dominantes sobre la felicidad y el placer.",
      "Comparte voluntariamente algunos de tus placeres simples con la clase y discutan: ¿Hay patrones comunes? ¿Diferencias interesantes?"
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p2_t3_s3_a1",
    parcial: 2,
    tema: 3,
    sesion: 3,
    titulo: "Crear tu 'manual de vida' filosófico",
    tipo: TIPOS_ACTIVIDAD.CREACION,
    descripcion: "Aplicamos las enseñanzas de diferentes escuelas filosóficas para crear un manual personal de vida.",
    instrucciones: [
      "Reflexiona sobre las ideas filosóficas que más te han resonado hasta ahora en el curso.",
      "Selecciona principios o prácticas de diferentes filósofos que te parezcan útiles para tu vida.",
      "Crea tu propio 'manual de vida' filosófico que incluya:",
      "1. Título personal y breve introducción",
      "2. Al menos 5 secciones temáticas (ej. relaciones, emociones, decisiones, etc.)",
      "3. Para cada sección:",
      "   - Un principio filosófico clave (citando al filósofo correspondiente)",
      "   - Tu interpretación personal de este principio",
      "   - Un ejercicio práctico o recordatorio para aplicarlo en situaciones reales",
      "   - Un ejemplo de cómo lo aplicarías en tu vida",
      "4. Conclusión: cómo estos principios se integran en una visión coherente de la vida buena",
      "Diseña tu manual en el formato que prefieras (digital, físico, visual, etc.).",
      "Comparte algunos aspectos de tu manual con la clase (solo lo que te sientas cómodo compartiendo)."
    ],
    ejemplosSecciones: [
      "Cómo manejar situaciones fuera de mi control (estoicismo)",
      "Preguntas socráticas para tomar mejores decisiones",
      "Mi definición de felicidad (inspirada en Aristóteles)",
      "Placeres que vale la pena cultivar (epicureísmo)",
      "Cómo distinguir la verdad de las 'sombras' (Platón)",
      "Virtudes que quiero desarrollar (término medio aristotélico)",
      "Cómo mantener la serenidad ante las dificultades (estoicismo)"
    ],
    duracion: 45,
    xp: 100
  }
];

// Actividades para el Tercer Parcial
const actividadesTercerParcial = [
  // Tema 1: Los Primeros Pensadores Cristianos
  {
    id: "p3_t1_s1_a1",
    parcial: 3,
    tema: 1,
    sesion: 1,
    titulo: "Puntos de encuentro",
    tipo: TIPOS_ACTIVIDAD.ANALISIS,
    descripcion: "Analiza qué elementos de la filosofía griega eran compatibles con el cristianismo y cuáles presentaban conflictos.",
    instrucciones: [
      "Investiga sobre los principales conceptos de la filosofía griega (especialmente Platón y Aristóteles) y las enseñanzas fundamentales del cristianismo primitivo.",
      "Crea una tabla comparativa con tres columnas:",
      "1. Elementos compatibles: conceptos filosóficos griegos que podían integrarse fácilmente con el cristianismo",
      "2. Elementos conflictivos: ideas filosóficas que presentaban tensiones o contradicciones con la fe cristiana",
      "3. Elementos transformados: conceptos que fueron adaptados o reinterpretados para hacerlos compatibles",
      "Para cada elemento, explica brevemente:",
      "- El concepto filosófico original",
      "- Su relación con la doctrina cristiana",
      "- Cómo los primeros pensadores cristianos abordaron esta relación",
      "Concluye con una reflexión sobre cómo este encuentro entre filosofía griega y cristianismo moldeó el pensamiento occidental."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p3_t1_s1_a2",
    parcial: 3,
    tema: 1,
    sesion: 1,
    titulo: "Fe vs. razón",
    tipo: TIPOS_ACTIVIDAD.DEBATE,
    descripcion: "Debate: ¿La fe y la razón son complementarias o contradictorias? ¿Pueden coexistir?",
    instrucciones: [
      "La clase se dividirá en tres grupos para debatir sobre la relación entre fe y razón:",
      "- Grupo A: Defenderá que fe y razón son complementarias y pueden coexistir armónicamente",
      "- Grupo B: Defenderá que fe y razón operan en ámbitos separados y no deberían mezclarse",
      "- Grupo C: Defenderá que existe una tensión inherente entre fe y razón que puede ser productiva",
      "Cada grupo debe preparar:",
      "- Argumentos principales (al menos 3)",
      "- Ejemplos históricos o contemporáneos que apoyen su posición",
      "- Respuestas a posibles contraargumentos",
      "El debate seguirá este formato:",
      "- Presentación inicial (3 minutos por grupo)",
      "- Ronda de preguntas cruzadas (cada grupo hace preguntas a los otros)",
      "- Argumentos de cierre (2 minutos por grupo)",
      "Al finalizar, cada estudiante escribirá una breve reflexión personal sobre su propia postura."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p3_t1_s2_a1",
    parcial: 3,
    tema: 1,
    sesion: 2,
    titulo: "El camino de Agustín",
    tipo: TIPOS_ACTIVIDAD.VISUALIZACION,
    descripcion: "Crea una línea de tiempo visual del camino intelectual y espiritual de San Agustín.",
    instrucciones: [
      "Investiga sobre la vida y evolución intelectual de San Agustín, desde su juventud hasta su conversión y madurez como pensador cristiano.",
      "Crea una línea de tiempo visual que incluya:",
      "- Etapas clave de su vida (juventud, educación, período maniqueo, neoplatónico, conversión, obispado)",
      "- Influencias filosóficas en cada etapa",
      "- Obras principales y sus ideas centrales",
      "- Citas representativas de sus escritos",
      "- Imágenes o símbolos que representen cada etapa",
      "Puedes usar cualquier formato: digital, póster, infografía, etc.",
      "Reflexiona: ¿Qué aspectos del camino de Agustín te resultan más interesantes o relevantes? ¿Por qué?"
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p3_t1_s2_a2",
    parcial: 3,
    tema: 1,
    sesion: 2,
    titulo: "Cree para entender",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "Reflexiona sobre la frase de San Agustín: 'Cree para entender, entiende para creer'.",
    instrucciones: [
      "Reflexiona sobre la famosa frase de San Agustín: 'Cree para entender, entiende para creer' (Credo ut intelligam, intelligo ut credam).",
      "Considera estas preguntas:",
      "- ¿Qué crees que significa esta frase?",
      "- ¿Cómo se relaciona con la tensión entre fe y razón?",
      "- ¿Has experimentado alguna vez algo similar en tu vida? (No necesariamente en un contexto religioso)",
      "- ¿Hay áreas del conocimiento donde primero debemos 'creer' para luego 'entender'?",
      "- ¿Cómo se aplica esta idea a la forma en que aprendemos o descubrimos cosas nuevas?",
      "Escribe una reflexión personal (300-350 palabras) explorando estas ideas.",
      "Opcional: Comparte tu reflexión con un compañero y discutan sus diferentes perspectivas."
    ],
    duracion: 20,
    xp: 40
  },
  {
    id: "p3_t1_s3_a1",
    parcial: 3,
    tema: 1,
    sesion: 3,
    titulo: "Diálogo interior",
    tipo: TIPOS_ACTIVIDAD.CREACION,
    descripcion: "Crea un diálogo interior inspirado en las 'Confesiones' de San Agustín.",
    instrucciones: [
      "Lee algunos fragmentos seleccionados de las 'Confesiones' de San Agustín para familiarizarte con su estilo de diálogo interior y reflexión personal.",
      "Identifica un tema o pregunta importante en tu propia vida sobre el que quieras reflexionar (puede ser sobre identidad, valores, decisiones, relaciones, etc.).",
      "Escribe tu propia 'mini-confesión' (250-300 palabras) inspirada en el estilo agustiniano, que incluya:",
      "- Un diálogo contigo mismo o con una figura que represente la verdad/sabiduría",
      "- Reflexión honesta sobre tus pensamientos, sentimientos y experiencias",
      "- Preguntas profundas y búsqueda de respuestas",
      "- Conclusiones o insights personales",
      "Esta actividad es personal; solo compartirás lo que te sientas cómodo compartiendo."
    ],
    ejemplosFragmentos: [
      "¿Qué eres tú, Dios mío? ¿Qué eres sino el Señor Dios? ¿Quién hay Señor fuera del Señor? ¿Quién Dios fuera de nuestro Dios? ¡Oh sumo, óptimo, potentísimo, omnipotentísimo, misericordiosísimo y justísimo, secretísimo y presentísimo, hermosísimo y fortísimo, estable e incomprensible, inmutable y mudando todas las cosas...",
      "Tarde te amé, hermosura tan antigua y tan nueva, tarde te amé. Y he aquí que tú estabas dentro de mí y yo fuera, y por fuera te buscaba; y deforme como era, me lanzaba sobre estas cosas hermosas que tú creaste. Tú estabas conmigo, pero yo no estaba contigo."
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p3_t1_s3_a2",
    parcial: 3,
    tema: 1,
    sesion: 3,
    titulo: "La ciudad de Dios vs. la ciudad terrena",
    tipo: TIPOS_ACTIVIDAD.COMPARACION,
    descripcion: "Compara las características de las dos 'ciudades' según San Agustín y reflexiona sobre ejemplos actuales.",
    instrucciones: [
      "Investiga el concepto agustiniano de las dos ciudades: la Ciudad de Dios y la Ciudad Terrena.",
      "Crea una tabla comparativa que incluya:",
      "- Características principales de cada 'ciudad'",
      "- Valores que las definen",
      "- Motivaciones de sus 'ciudadanos'",
      "- Destino final según Agustín",
      "Luego, reflexiona sobre la sociedad actual:",
      "- ¿Puedes identificar ejemplos contemporáneos que reflejen los valores de cada 'ciudad'?",
      "- ¿Cómo se manifiestan estas dos 'ciudades' en la vida moderna?",
      "- ¿Es posible vivir completamente en una sola 'ciudad'?",
      "Concluye con tu opinión personal sobre la relevancia de esta metáfora agustiniana para entender tensiones sociales y éticas actuales."
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p3_t1_s4_a1",
    parcial: 3,
    tema: 1,
    sesion: 4,
    titulo: "Escribir tu propia 'mini-confesión' filosófica",
    tipo: TIPOS_ACTIVIDAD.CREACION,
    descripcion: "Inspirándote en las Confesiones de San Agustín, escribe tu propia confesión filosófica sobre un tema importante para ti.",
    instrucciones: [
      "Reflexiona sobre un tema filosófico o existencial que sea importante para ti (el sentido de la vida, la identidad, la verdad, la felicidad, etc.).",
      "Inspirándote en el estilo de las Confesiones de San Agustín, escribe tu propia 'mini-confesión' filosófica (500-600 palabras) que incluya:",
      "1. Una introducción personal sobre por qué este tema te importa",
      "2. Tu 'viaje' intelectual y emocional con respecto a este tema:",
      "   - Tus primeras ideas o creencias",
      "   - Momentos de duda o cuestionamiento",
      "   - Influencias importantes (personas, libros, experiencias)",
      "   - Cambios en tu perspectiva",
      "3. Tu comprensión actual del tema",
      "4. Preguntas que aún te haces",
      "Puedes escribir en forma de diálogo interior, carta a un interlocutor imaginario, o narración reflexiva.",
      "Esta actividad es personal; solo compartirás lo que te sientas cómodo compartiendo."
    ],
    ejemplosEstilo: [
      "Diálogo interior: '¿Qué es la verdad? me preguntaba. Y dentro de mí, una voz respondía...'.",
      "Narración reflexiva: 'Durante años busqué la felicidad en lugares equivocados, hasta que un día...'.",
      "Carta: 'A ti, que representas la sabiduría que busco, te confieso mis dudas sobre...'"
    ],
    duracion: 45,
    xp: 100
  },
  
  // Tema 2: La Gran Síntesis Medieval
  {
    id: "p3_t2_s1_a1",
    parcial: 3,
    tema: 2,
    sesion: 1,
    titulo: "El doctor universal",
    tipo: TIPOS_ACTIVIDAD.INVESTIGACION,
    descripcion: "Investiga por qué Santo Tomás de Aquino es llamado 'el doctor universal' y crea un mapa conceptual de sus principales contribuciones.",
    instrucciones: [
      "Investiga sobre la vida y obra de Santo Tomás de Aquino, enfocándote en:",
      "- Su formación y contexto histórico",
      "- Sus principales obras",
      "- Sus contribuciones a diferentes áreas del conocimiento",
      "- Su método de trabajo intelectual",
      "- Su influencia posterior",
      "Crea un mapa conceptual o infografía que sintetice tus hallazgos, organizando la información de manera clara y visual.",
      "Incluye al menos una cita directa de Tomás de Aquino que te parezca especialmente significativa.",
      "Prepárate para presentar brevemente tu trabajo a la clase, explicando qué aspecto de su pensamiento te pareció más interesante o relevante."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p3_t2_s1_a2",
    parcial: 3,
    tema: 2,
    sesion: 1,
    titulo: "Síntesis aristotélico-cristiana",
    tipo: TIPOS_ACTIVIDAD.ANALISIS,
    descripcion: "Analiza cómo Santo Tomás logró sintetizar el pensamiento aristotélico con la doctrina cristiana.",
    instrucciones: [
      "Investiga sobre la síntesis que realizó Santo Tomás entre la filosofía aristotélica y la teología cristiana.",
      "Identifica al menos tres conceptos o temas específicos donde esta síntesis es evidente, como:",
      "- La relación entre fe y razón",
      "- El concepto de Dios como causa primera",
      "- La teoría del conocimiento",
      "- La ética de las virtudes",
      "- La concepción del alma",
      "Para cada tema, analiza:",
      "- La posición original de Aristóteles",
      "- La interpretación o adaptación de Santo Tomás",
      "- Cómo resolvió las posibles tensiones o contradicciones",
      "Presenta tu análisis en el formato que prefieras (ensayo, presentación, tabla comparativa).",
      "Concluye con una reflexión sobre la importancia histórica de esta síntesis para el pensamiento occidental."
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p3_t2_s2_a1",
    parcial: 3,
    tema: 2,
    sesion: 2,
    titulo: "Las cinco vías",
    tipo: TIPOS_ACTIVIDAD.ANALISIS,
    descripcion: "Analiza las cinco vías de Santo Tomás para demostrar la existencia de Dios y evalúa su validez lógica.",
    instrucciones: [
      "Estudia las cinco vías (o argumentos) que propuso Santo Tomás para demostrar racionalmente la existencia de Dios:",
      "1. El argumento del movimiento (primer motor)",
      "2. El argumento de la causalidad (causa primera)",
      "3. El argumento de la contingencia (ser necesario)",
      "4. El argumento de los grados de perfección",
      "5. El argumento del orden y propósito (diseño)",
      "Para cada vía, realiza lo siguiente:",
      "- Explica el argumento con tus propias palabras",
      "- Identifica sus premisas y conclusión",
      "- Evalúa su validez lógica",
      "- Considera posibles objeciones modernas",
      "- Reflexiona sobre su relevancia actual",
      "Elige la vía que te parezca más convincente (o menos convincente) y explica detalladamente por qué.",
      "Presenta tu análisis en formato de ensayo crítico (500-600 palabras)."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p3_t2_s2_a2",
    parcial: 3,
    tema: 2,
    sesion: 2,
    titulo: "Debate sobre las pruebas",
    tipo: TIPOS_ACTIVIDAD.DEBATE,
    descripcion: "Debate: ¿Es posible demostrar racionalmente la existencia o inexistencia de Dios?",
    instrucciones: [
      "La clase se dividirá en tres grupos para debatir sobre la posibilidad de demostrar racionalmente la existencia o inexistencia de Dios:",
      "- Grupo A: Defenderá que es posible demostrar racionalmente la existencia de Dios",
      "- Grupo B: Defenderá que es posible demostrar racionalmente la inexistencia de Dios",
      "- Grupo C: Defenderá que la existencia o inexistencia de Dios está más allá de lo que la razón puede demostrar",
      "Cada grupo debe preparar:",
      "- Al menos 3 argumentos principales",
      "- Ejemplos de filósofos o pensadores que apoyan su posición",
      "- Respuestas a posibles contraargumentos",
      "El debate seguirá este formato:",
      "- Presentación inicial (3 minutos por grupo)",
      "- Ronda de preguntas cruzadas (10 minutos)",
      "- Argumentos de cierre (2 minutos por grupo)",
      "Importante: Este debate debe centrarse en los aspectos filosóficos y lógicos, no en convicciones personales. El objetivo es explorar diferentes posiciones filosóficas, no convencer a otros de creencias personales."
    ],
    duracion: 30,
    xp: 60
  },
  {
    id: "p3_t2_s3_a1",
    parcial: 3,
    tema: 2,
    sesion: 3,
    titulo: "Dos caminos, una verdad",
    tipo: TIPOS_ACTIVIDAD.VISUALIZACION,
    descripcion: "Crea una representación visual de cómo la razón y la fe pueden ser dos caminos hacia la verdad según el pensamiento medieval.",
    instrucciones: [
      "Investiga la concepción medieval (especialmente en Santo Tomás) sobre la relación entre razón y fe como dos caminos hacia la verdad.",
      "Crea una representación visual (dibujo, diagrama, infografía, mapa mental) que ilustre esta relación, incluyendo:",
      "- Características de cada camino (razón y fe)",
      "- Ámbitos propios de cada uno",
      "- Puntos de encuentro y complementariedad",
      "- Límites de cada camino",
      "- La verdad como destino común",
      "Puedes usar metáforas visuales como caminos, ríos, montañas, edificios, o cualquier otra que te parezca adecuada.",
      "Incluye citas o referencias a pensadores medievales que apoyen tu representación.",
      "Prepárate para explicar brevemente tu creación visual a la clase."
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p3_t2_s3_a2",
    parcial: 3,
    tema: 2,
    sesion: 3,
    titulo: "Actualización tomista",
    tipo: TIPOS_ACTIVIDAD.REFLEXION,
    descripcion: "Reflexiona: ¿Cómo aplicarías el método tomista para abordar un problema contemporáneo?",
    instrucciones: [
      "Familiarízate con el método tomista de análisis (presentación de la cuestión, objeciones, sed contra, respuesta, respuestas a las objeciones).",
      "Elige un problema o dilema contemporáneo que te interese (ético, social, político, tecnológico, etc.).",
      "Aplica el método tomista para analizarlo:",
      "1. Presentación clara de la cuestión (¿Se debe permitir X? ¿Es ético Y?)",
      "2. Objeciones principales (argumentos en contra de tu posición)",
      "3. Sed contra (argumento de autoridad o principio fundamental a favor de tu posición)",
      "4. Respuesta desarrollada (tu análisis razonado del problema)",
      "5. Respuestas a las objeciones iniciales",
      "Escribe tu análisis siguiendo esta estructura (400-500 palabras).",
      "Reflexiona: ¿Te resultó útil este método para clarificar tu pensamiento? ¿Qué ventajas o limitaciones encontraste?"
    ],
    ejemploTemas: [
      "¿Es ética la inteligencia artificial generativa?",
      "¿Deberían las redes sociales ser reguladas más estrictamente?",
      "¿Es justificable la desobediencia civil?",
      "¿Tienen derechos los animales?",
      "¿Debe ser obligatoria la educación en valores?"
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p3_t2_s4_a1",
    parcial: 3,
    tema: 2,
    sesion: 4,
    titulo: "Pensadores de otras tradiciones",
    tipo: TIPOS_ACTIVIDAD.INVESTIGACION,
    descripcion: "Investiga sobre pensadores medievales de tradiciones no cristianas (judíos y musulmanes) y sus contribuciones filosóficas.",
    instrucciones: [
      "Elige uno de los siguientes pensadores medievales de tradiciones no cristianas para investigar:",
      "- Maimónides (tradición judía)",
      "- Averroes (tradición musulmana)",
      "- Avicena (tradición musulmana)",
      "- Al-Farabi (tradición musulmana)",
      "- Otro pensador medieval no cristiano (con aprobación del profesor)",
      "Investiga sobre:",
      "- Contexto histórico y cultural",
      "- Principales obras y contribuciones filosóficas",
      "- Relación entre fe y razón en su pensamiento",
      "- Influencia en la filosofía medieval cristiana",
      "- Legado e importancia actual",
      "Prepara una presentación breve (5 minutos) en el formato que prefieras.",
      "Incluye al menos una cita directa del pensador que hayas elegido.",
      "Concluye con una reflexión sobre la importancia del diálogo intercultural en la historia del pensamiento."
    ],
    duracion: 30,
    xp: 60
  },
  
  // Tema 3: Legado del Pensamiento Medieval
  {
    id: "p3_t3_s1_a1",
    parcial: 3,
    tema: 3,
    sesion: 1,
    titulo: "Legado medieval en el presente",
    tipo: TIPOS_ACTIVIDAD.DETECCION,
    descripcion: "Identifica elementos del pensamiento medieval que siguen presentes en la cultura, educación o instituciones actuales.",
    instrucciones: [
      "Investiga sobre el legado del pensamiento medieval en diferentes ámbitos de la vida contemporánea.",
      "Identifica al menos cinco elementos concretos que tengan sus raíces en el pensamiento medieval y sigan presentes hoy, como:",
      "- Conceptos filosóficos o teológicos",
      "- Estructuras educativas o académicas",
      "- Principios éticos o legales",
      "- Prácticas institucionales",
      "- Expresiones culturales o artísticas",
      "Para cada elemento, explica:",
      "- Su origen medieval",
      "- Cómo ha evolucionado hasta hoy",
      "- Su relevancia o función actual",
      "- Si ha cambiado su significado o propósito",
      "Presenta tus hallazgos en formato de 'guía de supervivencia medieval en el mundo moderno' (infografía, folleto, presentación)."
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p3_t3_s1_a2",
    parcial: 3,
    tema: 3,
    sesion: 1,
    titulo: "Carta desde el pasado",
    tipo: TIPOS_ACTIVIDAD.CREACION,
    descripcion: "Escribe una carta imaginaria de un pensador medieval dirigida a los adolescentes de hoy.",
    instrucciones: [
      "Elige un pensador medieval que hayamos estudiado (Agustín, Tomás de Aquino, Maimónides, Averroes, etc.).",
      "Investiga a fondo su pensamiento, estilo de escritura y contexto histórico.",
      "Escribe una carta imaginaria (400-500 palabras) de este pensador dirigida a los adolescentes de hoy, que incluya:",
      "- Presentación del pensador y su época",
      "- Su visión sobre algún tema relevante para los adolescentes actuales",
      "- Consejos o reflexiones basados en su filosofía",
      "- Preguntas que plantearía a los jóvenes de hoy",
      "- Reflexiones sobre cómo ha cambiado (o no) la condición humana",
      "La carta debe reflejar auténticamente el pensamiento y estilo del filósofo elegido, pero adaptada para ser comprensible para adolescentes contemporáneos.",
      "Puedes incluir elementos creativos como un sello medieval, caligrafía especial, o ilustraciones."
    ],
    duracion: 25,
    xp: 50
  },
  {
    id: "p3_t3_s2_a1",
    parcial: 3,
    tema: 3,
    sesion: 2,
    titulo: "Mesa redonda sobre fe y razón",
    tipo: TIPOS_ACTIVIDAD.DEBATE,
    descripcion: "Participamos en una mesa redonda sobre la relación entre fe y razón en el mundo contemporáneo.",
    instrucciones: [
      "La clase organizará una mesa redonda sobre la relación entre fe y razón en el mundo contemporáneo.",
      "Cada estudiante asumirá el rol de un personaje con una perspectiva particular:",
      "- Filósofos medievales (Agustín, Tomás de Aquino, etc.)",
      "- Científicos contemporáneos",
      "- Líderes religiosos de diferentes tradiciones",
      "- Filósofos contemporáneos (ateos, agnósticos, creyentes)",
      "- Adolescentes con diferentes visiones",
      "Prepárate para representar fielmente la perspectiva de tu personaje:",
      "- Investiga su posición sobre la relación entre fe y razón",
      "- Prepara argumentos y ejemplos coherentes con esa visión",
      "- Anticipa preguntas y contraargumentos",
      "La mesa redonda abordará preguntas como:",
      "- ¿Son compatibles la fe religiosa y el pensamiento científico?",
      "- ¿Qué papel juegan la fe y la razón en la búsqueda de respuestas existenciales?",
      "- ¿Cómo pueden dialogar personas con diferentes creencias en una sociedad plural?",
      "- ¿Qué podemos aprender del pensamiento medieval sobre estos temas?",
      "Al finalizar, cada estudiante escribirá una breve reflexión personal (ya fuera del rol asignado)."
    ],
    duracion: 45,
    xp: 100
  }
];

// Exportamos las actividades para su uso en la aplicación
export {
  TIPOS_ACTIVIDAD,
  actividadesPrimerParcial,
  actividadesSegundoParcial,
  actividadesTercerParcial
};