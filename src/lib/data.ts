import {
  Accessibility,
  GaugeCircle,
  Lock,
  Move,
  ShieldCheck,
  Shuffle,
  Wrench,
  BookCopy,
  Milestone,
  Scaling,
  Users,
  GitBranch,
  FileCode,
  Layers
} from 'lucide-react';
import type { QualityAttribute, Standard, QuizQuestion, Application, HistoryEvent, ImplementationStep, Resource } from './types';

export const historyData: HistoryEvent[] = [
  { year: "1970s", title: "Control de Errores", description: "El enfoque principal era la depuración y corrección de errores (debugging) una vez que el software estaba casi terminado. La calidad era reactiva." },
  { year: "1980s", title: "Nace la Calidad Formal", description: "Aparece la norma IEEE 730, el primer estándar para planes de aseguramiento de la calidad del software (SQA). Se empieza a pensar en la calidad como un proceso planificado." },
  { year: "1990s", title: "Modelos Medibles", description: "La norma ISO/IEC 9126 define un modelo de calidad con atributos medibles (funcionalidad, fiabilidad, usabilidad, etc.), sentando las bases para la evaluación objetiva." },
  { year: "2000s", title: "Madurez de Procesos", description: "Modelos como CMMI y MPS.BR ganan popularidad. El enfoque se desplaza hacia la mejora y la madurez de los procesos de desarrollo como vía para asegurar la calidad." },
  { year: "2011", title: "Redefinición Moderna", description: "La norma ISO/IEC 25010 (SQuaRE) actualiza y expande los atributos de calidad, convirtiéndose en el estándar de facto para la calidad del producto de software." },
  { year: "2020+", title: "Calidad Ágil y Continua", description: "La calidad se integra en los ciclos de vida ágiles y DevOps (DevSecOps). Se automatiza a través de la Integración y Entrega Continua (CI/CD) para un feedback rápido." },
];

export const importanceData = {
  mainReason: "La calidad del software no es un lujo, sino una necesidad que asegura que un producto sea fiable, eficiente y seguro, satisfaciendo tanto a usuarios como a los objetivos del negocio.",
  costlyFailureExample: {
    title: "Fallo Costoso: Ariane 5",
    description: "En 1996, el cohete Ariane 5 explotó por un error de software no detectado en las pruebas, costando más de $370 millones. Un claro ejemplo de por qué la calidad y las pruebas son cruciales."
  },
  benefits: [
    { target: "Usuario", benefit: "Experiencia fluida, confianza en el producto y satisfacción.", icon: Users },
    { target: "Negocio", benefit: "Reducción de costes, mejor reputación y mayor competitividad.", icon: Scaling },
    { target: "Desarrollo", benefit: "Código mantenible, menos estrés y orgullo por el trabajo.", icon: GitBranch },
  ]
};

export const implementationSteps: ImplementationStep[] = [
  { 
    phase: "1. Fase de Planificación",
    description: "Definir qué significa 'calidad' para el proyecto.",
    practices: [
      "Seleccionar estándares (ej. ISO 25010).",
      "Definir métricas clave (ej. tiempo de respuesta < 2s).",
      "Establecer herramientas (Jira, SonarQube)."
    ]
  },
  { 
    phase: "2. Fase de Desarrollo",
    description: "Integrar la calidad en el ciclo de codificación.",
    practices: [
      "Revisiones de código (Pull Requests).",
      "Pruebas unitarias (JUnit, PyTest).",
      "Integración Continua (CI) con GitHub Actions/Jenkins."
    ]
  },
  { 
    phase: "3. Fase de Mantenimiento",
    description: "Asegurar que la calidad no se degrade con el tiempo.",
    practices: [
      "Auditorías periódicas de código.",
      "Análisis estático continuo (SonarQube).",
      "Monitorización de rendimiento (APM)."
    ]
  }
];

