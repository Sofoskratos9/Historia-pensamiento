# La Odisea del Pensamiento

## Aplicación Web Progresiva (PWA) Educativa

Esta aplicación está diseñada específicamente para estudiantes de 3º de secundaria (9º grado, 14-15 años) en México. Transforma el currículo de "Historia del Pensamiento" en una aventura de aprendizaje gamificada, interactiva y relevante.

### Objetivo Educativo

El objetivo no es memorizar datos, sino desarrollar el pensamiento crítico y conectar las grandes ideas filosóficas con los dilemas y la vida cotidiana de un adolescente.

### Principios Pedagógicos

- **Gamificación Narrativa**: El alumno es un "Navegante del Tiempo" que viaja por las épocas del pensamiento.
- **Aprendizaje Activo y Basado en Retos**: Cada concepto se introduce a través de un reto, un dilema o una micro-actividad.
- **Microlearning y Atención Sostenida**: Los temas complejos se dividen en "píldoras de conocimiento" de 5-7 minutos.
- **Conexión Emocional y Relevancia Personal**: Cada filósofo o idea se introduce con una pregunta que resuene con la vida adolescente.
- **Evaluación Formativa y Retroalimentación Instantánea**: El error es una oportunidad de aprendizaje.
- **Cognición Social**: Los alumnos pueden ver las respuestas de otros a preguntas abiertas y votar por las más interesantes.

### Estructura del Proyecto

- `/public`: Archivos estáticos y recursos para la PWA
- `/src`: Código fuente de la aplicación
  - `/components`: Componentes reutilizables de React
  - `/pages`: Páginas principales de la aplicación
  - `/context`: Contextos de React para gestión de estado
  - `/hooks`: Hooks personalizados
  - `/utils`: Funciones de utilidad
  - `/data`: Datos estructurados del currículo
  - `/assets`: Imágenes, iconos y otros recursos
  - `/styles`: Estilos CSS/SCSS

### Tecnologías Utilizadas

- React.js: Biblioteca de JavaScript para construir interfaces de usuario
- Next.js: Framework de React para aplicaciones web
- PWA: Características de Progressive Web App para experiencia móvil
- CSS Modules/SCSS: Para estilos modulares y mantenibles
- LocalStorage/IndexedDB: Para almacenamiento local del progreso del estudiante