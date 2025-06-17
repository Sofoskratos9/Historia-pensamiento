/**
 * Estructura del currículo de Historia del Pensamiento
 * 
 * Esta estructura sigue el temario proporcionado y se utiliza como fuente de verdad
 * para todo el contenido académico de la aplicación.
 */

const curriculum = {
  titulo: "Historia del Pensamiento",
  descripcion: "Un viaje a través de las grandes ideas que han formado nuestra civilización",
  parciales: [
    {
      id: 1,
      titulo: "Las Grandes Preguntas de la Humanidad",
      descripcion: "Exploramos las preguntas fundamentales que han impulsado el pensamiento humano y cómo han evolucionado las respuestas a lo largo del tiempo.",
      duracion: "4 semanas",
      imagen: "/assets/images/parciales/grandes-preguntas.jpg",
      temas: [
        {
          id: 1,
          titulo: "¿Cómo Explicamos el Mundo? - Del Mito a la Razón",
          descripcion: "Descubre cómo la humanidad pasó de explicar el mundo a través de mitos a utilizar la razón y la filosofía.",
          duracion: "2 semanas",
          imagen: "/assets/images/temas/mito-razon.jpg",
          sesiones: [
            {
              id: 1,
              titulo: "Las preguntas que todos nos hacemos",
              subtitulo: "¿De dónde venimos?",
              descripcion: "Exploramos las preguntas universales que todas las culturas han intentado responder.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Desde el inicio de los tiempos, los seres humanos nos hemos preguntado sobre nuestro origen, propósito y lugar en el universo.",
                conceptosClave: [
                  "Preguntas existenciales",
                  "Curiosidad humana",
                  "Búsqueda de sentido"
                ],
                actividades: [
                  {
                    tipo: "reflexion",
                    titulo: "Mi pregunta fundamental",
                    descripcion: "¿Qué pregunta sobre la existencia te intriga más? Escribe tu reflexión y compártela."
                  },
                  {
                    tipo: "quiz",
                    titulo: "Preguntas universales",
                    preguntas: [
                      {
                        pregunta: "¿Cuál de estas NO es considerada una pregunta filosófica fundamental?",
                        opciones: [
                          "¿Quiénes somos?",
                          "¿De dónde venimos?",
                          "¿Cuál es el sentido de la vida?",
                          "¿Cuánto cuesta un helado?"
                        ],
                        respuestaCorrecta: 3
                      }
                    ]
                  }
                ],
                conexionAdolescente: "Como adolescente, estás en una etapa donde estas preguntas comienzan a tomar mayor importancia. Tu identidad, tus valores y tu lugar en el mundo son cuestiones que empiezas a explorar seriamente."
              }
            },
            {
              id: 2,
              titulo: "Los mitos griegos: primeras respuestas sobre el origen",
              descripcion: "Analizamos cómo los mitos griegos intentaron explicar el origen del mundo y los fenómenos naturales.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Los antiguos griegos crearon elaborados mitos para explicar el origen del universo, los fenómenos naturales y el comportamiento humano.",
                conceptosClave: [
                  "Cosmogonía",
                  "Teogonía",
                  "Antropogonía",
                  "Mito como explicación"
                ],
                actividades: [
                  {
                    tipo: "comparacion",
                    titulo: "Mitos vs. Ciencia",
                    descripcion: "Compara cómo un mismo fenómeno (por ejemplo, los truenos) era explicado por los mitos griegos y cómo lo explica la ciencia actual."
                  },
                  {
                    tipo: "creacion",
                    titulo: "Tu propio mito",
                    descripcion: "Crea un breve mito que explique un fenómeno natural o social de forma simbólica."
                  }
                ],
                conexionAdolescente: "Aunque hoy tenemos explicaciones científicas, los mitos siguen siendo relevantes como expresiones culturales y metáforas. Piensa en las 'mitologías modernas' que consumimos en películas, series y videojuegos."
              }
            },
            {
              id: 3,
              titulo: "Los primeros filósofos: buscar respuestas con la razón",
              descripcion: "Conocemos a los filósofos presocráticos y su revolucionaria forma de entender el mundo a través de la razón.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "En el siglo VI a.C., en las colonias griegas de Jonia, surgieron pensadores que comenzaron a buscar explicaciones naturales, no sobrenaturales, para entender el mundo.",
                conceptosClave: [
                  "Arjé (principio fundamental)",
                  "Logos (razón)",
                  "Physis (naturaleza)",
                  "Filósofos presocráticos"
                ],
                actividades: [
                  {
                    tipo: "investigacion",
                    titulo: "Los elementos fundamentales",
                    descripcion: "Investiga qué elemento consideraba cada filósofo presocrático como el principio fundamental (arjé) del universo."
                  },
                  {
                    tipo: "debate",
                    titulo: "¿Agua, fuego, aire o tierra?",
                    descripcion: "Debate con tus compañeros: si tuvieras que elegir un elemento como el más fundamental, ¿cuál sería y por qué?"
                  }
                ],
                conexionAdolescente: "La adolescencia es un momento de cuestionamiento, donde empiezas a desarrollar tu propio pensamiento crítico. Como los presocráticos, estás aprendiendo a no aceptar respuestas simplemente porque alguien con autoridad te las diga."
              }
            },
            {
              id: 4,
              titulo: "Actividad: Crear un 'mito moderno' vs. explicación científica",
              descripcion: "Aplicamos lo aprendido creando un mito moderno y contrastándolo con una explicación científica.",
              tipo: "actividad",
              duracion: 45,
              contenido: {
                introduccion: "En esta actividad, pondremos en práctica lo que hemos aprendido sobre mitos y explicaciones racionales.",
                instrucciones: [
                  "Elige un fenómeno contemporáneo (tecnológico, social, natural).",
                  "Crea un 'mito moderno' que lo explique de forma simbólica y narrativa.",
                  "Luego, proporciona la explicación científica o racional del mismo fenómeno.",
                  "Reflexiona sobre las diferencias entre ambas explicaciones y qué aporta cada una."
                ],
                ejemplos: [
                  {
                    fenomeno: "Internet",
                    mito: "La Gran Telaraña: Los antiguos dioses, viendo que los humanos estaban demasiado aislados, pidieron a Aracne, la tejedora, que creara una red invisible que conectara todas las mentes humanas...",
                    explicacion: "Internet es una red global de computadoras interconectadas que utilizan protocolos estándar para compartir información..."
                  }
                ],
                criteriosEvaluacion: [
                  "Creatividad y originalidad del mito",
                  "Precisión de la explicación científica",
                  "Reflexión sobre las diferencias entre ambas formas de explicación"
                ],
                conexionAdolescente: "Esta actividad te permite explorar tu creatividad mientras desarrollas tu pensamiento crítico, dos habilidades esenciales en tu desarrollo como adolescente."
              }
            }
          ]
        },
        {
          id: 2,
          titulo: "¿Cómo Debo Vivir? - Sócrates y la Búsqueda de la Sabiduría",
          descripcion: "Exploramos las enseñanzas de Sócrates y su método para buscar la verdad y la sabiduría.",
          duracion: "2 semanas",
          imagen: "/assets/images/temas/socrates.jpg",
          sesiones: [
            {
              id: 1,
              titulo: "Sócrates: el maestro que preguntaba todo",
              descripcion: "Conocemos a Sócrates y su revolucionario método de enseñanza basado en preguntas.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Sócrates (470-399 a.C.) fue un filósofo ateniense que, a diferencia de sus predecesores, centró su filosofía no en explicar el cosmos, sino en entender al ser humano y cómo debemos vivir.",
                conceptosClave: [
                  "Método socrático",
                  "Mayéutica",
                  "Ironía socrática",
                  "'Solo sé que no sé nada'"
                ],
                actividades: [
                  {
                    tipo: "dialogo",
                    titulo: "Práctica del método socrático",
                    descripcion: "En parejas, practica el método socrático para explorar un concepto como 'justicia' o 'amistad'."
                  },
                  {
                    tipo: "reflexion",
                    titulo: "La ignorancia consciente",
                    descripcion: "Reflexiona: ¿En qué áreas de tu vida reconoces que 'no sabes'? ¿Por qué es importante reconocer nuestra ignorancia?"
                  }
                ],
                conexionAdolescente: "Como Sócrates, estás en una etapa de cuestionamiento. Aprender a hacer las preguntas correctas es tan importante como encontrar respuestas."
              }
            },
            {
              id: 2,
              titulo: "'Conócete a ti mismo' - El autoconocimiento en la adolescencia",
              descripcion: "Exploramos el famoso lema socrático y su relevancia especial durante la adolescencia.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "'Conócete a ti mismo' era la inscripción en el templo de Delfos que Sócrates adoptó como principio fundamental de su filosofía.",
                conceptosClave: [
                  "Autoconocimiento",
                  "Introspección",
                  "Identidad",
                  "Desarrollo personal"
                ],
                actividades: [
                  {
                    tipo: "autoanalisis",
                    titulo: "Mi mapa personal",
                    descripcion: "Crea un 'mapa' de ti mismo: tus fortalezas, debilidades, valores, metas y preguntas sin responder."
                  },
                  {
                    tipo: "reflexion",
                    titulo: "Máscaras sociales",
                    descripcion: "Reflexiona: ¿Actúas diferente en distintos contextos sociales? ¿Cuál es tu 'yo' más auténtico?"
                  }
                ],
                conexionAdolescente: "La adolescencia es el momento clave para el autoconocimiento. Estás formando tu identidad y descubriendo quién eres realmente, más allá de las expectativas de otros."
              }
            },
            {
              id: 3,
              titulo: "¿Qué es ser bueno? - Virtudes y valores",
              descripcion: "Analizamos la concepción socrática de la virtud y su relevancia en nuestras vidas.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Para Sócrates, la virtud (areté) era el conocimiento del bien. Creía que nadie hace el mal voluntariamente, sino por ignorancia de lo que es bueno.",
                conceptosClave: [
                  "Virtud (areté)",
                  "Intelectualismo moral",
                  "Eudaimonía (felicidad/bienestar)",
                  "Valores universales vs. relativos"
                ],
                actividades: [
                  {
                    tipo: "analisis",
                    titulo: "Dilemas morales",
                    descripcion: "Analiza diferentes dilemas morales y discute qué haría Sócrates en cada situación."
                  },
                  {
                    tipo: "debate",
                    titulo: "¿Existen valores universales?",
                    descripcion: "Debate: ¿Hay valores que deberían ser universales para todos los seres humanos, o todo es relativo a la cultura?"
                  }
                ],
                conexionAdolescente: "Como adolescente, estás formando tu propio sistema de valores, a veces en conflicto con los de tus padres o la sociedad. Este proceso de cuestionamiento es similar al que Sócrates promovía."
              }
            },
            {
              id: 4,
              titulo: "Práctica: Diálogos socráticos sobre dilemas adolescentes",
              descripcion: "Aplicamos el método socrático a dilemas y situaciones típicas de la adolescencia.",
              tipo: "actividad",
              duracion: 45,
              contenido: {
                introduccion: "En esta actividad, practicaremos el método socrático para analizar dilemas comunes en la vida adolescente.",
                instrucciones: [
                  "Forma un grupo pequeño (3-4 personas).",
                  "Elige uno de los dilemas propuestos o crea uno propio.",
                  "Designa a un 'Sócrates' que guiará la conversación mediante preguntas.",
                  "Los demás participantes intentarán responder honestamente.",
                  "El objetivo no es llegar a una conclusión definitiva, sino profundizar en el tema."
                ],
                dilemasPropuestos: [
                  "Un amigo te confía un secreto importante pero potencialmente peligroso. ¿Debes mantener tu promesa de confidencialidad o buscar ayuda?",
                  "Descubres que puedes hacer trampa en un examen sin consecuencias. Nadie lo sabría jamás. ¿Lo harías?",
                  "Tus amigos presionan para que participes en una actividad que va contra tus valores. ¿Cómo manejas la presión social?"
                ],
                preguntasSocraticas: [
                  "¿Qué significa realmente ser un buen amigo?",
                  "¿El fin justifica los medios?",
                  "¿Qué es más importante: la aceptación social o la integridad personal?",
                  "¿Cómo sabes lo que es correcto en esta situación?"
                ],
                conexionAdolescente: "Estos dilemas reflejan situaciones reales que enfrentas como adolescente. El método socrático te ofrece una herramienta para analizarlas con mayor profundidad."
              }
            }
          ]
        }
      ]
    },
    {
      id: 2,
      titulo: "Los Grandes Maestros del Pensamiento",
      descripcion: "Conocemos a los filósofos más influyentes de la antigüedad y sus ideas revolucionarias sobre la realidad, el conocimiento y la sociedad ideal.",
      duracion: "5 semanas",
      imagen: "/assets/images/parciales/grandes-maestros.jpg",
      temas: [
        {
          id: 1,
          titulo: "Platón - El Mundo de las Ideas Perfectas",
          descripcion: "Exploramos el pensamiento de Platón y su teoría de las Ideas o Formas perfectas.",
          duracion: "2 semanas",
          imagen: "/assets/images/temas/platon.jpg",
          sesiones: [
            {
              id: 1,
              titulo: "Platón y la búsqueda de la verdad perfecta",
              descripcion: "Conocemos a Platón, discípulo de Sócrates, y su búsqueda de verdades absolutas y eternas.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Platón (427-347 a.C.), discípulo de Sócrates, desarrolló una filosofía que buscaba verdades absolutas más allá del mundo cambiante que percibimos con los sentidos.",
                conceptosClave: [
                  "Teoría de las Ideas/Formas",
                  "Mundo sensible vs. mundo inteligible",
                  "Conocimiento como reminiscencia",
                  "Dualismo platónico"
                ],
                actividades: [
                  {
                    tipo: "reflexion",
                    titulo: "Lo perfecto y lo real",
                    descripcion: "Piensa en un objeto cotidiano (una silla, por ejemplo). ¿Cómo sería la 'Idea perfecta' de ese objeto según Platón?"
                  },
                  {
                    tipo: "debate",
                    titulo: "¿Existen verdades absolutas?",
                    descripcion: "Debate: ¿Crees que existen verdades absolutas y eternas, o todo conocimiento es relativo y cambiante?"
                  }
                ],
                conexionAdolescente: "Como adolescente, a menudo buscas ideales y perfección. La tensión entre lo ideal y lo real es algo que experimentas en tu propia vida."
              }
            },
            {
              id: 2,
              titulo: "La Caverna de Platón - ¿Vivimos en una ilusión?",
              descripcion: "Analizamos la famosa alegoría de la caverna y sus implicaciones sobre nuestra percepción de la realidad.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "La alegoría de la caverna es una de las metáforas más poderosas en la historia de la filosofía, que cuestiona nuestra percepción de la realidad.",
                conceptosClave: [
                  "Alegoría/metáfora filosófica",
                  "Prisioneros y sombras",
                  "Liberación y ascenso",
                  "Deslumbramiento y regreso"
                ],
                actividades: [
                  {
                    tipo: "visualizacion",
                    titulo: "Modernizando la caverna",
                    descripcion: "Crea una versión moderna de la alegoría de la caverna utilizando elementos contemporáneos (redes sociales, realidad virtual, etc.)."
                  },
                  {
                    tipo: "reflexion",
                    titulo: "Mis propias cadenas",
                    descripcion: "Reflexiona: ¿Cuáles son las 'sombras' o ilusiones en tu propia vida? ¿Qué 'cadenas' limitan tu percepción de la realidad?"
                  }
                ],
                conexionAdolescente: "En la era de las redes sociales y la información filtrada, la alegoría de la caverna es más relevante que nunca. ¿Cuánto de lo que 'sabes' es realmente conocimiento y cuánto es solo sombra?"
              }
            },
            {
              id: 3,
              titulo: "La República ideal - ¿Cómo sería una sociedad perfecta?",
              descripcion: "Exploramos la visión platónica de la sociedad ideal y sus implicaciones políticas y sociales.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "En 'La República', Platón describe su visión de una sociedad ideal gobernada por filósofos-reyes y organizada según principios de justicia y armonía.",
                conceptosClave: [
                  "Justicia como armonía",
                  "Las tres clases sociales",
                  "El filósofo-rey",
                  "Educación platónica"
                ],
                actividades: [
                  {
                    tipo: "analisis",
                    titulo: "Fortalezas y debilidades",
                    descripcion: "Analiza las fortalezas y debilidades del sistema político propuesto por Platón."
                  },
                  {
                    tipo: "debate",
                    titulo: "¿Quién debe gobernar?",
                    descripcion: "Debate: ¿Quiénes deberían gobernar en una sociedad ideal? ¿Los más sabios, los más votados, o algún otro criterio?"
                  }
                ],
                conexionAdolescente: "Como futuro ciudadano con derecho a voto, es importante que reflexiones sobre qué hace a una sociedad justa y quién debería tener el poder de tomar decisiones."
              }
            },
            {
              id: 4,
              titulo: "Proyecto: Diseña tu 'República' ideal para adolescentes",
              descripcion: "Aplicamos los conceptos platónicos para diseñar una sociedad ideal adaptada a las necesidades y valores adolescentes.",
              tipo: "actividad",
              duracion: 45,
              contenido: {
                introduccion: "En este proyecto, aplicarás los conceptos de Platón para diseñar tu propia 'República' ideal centrada en las necesidades y valores de los adolescentes.",
                instrucciones: [
                  "Forma un equipo de 3-4 personas.",
                  "Imagina que tienes la oportunidad de crear una comunidad ideal para adolescentes.",
                  "Define los principios fundamentales de tu República.",
                  "Describe cómo se organizaría (gobierno, educación, roles, etc.).",
                  "Explica cómo se manejarían los conflictos y problemas.",
                  "Presenta tu República al resto de la clase."
                ],
                elementosAConsiderar: [
                  "Valores fundamentales",
                  "Sistema de gobierno",
                  "Educación",
                  "Justicia y resolución de conflictos",
                  "Equilibrio entre libertad individual y bien común",
                  "Uso de la tecnología"
                ],
                formatosPresentacion: [
                  "Presentación visual (PowerPoint, Prezi)",
                  "Maqueta o modelo 3D",
                  "Constitución escrita con ilustraciones",
                  "Video o representación dramática"
                ],
                conexionAdolescente: "Este proyecto te permite imaginar un mundo diseñado específicamente para abordar los desafíos y necesidades que enfrentas como adolescente."
              }
            }
          ]
        },
        {
          id: 2,
          titulo: "Aristóteles - El Pensador Práctico",
          descripcion: "Conocemos a Aristóteles y su enfoque más práctico y empírico de la filosofía.",
          duracion: "2 semanas",
          imagen: "/assets/images/temas/aristoteles.jpg",
          sesiones: [
            {
              id: 1,
              titulo: "Aristóteles: el estudiante que superó al maestro",
              descripcion: "Introducimos a Aristóteles y cómo su pensamiento se diferenció del de su maestro Platón.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Aristóteles (384-322 a.C.) fue discípulo de Platón, pero desarrolló un sistema filosófico muy diferente, más centrado en la observación y el mundo natural.",
                conceptosClave: [
                  "Empirismo aristotélico",
                  "Forma y materia",
                  "Las cuatro causas",
                  "Sustancia y accidentes"
                ],
                actividades: [
                  {
                    tipo: "comparacion",
                    titulo: "Platón vs. Aristóteles",
                    descripcion: "Crea una tabla comparativa entre las ideas principales de Platón y Aristóteles."
                  },
                  {
                    tipo: "analisis",
                    titulo: "Las cuatro causas",
                    descripcion: "Analiza un objeto cotidiano según las cuatro causas aristotélicas: material, formal, eficiente y final."
                  }
                ],
                conexionAdolescente: "Como Aristóteles, estás aprendiendo a observar el mundo por ti mismo y a formar tus propias conclusiones, a veces diferentes de las de tus 'maestros'."
              }
            },
            {
              id: 2,
              titulo: "La lógica: pensar correctamente para vivir mejor",
              descripcion: "Exploramos las contribuciones de Aristóteles a la lógica y cómo nos ayudan a pensar con claridad.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Aristóteles es considerado el padre de la lógica formal, desarrollando herramientas para distinguir los argumentos válidos de los inválidos.",
                conceptosClave: [
                  "Silogismo",
                  "Premisas y conclusiones",
                  "Falacias lógicas",
                  "Categorías aristotélicas"
                ],
                actividades: [
                  {
                    tipo: "practica",
                    titulo: "Construyendo silogismos",
                    descripcion: "Practica la creación de silogismos válidos e identifica por qué otros son inválidos."
                  },
                  {
                    tipo: "deteccion",
                    titulo: "Cazadores de falacias",
                    descripcion: "Identifica falacias lógicas comunes en publicidad, redes sociales o discursos políticos."
                  }
                ],
                conexionAdolescente: "En un mundo lleno de información y desinformación, la capacidad de pensar lógicamente y detectar argumentos falaces es una habilidad esencial para tu vida."
              }
            },
            {
              id: 3,
              titulo: "La felicidad según Aristóteles - ¿Qué nos hace realmente felices?",
              descripcion: "Analizamos la ética aristotélica y su concepto de eudaimonía o felicidad como florecimiento humano.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Para Aristóteles, la felicidad (eudaimonía) no era un simple sentimiento, sino el resultado de vivir virtuosamente y desarrollar plenamente nuestras capacidades humanas.",
                conceptosClave: [
                  "Eudaimonía (felicidad/florecimiento)",
                  "Virtudes éticas e intelectuales",
                  "Doctrina del término medio",
                  "Amistad y comunidad"
                ],
                actividades: [
                  {
                    tipo: "reflexion",
                    titulo: "Mi concepto de felicidad",
                    descripcion: "Reflexiona: ¿Qué significa la felicidad para ti? ¿Coincide con la visión aristotélica?"
                  },
                  {
                    tipo: "analisis",
                    titulo: "Virtudes y vicios",
                    descripcion: "Analiza diferentes virtudes según la doctrina del término medio (entre exceso y defecto)."
                  }
                ],
                conexionAdolescente: "Como adolescente, estás formando tu propia idea de lo que significa una vida buena y feliz. La perspectiva de Aristóteles ofrece una alternativa profunda a la visión consumista de la felicidad."
              }
            },
            {
              id: 4,
              titulo: "Debate: Diferentes tipos de felicidad en la adolescencia",
              descripcion: "Organizamos un debate estructurado sobre diferentes concepciones de la felicidad relevantes para los adolescentes.",
              tipo: "actividad",
              duracion: 45,
              contenido: {
                introduccion: "En esta actividad, debatiremos diferentes concepciones de la felicidad y su relevancia en la vida adolescente, utilizando la perspectiva aristotélica como punto de partida.",
                instrucciones: [
                  "La clase se dividirá en equipos, cada uno defendiendo una perspectiva diferente sobre la felicidad.",
                  "Cada equipo tendrá tiempo para preparar sus argumentos.",
                  "Se realizará un debate estructurado con tiempo para presentación, refutación y conclusiones.",
                  "Al final, reflexionaremos sobre qué perspectivas nos parecen más convincentes y por qué."
                ],
                perspectivasDebate: [
                  "Perspectiva hedonista: La felicidad consiste en maximizar el placer y minimizar el dolor.",
                  "Perspectiva aristotélica: La felicidad es el resultado de desarrollar virtudes y alcanzar la excelencia humana.",
                  "Perspectiva social: La felicidad depende principalmente de nuestras relaciones y conexiones con otros.",
                  "Perspectiva de logros: La felicidad proviene de establecer y alcanzar metas significativas.",
                  "Perspectiva de autenticidad: La felicidad consiste en ser fiel a uno mismo y vivir según los propios valores."
                ],
                criteriosEvaluacion: [
                  "Calidad y coherencia de los argumentos",
                  "Uso de ejemplos relevantes para la vida adolescente",
                  "Capacidad para responder a contraargumentos",
                  "Respeto hacia perspectivas diferentes"
                ],
                conexionAdolescente: "Este debate te ayudará a clarificar tu propia concepción de la felicidad y a entender cómo diferentes filosofías pueden influir en tus decisiones diarias."
              }
            }
          ]
        },
        {
          id: 3,
          titulo: "Filosofías para Vivir Mejor",
          descripcion: "Exploramos escuelas filosóficas prácticas que ofrecen guías para una vida buena y feliz.",
          duracion: "1 semana",
          imagen: "/assets/images/temas/filosofias-practicas.jpg",
          sesiones: [
            {
              id: 1,
              titulo: "Estoicos: controlar lo que puedo controlar",
              descripcion: "Conocemos la filosofía estoica y su enfoque en la distinción entre lo que podemos y no podemos controlar.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "El estoicismo, fundado por Zenón de Citio, enseña que la felicidad depende de aceptar lo que no podemos cambiar y enfocarnos en lo que sí está bajo nuestro control.",
                conceptosClave: [
                  "Dicotomía del control",
                  "Apatía (ausencia de pasiones perturbadoras)",
                  "Virtud como único bien",
                  "Cosmopolitismo estoico"
                ],
                actividades: [
                  {
                    tipo: "ejercicio",
                    titulo: "Círculos de control",
                    descripcion: "Dibuja dos círculos: uno para lo que puedes controlar y otro para lo que no. Clasifica diferentes aspectos de tu vida."
                  },
                  {
                    tipo: "practica",
                    titulo: "Diario estoico",
                    descripcion: "Practica la reflexión estoica escribiendo sobre un evento reciente que te molestó y cómo podrías aplicar principios estoicos."
                  }
                ],
                conexionAdolescente: "La adolescencia está llena de situaciones fuera de tu control (reglas escolares, decisiones familiares, cambios físicos). El estoicismo ofrece herramientas para manejar estas situaciones con serenidad."
              }
            },
            {
              id: 2,
              titulo: "Epicúreos: el verdadero placer vs. placeres superficiales",
              descripcion: "Exploramos la filosofía epicúrea y su sofisticada concepción del placer y la felicidad.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Contrario a la creencia popular, el epicureísmo no promueve el hedonismo desenfrenado, sino una vida de placeres simples, amistades profundas y ausencia de dolor y preocupación.",
                conceptosClave: [
                  "Placeres naturales y necesarios",
                  "Ataraxia (tranquilidad mental)",
                  "Amistad epicúrea",
                  "Tetrafármaco (cuádruple remedio)"
                ],
                actividades: [
                  {
                    tipo: "clasificacion",
                    titulo: "Jerarquía de placeres",
                    descripcion: "Clasifica diferentes placeres según las categorías epicúreas: naturales y necesarios, naturales pero no necesarios, ni naturales ni necesarios."
                  },
                  {
                    tipo: "reflexion",
                    titulo: "Placeres simples",
                    descripcion: "Reflexiona sobre los placeres simples que más disfrutas y cómo podrían formar parte de una vida buena."
                  }
                ],
                conexionAdolescente: "En una cultura que promueve el consumismo y placeres cada vez más intensos, el epicureísmo ofrece una alternativa: encontrar satisfacción en lo simple y cultivar relaciones significativas."
              }
            },
            {
              id: 3,
              titulo: "Taller: Crear tu 'manual de vida' filosófico",
              descripcion: "Aplicamos las enseñanzas de diferentes escuelas filosóficas para crear un manual personal de vida.",
              tipo: "actividad",
              duracion: 45,
              contenido: {
                introduccion: "En este taller, crearás tu propio 'manual de vida' filosófico, incorporando ideas de las diferentes escuelas que hemos estudiado.",
                instrucciones: [
                  "Reflexiona sobre las ideas filosóficas que más te han resonado hasta ahora.",
                  "Selecciona principios o prácticas de diferentes filósofos que te parezcan útiles para tu vida.",
                  "Adapta estos principios a tu realidad y necesidades específicas como adolescente.",
                  "Organiza tu manual en secciones temáticas (ej. relaciones, emociones, decisiones, etc.).",
                  "Incluye ejercicios prácticos o recordatorios que puedas aplicar en situaciones reales."
                ],
                ejemplosSecciones: [
                  "Cómo manejar situaciones fuera de mi control (estoicismo)",
                  "Preguntas socráticas para tomar mejores decisiones",
                  "Mi definición de felicidad (inspirada en Aristóteles)",
                  "Placeres que vale la pena cultivar (epicureísmo)",
                  "Cómo distinguir la verdad de las 'sombras' (Platón)"
                ],
                formatosPosibles: [
                  "Cuaderno físico decorado",
                  "Documento digital con imágenes",
                  "Presentación visual",
                  "Aplicación de notas en el teléfono",
                  "Podcast o grabación de audio"
                ],
                conexionAdolescente: "Este manual será una herramienta personalizada que podrás consultar cuando enfrentes desafíos típicos de la adolescencia, conectando la sabiduría antigua con tu vida moderna."
              }
            }
          ]
        }
      ]
    },
    {
      id: 3,
      titulo: "El Encuentro entre Fe y Razón",
      descripcion: "Exploramos cómo el pensamiento filosófico se relacionó con la fe religiosa durante la Edad Media, creando síntesis que marcaron la historia del pensamiento occidental.",
      duracion: "4 semanas",
      imagen: "/assets/images/parciales/fe-razon.jpg",
      temas: [
        {
          id: 1,
          titulo: "Los Primeros Pensadores Cristianos",
          descripcion: "Analizamos cómo los primeros pensadores cristianos integraron la filosofía griega con la nueva fe.",
          duracion: "2 semanas",
          imagen: "/assets/images/temas/pensadores-cristianos.jpg",
          sesiones: [
            {
              id: 1,
              titulo: "¿Se puede ser cristiano y filósofo? - Los primeros intentos",
              descripcion: "Exploramos los primeros intentos de reconciliar la filosofía griega con la fe cristiana.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Cuando el cristianismo se expandió por el mundo grecorromano, surgió la pregunta: ¿debían los cristianos rechazar la filosofía pagana o podían integrarla con su fe?",
                conceptosClave: [
                  "Apologética cristiana",
                  "Logos cristiano",
                  "Padres de la Iglesia",
                  "Helenización del cristianismo"
                ],
                actividades: [
                  {
                    tipo: "analisis",
                    titulo: "Puntos de encuentro",
                    descripcion: "Analiza qué elementos de la filosofía griega eran compatibles con el cristianismo y cuáles presentaban conflictos."
                  },
                  {
                    tipo: "debate",
                    titulo: "Fe vs. razón",
                    descripcion: "Debate: ¿La fe y la razón son complementarias o contradictorias? ¿Pueden coexistir?"
                  }
                ],
                conexionAdolescente: "Como adolescente, puedes estar experimentando tensiones entre diferentes sistemas de creencias o entre tradición y pensamiento crítico. Este tema explora cómo otros han navegado esas tensiones."
              }
            },
            {
              id: 2,
              titulo: "San Agustín: 'Cree para entender, entiende para creer'",
              descripcion: "Conocemos a San Agustín y su influyente síntesis de filosofía platónica y fe cristiana.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "San Agustín de Hipona (354-430) fue uno de los pensadores más influyentes del cristianismo primitivo, integrando elementos del platonismo en su teología.",
                conceptosClave: [
                  "Interioridad agustiniana",
                  "Iluminación divina",
                  "Problema del mal",
                  "Ciudad de Dios vs. Ciudad terrena"
                ],
                actividades: [
                  {
                    tipo: "reflexion",
                    titulo: "Viaje interior",
                    descripcion: "Siguiendo el método agustiniano, reflexiona sobre una verdad que hayas descubierto mirando 'dentro de ti'."
                  },
                  {
                    tipo: "analisis",
                    titulo: "El problema del mal",
                    descripcion: "Analiza la explicación agustiniana del mal como 'ausencia de bien' y compárala con tu propia comprensión."
                  }
                ],
                conexionAdolescente: "La búsqueda de identidad y verdad personal de Agustín resuena con tu propia búsqueda adolescente. Su mensaje de mirar dentro de uno mismo para encontrar la verdad sigue siendo relevante."
              }
            },
            {
              id: 3,
              titulo: "Las Confesiones - La búsqueda personal de Dios",
              descripcion: "Exploramos la obra autobiográfica de San Agustín y su relevancia para la búsqueda personal de sentido.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "'Las Confesiones' de San Agustín es considerada la primera autobiografía espiritual de Occidente, narrando su turbulenta juventud y su conversión al cristianismo.",
                conceptosClave: [
                  "Conversión espiritual",
                  "Inquietud existencial",
                  "Memoria y tiempo",
                  "Narrativa personal"
                ],
                actividades: [
                  {
                    tipo: "lectura",
                    titulo: "Fragmentos de las Confesiones",
                    descripcion: "Lee y analiza fragmentos seleccionados de las Confesiones, identificando temas relevantes para tu vida."
                  },
                  {
                    tipo: "reflexion",
                    titulo: "Mi propio camino",
                    descripcion: "Reflexiona sobre tu propio 'camino de búsqueda': ¿Qué preguntas importantes te has planteado? ¿Qué respuestas has encontrado?"
                  }
                ],
                conexionAdolescente: "La adolescencia, como la juventud de Agustín, es un tiempo de búsqueda, experimentación y a veces confusión. Su historia muestra que estos periodos de cuestionamiento pueden llevar a descubrimientos profundos."
              }
            },
            {
              id: 4,
              titulo: "Reflexión: Escribir tu propia 'mini-confesión' filosófica",
              descripcion: "Aplicamos el formato introspectivo de San Agustín para reflexionar sobre nuestra propia búsqueda de verdad y sentido.",
              tipo: "actividad",
              duracion: 45,
              contenido: {
                introduccion: "Inspirándonos en 'Las Confesiones' de San Agustín, escribirás tu propia 'mini-confesión' filosófica, reflexionando sobre tu búsqueda personal de verdad y sentido.",
                instrucciones: [
                  "Lee los ejemplos proporcionados de fragmentos de las Confesiones.",
                  "Reflexiona sobre tu propio 'viaje filosófico': preguntas importantes, momentos de duda, descubrimientos significativos.",
                  "Escribe tu texto en primera persona, dirigiéndote a un 'tú' (que puede ser Dios, la Verdad, tu yo futuro, etc.).",
                  "Sé honesto sobre tus dudas y certezas, siguiendo el estilo introspectivo de Agustín.",
                  "Comparte voluntariamente tu texto con la clase o mantenlo privado."
                ],
                ejemplosFragmentos: [
                  "'Tarde te amé, hermosura tan antigua y tan nueva, tarde te amé. Y he aquí que tú estabas dentro de mí y yo fuera, y por fuera te buscaba...'",
                  "'Nos has hecho para ti y nuestro corazón está inquieto hasta que descanse en ti.'",
                  "'Quería yo hacer el mal por el mal mismo. No buscaba nada a través de la vergüenza, sino la vergüenza misma.'"
                ],
                temasInspiracion: [
                  "Tu búsqueda de identidad y propósito",
                  "Momentos de confusión o claridad en tu vida",
                  "Preguntas existenciales que te inquietan",
                  "Tensiones entre diferentes influencias en tu vida",
                  "Tu relación con la verdad, la duda, la fe o la razón"
                ],
                conexionAdolescente: "Esta actividad te invita a ver tu adolescencia no solo como una etapa confusa, sino como un valioso viaje filosófico y espiritual, digno de reflexión y expresión."
              }
            }
          ]
        },
        {
          id: 2,
          titulo: "La Gran Síntesis Medieval",
          descripcion: "Exploramos la cumbre del pensamiento medieval con Santo Tomás de Aquino y su síntesis entre aristotelismo y cristianismo.",
          duracion: "1.5 semanas",
          imagen: "/assets/images/temas/sintesis-medieval.jpg",
          sesiones: [
            {
              id: 1,
              titulo: "Santo Tomás de Aquino: el doctor universal",
              descripcion: "Conocemos a Santo Tomás y su ambicioso proyecto de armonizar fe y razón a través de Aristóteles.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Santo Tomás de Aquino (1225-1274) emprendió la monumental tarea de reconciliar la filosofía aristotélica, recién redescubierta en Europa, con la teología cristiana.",
                conceptosClave: [
                  "Síntesis tomista",
                  "Armonía entre fe y razón",
                  "Analogía del ser",
                  "Ley natural"
                ],
                actividades: [
                  {
                    tipo: "comparacion",
                    titulo: "Agustín vs. Tomás",
                    descripcion: "Compara los enfoques de San Agustín (influido por Platón) y Santo Tomás (influido por Aristóteles) sobre la relación entre fe y razón."
                  },
                  {
                    tipo: "analisis",
                    titulo: "Método escolástico",
                    descripcion: "Analiza la estructura de un argumento tomista, con objeciones, respuestas y solución."
                  }
                ],
                conexionAdolescente: "Como Santo Tomás, estás aprendiendo a integrar diferentes fuentes de conocimiento y a resolver aparentes contradicciones entre distintas autoridades o perspectivas."
              }
            },
            {
              id: 2,
              titulo: "¿Se puede demostrar que Dios existe? - Las 5 vías",
              descripcion: "Analizamos los famosos argumentos de Santo Tomás para demostrar racionalmente la existencia de Dios.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Las 'cinco vías' de Santo Tomás son argumentos filosóficos que intentan demostrar la existencia de Dios partiendo de la observación del mundo natural.",
                conceptosClave: [
                  "Argumento del movimiento",
                  "Argumento de la causa eficiente",
                  "Argumento de la contingencia",
                  "Argumento de los grados de perfección",
                  "Argumento del orden teleológico"
                ],
                actividades: [
                  {
                    tipo: "analisis",
                    titulo: "Diseccionando una vía",
                    descripcion: "Analiza en detalle una de las cinco vías, identificando premisas, conclusión y posibles objeciones."
                  },
                  {
                    tipo: "debate",
                    titulo: "¿Convencen estos argumentos?",
                    descripcion: "Debate: ¿Son convincentes estos argumentos hoy en día? ¿Por qué sí o por qué no?"
                  }
                ],
                conexionAdolescente: "Independientemente de tus creencias personales, estos argumentos te invitan a pensar críticamente sobre grandes cuestiones y a evaluar la solidez de diferentes tipos de razonamiento."
              }
            },
            {
              id: 3,
              titulo: "Razón y fe: dos caminos hacia la verdad",
              descripcion: "Exploramos la visión tomista de la complementariedad entre razón y fe como caminos hacia la verdad.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Para Santo Tomás, la razón y la fe son dos caminos complementarios hacia la verdad: la razón puede demostrar algunas verdades sobre Dios, mientras que otras solo son accesibles mediante la revelación.",
                conceptosClave: [
                  "Verdades naturales vs. sobrenaturales",
                  "Límites de la razón humana",
                  "Fe como complemento, no oposición",
                  "Teología natural"
                ],
                actividades: [
                  {
                    tipo: "clasificacion",
                    titulo: "Razón, fe o ambas",
                    descripcion: "Clasifica diferentes afirmaciones según si pertenecen al ámbito de la razón, la fe o ambas."
                  },
                  {
                    tipo: "reflexion",
                    titulo: "Mis fuentes de conocimiento",
                    descripcion: "Reflexiona: ¿Qué papel juegan la razón, la experiencia, la autoridad y la intuición en tu propia búsqueda de verdad?"
                  }
                ],
                conexionAdolescente: "En tu vida, también navegas entre diferentes formas de conocimiento: lo que aprendes en la escuela (razón), lo que te enseñan tus padres o tradiciones (autoridad), y tus propias experiencias e intuiciones."
              }
            },
            {
              id: 4,
              titulo: "Investigación: Pensadores de otras religiones (Maimónides, Averroes)",
              descripcion: "Ampliamos nuestra perspectiva explorando cómo pensadores judíos y musulmanes abordaron la relación entre fe y razón.",
              tipo: "actividad",
              duracion: 45,
              contenido: {
                introduccion: "La síntesis entre fe y razón no fue exclusiva del cristianismo. Pensadores judíos como Maimónides y musulmanes como Averroes también desarrollaron importantes trabajos en esta área.",
                instrucciones: [
                  "Forma un equipo de 2-3 personas.",
                  "Elige uno de los pensadores propuestos u otro de tu interés (con aprobación del profesor).",
                  "Investiga su vida, contexto histórico y principales ideas sobre la relación entre fe y razón.",
                  "Compara su enfoque con el de San Agustín o Santo Tomás.",
                  "Prepara una presentación breve para compartir con la clase."
                ],
                pensadoresSugeridos: [
                  "Maimónides (Moshe ben Maimon): filósofo judío que intentó conciliar la Torá con Aristóteles.",
                  "Averroes (Ibn Rushd): filósofo musulmán andalusí, gran comentarista de Aristóteles.",
                  "Al-Ghazali: teólogo musulmán que criticó a los filósofos en 'La incoherencia de los filósofos'.",
                  "Avicena (Ibn Sina): filósofo y médico persa que desarrolló una síntesis neoplatónica del islam."
                ],
                fuentesRecomendadas: [
                  "Enciclopedias filosóficas en línea",
                  "Libros de historia de la filosofía medieval",
                  "Recursos educativos sobre filosofía islámica y judía",
                  "Fragmentos traducidos de obras originales (proporcionados por el profesor)"
                ],
                conexionAdolescente: "Esta investigación te ayudará a apreciar la diversidad del pensamiento filosófico y a entender que las grandes preguntas sobre fe y razón han sido abordadas desde múltiples tradiciones culturales y religiosas."
              }
            }
          ]
        },
        {
          id: 3,
          titulo: "Legado del Pensamiento Medieval",
          descripcion: "Reflexionamos sobre la relevancia contemporánea del pensamiento medieval y su influencia en el mundo moderno.",
          duracion: "0.5 semanas",
          imagen: "/assets/images/temas/legado-medieval.jpg",
          sesiones: [
            {
              id: 1,
              titulo: "¿Qué nos enseña el pensamiento medieval hoy?",
              descripcion: "Exploramos la relevancia contemporánea del pensamiento medieval y su influencia en el mundo moderno.",
              tipo: "teoria",
              duracion: 45,
              contenido: {
                introduccion: "Aunque a menudo se considera la Edad Media como una época oscura, su pensamiento filosófico y teológico sentó las bases para muchos aspectos del mundo moderno.",
                conceptosClave: [
                  "Universidad como institución medieval",
                  "Raíces medievales de la ciencia moderna",
                  "Derechos humanos y dignidad personal",
                  "Diálogo interreligioso"
                ],
                actividades: [
                  {
                    tipo: "investigacion",
                    titulo: "Influencias ocultas",
                    descripcion: "Investiga un aspecto de la vida moderna que tenga raíces en el pensamiento medieval."
                  },
                  {
                    tipo: "reflexion",
                    titulo: "Prejuicios históricos",
                    descripcion: "Reflexiona: ¿Por qué tendemos a subestimar los logros intelectuales de la Edad Media? ¿Qué nos dice esto sobre nuestros prejuicios?"
                  }
                ],
                conexionAdolescente: "Entender la continuidad histórica del pensamiento te ayuda a ver que las ideas que hoy damos por sentadas tienen raíces profundas, y que el conocimiento humano es un proyecto colectivo que trasciende épocas."
              }
            },
            {
              id: 2,
              titulo: "Síntesis: Mesa redonda sobre fe y razón",
              descripcion: "Organizamos una discusión final para sintetizar lo aprendido sobre la relación entre fe y razón.",
              tipo: "actividad",
              duracion: 45,
              contenido: {
                introduccion: "Como cierre de este parcial, realizaremos una mesa redonda para sintetizar nuestras reflexiones sobre la relación entre fe y razón, tanto en el contexto medieval como en nuestra sociedad actual.",
                instrucciones: [
                  "La clase se organizará en círculo para facilitar la conversación.",
                  "El profesor moderará la discusión, planteando preguntas clave.",
                  "Cada estudiante tendrá oportunidad de compartir sus reflexiones.",
                  "El objetivo no es llegar a una conclusión única, sino apreciar la complejidad del tema y las diversas perspectivas."
                ],
                preguntasDiscusion: [
                  "¿Pueden la fe y la razón coexistir armónicamente? ¿En qué condiciones?",
                  "¿Qué podemos aprender de los intentos medievales de síntesis entre fe y filosofía?",
                  "En nuestra sociedad actual, ¿cómo se manifiesta la tensión o armonía entre pensamiento religioso y científico?",
                  "¿Hay áreas de la experiencia humana que la razón no puede explicar completamente?",
                  "¿Cómo balanceas en tu propia vida diferentes formas de conocimiento y creencia?"
                ],
                reglasParticipacion: [
                  "Escucha respetuosamente todas las perspectivas.",
                  "Habla desde tu experiencia personal, no en términos absolutos.",
                  "Haz referencia a lo que hemos aprendido en clase.",
                  "Está bien disentir, pero hazlo con respeto.",
                  "No hay respuestas 'correctas' o 'incorrectas' en esta discusión."
                ],
                conexionAdolescente: "Esta discusión te invita a reflexionar sobre cómo integras diferentes formas de conocimiento y creencia en tu propia vida, un proceso fundamental en el desarrollo de tu identidad como adolescente."
              }
            }
          ]
        }
      ]
    }
  ]
};

export default curriculum;