export const qualityAttributes: QualityAttribute[] = [
  {
    name: 'Usabilidad',
    description: 'Grado en que un producto puede ser utilizado por usuarios específicos para lograr objetivos con eficacia, eficiencia y satisfacción.',
    icon: Accessibility,
    example: "Analizar si la interfaz es intuitiva y si los flujos de trabajo son lógicos para el usuario final."
  },
  {
    name: 'Confiabilidad',
    description: 'Capacidad de un sistema para funcionar bajo condiciones establecidas durante un período de tiempo determinado.',
    icon: ShieldCheck,
    example: "Medir el tiempo medio entre fallos (MTBF) y la disponibilidad del sistema (ej. 99.9% de uptime)."
  },
  {
    name: 'Eficiencia de Desempeño',
    description: 'Rendimiento relativo a la cantidad de recursos utilizados (CPU, memoria, red) en condiciones establecidas.',
    icon: GaugeCircle,
    example: "Realizar pruebas de carga para verificar tiempos de respuesta y consumo de recursos bajo estrés."
  },
  {
    name: 'Mantenibilidad',
    description: 'Grado con el que un producto puede ser modificado por los mantenedores de forma efectiva y eficiente.',
    icon: Wrench,
    example: "Evaluar la complejidad ciclomática del código, la modularidad y la calidad de la documentación."
  },
  {
    name: 'Seguridad',
    description: 'Grado en que un producto protege la información y los datos contra accesos no autorizados.',
    icon: Lock,
    example: "Realizar pruebas de penetración (pentesting) para encontrar y corregir vulnerabilidades (ej. SQL Injection)."
  },
  {
    name: 'Compatibilidad',
    description: 'Grado en que un producto puede intercambiar información con otros y/o funcionar en el mismo entorno.',
    icon: Shuffle,
    example: "Verificar si la aplicación funciona correctamente en diferentes navegadores (Chrome, Firefox) o si la API se integra bien con otros sistemas."
  },
  {
    name: 'Portabilidad',
    description: 'Grado con el que un sistema puede ser transferido de un entorno de hardware o software a otro.',
    icon: Move,
    example: "Comprobar si la aplicación puede ser desplegada en diferentes sistemas operativos (Windows, Linux) o proveedores de nube (AWS, Azure)."
  },
];


export const standardsAndModels: Standard[] = [
  {
    id: 'iso25010',
    title: 'ISO/IEC 25010',
    subtitle: "Modelo de Calidad del Producto",
    content: 'Define un modelo de calidad de producto de software con ocho características. Es el estándar de referencia actual para evaluar la calidad del producto final.',
    details: 'Las 8 características son: Adecuación funcional, Eficiencia, Compatibilidad, Usabilidad, Fiabilidad, Seguridad, Mantenibilidad y Portabilidad.'
  },
  {
    id: 'iso9126',
    title: 'ISO/IEC 9126',
    subtitle: "Predecesor de ISO 25010",
    content: 'Fue el estándar principal antes de 2011. Definió un modelo con seis características de calidad. Aunque obsoleto, sus conceptos son fundamentales para entender la evolución de la calidad.',
    details: 'Las 6 características eran: Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad y Portabilidad.'
  },
  {
    id: 'cmmi',
    title: 'CMMI',
    subtitle: "Modelo de Madurez de Capacidades",
    content: 'Capability Maturity Model Integration (CMMI) es un modelo para la mejora y evaluación de procesos en organizaciones. Ayuda a las empresas a producir software de mayor calidad de manera consistente.',
    details: 'Se estructura en 5 niveles de madurez: 1-Inicial, 2-Gestionado, 3-Definido, 4-Gestionado Cuantitativamente, 5-Optimizado.'
  },
  {
    id: 'mpsbr',
    title: 'MPS.BR',
    subtitle: 'Mejora de Procesos del Software Brasileño',
    content: 'Es un modelo de calidad de procesos creado en Brasil, adaptado a la realidad de las pequeñas y medianas empresas de software. Es muy popular en Latinoamérica.',
    details: 'Se organiza en 7 niveles de madurez, desde G (parcialmente gestionado) hasta A (en optimización).'
  },
  {
    id: 'spice',
    title: 'SPICE (ISO/IEC 15504)',
    subtitle: 'Evaluación de Procesos de Software',
    content: 'También conocido como SPICE (Software Process Improvement and Capability Determination), este estándar proporciona un marco para la evaluación de los procesos de desarrollo de software.',
    details: 'Define un modelo de 2 dimensiones: una de procesos (qué se hace) y una de capacidad (qué tan bien se hace), con 6 niveles de capacidad.'
  },
  {
    id: 'ieee1061',
    title: 'IEEE 1061',
    subtitle: 'Metodología de Métricas de Calidad',
    content: 'Este estándar se enfoca en establecer un marco para definir y usar métricas de calidad. Proporciona una metodología para identificar, implementar y validar métricas de software.',
    details: 'No define las métricas, sino el proceso para crearlas y aplicarlas de forma rigurosa en un proyecto.'
  },
  {
    id: 'iso12207',
    title: 'ISO/IEC 12207',
    subtitle: 'Ciclo de Vida del Software',
    content: 'Establece un marco común para los procesos del ciclo de vida del software, desde la concepción hasta el retiro. Ayuda a estandarizar la terminología y las actividades en la ingeniería de software.',
    details: 'Define procesos principales (adquisición, desarrollo, operación), de soporte (documentación, QA) y organizacionales (gestión, mejora).'
  },
];

export const advancedQuizQuestions: QuizQuestion[] = [
  {
    question: "El modelo CMMI nivel 5 se conoce como:",
    options: ["Definido", "Gestionado", "Optimizado", "Repetible"],
    correctAnswer: 2,
    explanation: "El nivel 5 de CMMI es el 'Optimizado', donde la organización se enfoca en la mejora continua de sus procesos."
  },
  {
    question: "La 'Adecuación Funcional' en ISO 25010 se refiere a que el software cumple con los requisitos especificados.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation: "Verdadero. La adecuación funcional evalúa si el software hace lo que se supone que debe hacer según las especificaciones."
  },
  {
    question: "¿Qué norma es la predecesora de ISO/IEC 25010?",
    options: ["ISO 9001", "CMMI", "ISO/IEC 9126", "IEEE 730"],
    correctAnswer: 2,
    explanation: "ISO/IEC 9126 fue el estándar de calidad de producto que fue actualizado y reemplazado por la serie ISO/IEC 25010."
  },
  {
    question: "El análisis estático de código con herramientas como SonarQube se realiza principalmente en la fase de:",
    options: ["Planificación", "Desarrollo", "Mantenimiento", "Despliegue"],
    correctAnswer: 1,
    explanation: "El análisis estático se integra en la fase de desarrollo, a menudo en el pipeline de CI, para detectar problemas de calidad y seguridad temprano."
  },
  {
    question: "La capacidad de un software de funcionar en diferentes sistemas operativos (Linux, Windows) es un ejemplo de:",
    options: ["Compatibilidad", "Portabilidad", "Usabilidad", "Confiabilidad"],
    correctAnswer: 1,
    explanation: "La portabilidad es la capacidad del software para ser transferido y ejecutado en diferentes entornos de hardware o software."
  },
  {
    question: "El modelo MPS.BR es una adaptación de CMMI popular en:",
    options: ["Europa", "Asia", "Norteamérica", "Latinoamérica"],
    correctAnswer: 3,
    explanation: "MPS.BR (Mejora de Procesos del Software Brasileño) fue creado en Brasil y es ampliamente adoptado en Latinoamérica."
  },
  {
    question: "La norma ISO/IEC 12207 se enfoca en:",
    options: ["Métricas de calidad", "Procesos del ciclo de vida del software", "Seguridad de la información", "Madurez de procesos"],
    correctAnswer: 1,
    explanation: "ISO/IEC 12207 establece un marco estándar para los procesos a lo largo de todo el ciclo de vida del software."
  },
  {
    question: "La Integración Continua (CI) es una práctica que pertenece a la era de 'Calidad Ágil y Continua'.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation: "Verdadero. La CI/CD es fundamental en DevOps y metodologías ágiles para automatizar las pruebas y asegurar la calidad continuamente."
  },
  {
    question: "Un tiempo de respuesta lento de una aplicación afecta principalmente a la:",
    options: ["Mantenibilidad", "Seguridad", "Eficiencia de Desempeño", "Portabilidad"],
    correctAnswer: 2,
    explanation: "La eficiencia de desempeño se relaciona con el rendimiento del software en términos de tiempo de respuesta y uso de recursos."
  },
  {
    question: "¿Cuál de estos NO es un beneficio directo de la calidad del software para el negocio?",
    options: ["Reducción de costes de mantenimiento", "Mejora de la reputación", "Aumento de la complejidad del código", "Mayor competitividad"],
    correctAnswer: 2,
    explanation: "Un software de alta calidad tiende a tener un código más simple y mantenible, no más complejo. La complejidad suele ser un indicador de baja calidad."
  }
];

export const resourcesData: Resource[] = [
  { title: "ISO.org", description: "Organización Internacional de Normalización. Encuentra los documentos oficiales de las normas de la familia ISO/IEC.", url: "https://www.iso.org" },
  { title: "IEEE.org", description: "Instituto de Ingenieros Eléctricos y Electrónicos. Publican estándares relevantes para la ingeniería de software.", url: "https://www.ieee.org" },
  { title: "CMMI Institute", description: "Información oficial sobre el modelo CMMI, certificaciones y recursos para la mejora de procesos.", url: "https://cmmiinstitute.com/" },
  { title: "Martin Fowler's Blog", description: "Artículos de referencia sobre desarrollo de software, arquitectura y buenas prácticas de calidad.", url: "https://martinfowler.com/" },
  { title: "SonarQube", description: "Herramienta líder para el análisis estático de código y la gestión continua de la calidad del código.", url: "https://www.sonarsource.com/products/sonarqube/" },
  { title: "OWASP Foundation", description: "Comunidad abierta dedicada a mejorar la seguridad del software. Referencia obligada para la seguridad de aplicaciones.", url: "https://owasp.org/" }
];

export const mockApplications: Application[] = [
    {
        id: '1',
        name: 'Plataforma de E-learning "SaberMás"',
        description: 'Un LMS para cursos online con foros y evaluaciones.',
        url: 'https://sabermas.example.com',
        createdAt: '2024-05-10',
        averageScore: 4.2
    },
    {
        id: '2',
        name: 'App de Matemáticas "Calculus"',
        description: 'Aplicación móvil para practicar cálculo diferencial e integral.',
        url: 'https://calculus-app.example.com',
        createdAt: '2024-04-22',
        averageScore: 3.8
    },
     {
        id: '3',
        name: 'Juego Educativo "GeoQuest"',
        description: 'Un juego para aprender geografía mundial de forma interactiva.',
        url: 'https://geoquest.example.com',
        createdAt: '2024-05-20',
        averageScore: 4.5
    }
]

export const quizQuestions: QuizQuestion[] = [
  {
    question: '¿Cuál de los siguientes NO es un atributo principal de calidad según ISO/IEC 25010?',
    options: ['Usabilidad', 'Velocidad de desarrollo', 'Seguridad', 'Mantenibilidad'],
    correctAnswer: 1,
    explanation: 'La velocidad de desarrollo es una métrica de proceso, no un atributo de calidad del producto final según ISO/IEC 25010.'
  },
  {
    question: 'El modelo CMMI se utiliza principalmente para:',
    options: ['Evaluar la interfaz de usuario', 'Medir el consumo de memoria', 'Evaluar la madurez de los procesos de una organización', 'Probar la seguridad de una aplicación'],
    correctAnswer: 2,
    explanation: 'CMMI (Capability Maturity Model Integration) es un modelo de mejora y evaluación de la madurez de los procesos de desarrollo de software.'
  },
  {
    question: 'La capacidad de un software para ser transferido de un entorno a otro se conoce como:',
    options: ['Compatibilidad', 'Portabilidad', 'Interoperabilidad', 'Adaptabilidad'],
    correctAnswer: 1,
    explanation: 'La portabilidad es el atributo de calidad que mide la facilidad con la que el software puede ser transferido a diferentes entornos.'
  },
  {
    question: '¿Qué estándar fue el predecesor directo de ISO/IEC 25010?',
    options: ['ISO 9001', 'IEEE 1061', 'ISO/IEC 9126', 'CMMI'],
    correctAnswer: 2,
    explanation: 'ISO/IEC 9126 es el estándar anterior que fue reemplazado y mejorado por ISO/IEC 25010.'
  }
];
