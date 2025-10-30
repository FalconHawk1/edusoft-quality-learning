
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
  Layers,
  CheckCircle,
  XCircle,
  Lightbulb,
  TestTube,
  FileText,
  GraduationCap
} from 'lucide-react';
import type {
  IntroductionContent,
  QualityStandard,
  QualityModel,
  SoftwareStandardConcept,
  CodingBestPractice,
  TestingAndEvaluationContent,
  ConclusionContent,
  Resource,
  Application
} from './types';

// --- 1. Introducción a la Calidad del Software ---
export const introductionContent: IntroductionContent = {
  definition: "La calidad del software es el grado en que un sistema, componente o proceso cumple con los requisitos especificados y las necesidades o expectativas del cliente o usuario. No se trata solo de la ausencia de errores, sino de una medida multidimensional que abarca la fiabilidad, usabilidad, eficiencia, seguridad y más.",
  importance: "Integrar la calidad en todo el ciclo de vida del desarrollo de software (SDLC) es crucial. Permite detectar problemas de manera temprana, reduciendo costes y tiempo. Un enfoque proactivo en la calidad resulta en un producto final robusto, seguro y que genera confianza, lo cual es vital para el éxito del negocio y la satisfacción del usuario.",
  history: [
    { year: "1970s", title: "Control de Errores Reactivo", description: "El enfoque era la depuración (debugging) post-desarrollo. La calidad se entendía como la corrección de fallos encontrados antes de la entrega." },
    { year: "1980s", title: "Aseguramiento de la Calidad (SQA)", description: "Nacen los primeros estándares formales como IEEE 730. La calidad se planifica y se asegura a través de procesos definidos, no solo se reacciona a errores." },
    { year: "1990s", title: "Modelos de Calidad Medibles", description: "La norma ISO/IEC 9126 introduce un modelo de calidad con atributos medibles, sentando las bases para una evaluación objetiva y cuantitativa del producto." },
    { year: "2000s", title: "Madurez de Procesos", description: "Modelos como CMMI ganan tracción. El foco se desplaza hacia la mejora de los procesos de desarrollo como la vía principal para asegurar la calidad del producto final." },
    { year: "2011", title: "Estándar Moderno (SQuaRE)", description: "La norma ISO/IEC 25010 (SQuaRE) redefine y expande los atributos de calidad, convirtiéndose en el estándar de facto para la industria." },
    { year: "2020+", title: "Calidad Ágil y Continua", description: "La calidad se integra en los ciclos de vida ágiles y DevOps (DevSecOps). La automatización de pruebas y la entrega continua (CI/CD) son clave para un feedback rápido." },
  ],
  influentialStandards: "Normas como IEEE 730 (Planes de SQA), ISO/IEC 9126 (Modelo de Calidad), y su sucesora, ISO/IEC 25010 (SQuaRE), han sido fundamentales para estandarizar y profesionalizar la ingeniería de software.",
  famousFailures: [
    { title: "Ariane 5 (1996)", description: "Un error de conversión de datos en el software de navegación provocó la autodestrucción del cohete 37 segundos después del despegue. El fallo costó más de $370 millones y se debió a la reutilización de código de un sistema anterior sin pruebas adecuadas para el nuevo entorno." },
    { title: "Therac-25 (1985-1987)", description: "Una máquina de radioterapia causó sobredosis masivas de radiación a varios pacientes debido a un error de software conocido como 'condición de carrera' (race condition), resultando en muertes y lesiones graves. Es un caso de estudio sobre la importancia de las pruebas en sistemas críticos." },
  ]
};

// --- 2. Normas de Calidad del Software ---
export const qualityStandards: QualityStandard[] = [
  {
    id: 'iso25010',
    title: 'ISO/IEC 25010 (SQuaRE)',
    description: "Es el estándar de referencia para la calidad del producto de software. Define un modelo compuesto por ocho características que, a su vez, se dividen en sub-características medibles.",
    icon: BookCopy,
    attributes: [
      { name: 'Adecuación Funcional', example: 'Un sistema de e-commerce que permite añadir productos al carrito, procesar pagos y gestionar pedidos correctamente, cumpliendo todos los requisitos especificados.', icon: CheckCircle },
      { name: 'Eficiencia de Desempeño', example: 'Una consulta a la base de datos que devuelve resultados en menos de 500ms bajo una carga de 1000 usuarios concurrentes, utilizando una cantidad de memoria y CPU razonable.', icon: GaugeCircle },
      { name: 'Compatibilidad', example: 'Una aplicación web que funciona y se visualiza correctamente en los navegadores Chrome, Firefox y Safari, y cuya API puede ser consumida sin problemas por sistemas externos.', icon: Shuffle },
      { name: 'Usabilidad', example: 'Una interfaz de usuario intuitiva donde un nuevo usuario puede completar el proceso de registro en menos de un minuto sin necesidad de un manual.', icon: Accessibility },
      { name: 'Fiabilidad', example: 'Un servidor de aplicaciones que mantiene un uptime del 99.99% y que, ante un error inesperado, realiza un reinicio automático sin pérdida de datos.', icon: ShieldCheck },
      { name: 'Seguridad', example: 'Un formulario de login que previene ataques de inyección SQL y protege las contraseñas de los usuarios mediante algoritmos de hashing robustos.', icon: Lock },
      { name: 'Mantenibilidad', example: 'Código modular y bien documentado que permite a un nuevo desarrollador corregir un bug o añadir una nueva funcionalidad con un esfuerzo mínimo.', icon: Wrench },
      { name: 'Portabilidad', example: 'Una aplicación construida con Docker que puede ser desplegada en un servidor local, en AWS o en Azure sin necesidad de realizar cambios en el código.', icon: Move },
    ]
  },
  {
    id: 'iso9126',
    title: 'ISO/IEC 9126',
    description: "Predecesor de la ISO 25010, este estándar fue pionero en definir un modelo de calidad estructurado. Estableció seis características clave que sentaron las bases para la evaluación moderna de software. Aunque fue reemplazado, su influencia es aún visible.",
    icon: Milestone,
    structure: "Definió 6 características: Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad y Portabilidad. La principal diferencia con la ISO 25010 es que esta última dividió la 'Funcionalidad' en 'Adecuación Funcional' y añadió 'Seguridad' y 'Compatibilidad' como características de primer nivel."
  },
  {
    id: 'ieee1061',
    title: 'IEEE 1061',
    description: "Este estándar se centra en la metodología para establecer un sistema de métricas de calidad de software. No define las métricas en sí, sino el proceso para identificarlas, implementarlas, analizarlas y validarlas de forma rigurosa y adaptada a un proyecto específico.",
    icon: FileText,
    application: "Por ejemplo, para medir la 'Mantenibilidad', el estándar IEEE 1061 guiaría a un equipo a definir métricas como la 'Complejidad Ciclomática' (usando una herramienta como SonarQube), el 'Índice de Mantenibilidad', o el 'Número de líneas de código por módulo'."
  },
  {
    id: 'iso12207',
    title: 'ISO/IEC 12207',
    description: "Establece un marco de trabajo común para los procesos del ciclo de vida del software. Su objetivo es estandarizar la terminología y las actividades, desde la concepción de una idea hasta el retiro del software.",
    icon: Layers,
    structure: "Define tres tipos de procesos: 1) Principales (Adquisición, Suministro, Desarrollo, Operación, Mantenimiento), 2) De Soporte (Documentación, Gestión de la Configuración, Aseguramiento de la Calidad) y 3) Organizacionales (Gestión, Infraestructura, Mejora, Formación)."
  },
  {
    id: 'iso90003',
    title: 'ISO/IEC 90003',
    description: "Proporciona directrices para la aplicación de la norma de gestión de calidad ISO 9001 a la adquisición, suministro, desarrollo, operación y mantenimiento de software. Esencialmente, 'traduce' los requisitos de la ISO 9001 al contexto específico de la ingeniería de software.",
    icon: GraduationCap,
    application: "Mientras que la ISO 9001 habla de 'control de la producción', la ISO 90003 lo interpreta como 'control del proceso de desarrollo de software', incluyendo actividades como revisiones de código, gestión de versiones y pruebas."
  }
];

// --- 3. Modelos de Calidad del Software ---
export const qualityModels: QualityModel[] = [
  {
    id: 'cmmi',
    title: 'CMMI (Capability Maturity Model Integration)',
    description: "Es un modelo de mejora de procesos que ayuda a las organizaciones a producir software de mayor calidad de manera predecible y consistente. Se estructura en niveles de madurez que indican la capacidad de una organización para gestionar sus procesos.",
    icon: Scaling,
    levels: [
      { level: 1, name: 'Inicial', description: 'Procesos impredecibles y reactivos. El éxito depende del esfuerzo individual.' },
      { level: 2, name: 'Gestionado', description: 'Se gestionan los requisitos, proyectos y planes. Se repiten prácticas exitosas.' },
      { level: 3, name: 'Definido', description: 'Los procesos están estandarizados y documentados a nivel organizacional. Hay un enfoque proactivo.' },
      { level: 4, name: 'Gestionado Cuantitativamente', description: 'La organización controla sus procesos utilizando mediciones estadísticas y cuantitativas.' },
      { level: 5, name: 'En Optimización', description: 'Foco en la mejora continua de los procesos a través de la innovación y la retroalimentación cuantitativa.' },
    ],
    interactiveQuestion: "¿En qué nivel CMMI crees que se encuentra un equipo que realiza revisiones de código (pull requests) de manera consistente pero no tiene un proceso documentado a nivel de toda la empresa?"
  },
  {
    id: 'mpsbr',
    title: 'MPS.BR (Melhoria de Processo do Software Brasileiro)',
    description: "Es un modelo de calidad de procesos creado en Brasil y muy popular en Latinoamérica. Está diseñado para ser más accesible para pequeñas y medianas empresas (PYMEs) que CMMI, con una implementación más gradual.",
    icon: GitBranch,
    comparison: "A diferencia de CMMI, que tiene 5 niveles, MPS.BR se organiza en 7 niveles de madurez (de G a A), permitiendo a las empresas demostrar progreso de manera más granular. Está fuertemente alineado con las normas ISO/IEC 12207 y 15504."
  },
  {
    id: 'spice',
    title: 'SPICE (ISO/IEC 15504 / 330xx)',
    description: "También conocido como SPICE (Software Process Improvement and Capability Determination), este estándar internacional proporciona un marco para la evaluación de procesos. Permite evaluar la 'capacidad' de los procesos de desarrollo de una organización.",
    icon: Layers,
    structure: "Define un modelo de dos dimensiones: una dimensión de procesos (lo que se hace, basado en ISO 12207) y una dimensión de capacidad (qué tan bien se hace), que tiene 6 niveles (de 0-Incompleto a 5-Optimizante). Es muy flexible y puede aplicarse a cualquier proceso de software."
  }
];

// --- 4. Estándares del Software ---
export const softwareStandardsConcept: SoftwareStandardConcept = {
  definitions: [
    { type: 'Norma', description: "Un documento formal y aprobado por un organismo reconocido (como ISO o IEEE) que establece criterios, reglas o definiciones. Su cumplimiento suele ser voluntario, pero puede ser un requisito contractual. Ejemplo: ISO/IEC 25010." },
    { type: 'Estándar', description: "Término más amplio. Puede ser una norma formal o una especificación técnica o práctica que es ampliamente aceptada en la industria (un 'estándar de facto'). Ejemplo: El lenguaje SQL es un estándar para consultar bases de datos relacionales." },
    { type: 'Modelo', description: "Una representación abstracta de un proceso, sistema o concepto. Proporciona una estructura y un lenguaje común para describir y mejorar prácticas. Ejemplo: CMMI." },
  ],
  importance: "Los estándares son fundamentales para garantizar la interoperabilidad (que diferentes sistemas puedan comunicarse), la portabilidad (que el software pueda moverse entre entornos), la seguridad (mediante prácticas probadas) y la mantenibilidad (gracias a convenciones de código).",
  comparisonTable: {
    headers: ["Área de Desarrollo", "Estándares Comunes"],
    rows: [
      { area: "Desarrollo Web", standards: "HTML5, CSS3, JavaScript (ECMAScript), W3C (accesibilidad WCAG), HTTP/2." },
      { area: "Desarrollo Móvil", standards: "Guías de diseño de Apple (Human Interface Guidelines), Google (Material Design), Swift (iOS), Kotlin (Android)." },
      { area: "Desarrollo Empresarial", standards: "UML (modelado), PMBOK (gestión de proyectos), SQL (bases de datos), SOAP/REST (APIs)." },
    ]
  }
};


// --- 5. Cómo codificar y programar con calidad ---
export const codingBestPractices: CodingBestPractice[] = [
  {
    title: 'Principios de Código Limpio (Clean Code)',
    description: 'El código limpio es código que es fácil de entender y fácil de cambiar. Es legible, mantenible y expresivo.',
    practices: [
      {
        name: 'Nombres de Variables y Funciones Significativos',
        description: 'Usa nombres que revelen la intención. Un buen nombre hace que el código sea más fácil de leer y entender sin necesidad de comentarios.',
        badCode: "function proc(d) {\n  //...\n}",
        goodCode: "function calculateElapsedTimeInDays(startDate) {\n  //...\n}"
      },
      {
        name: "Evita el Código Duplicado (DRY - Don't Repeat Yourself)",
        description: 'Cada pieza de conocimiento debe tener una representación única, no ambigua y autorizada dentro de un sistema. La duplicación es una fuente común de errores.',
        badCode: "let total1 = calculatePrice(items1);\nlet tax1 = total1 * 0.16;\n\nlet total2 = calculatePrice(items2);\nlet tax2 = total2 * 0.16;",
        goodCode: "function calculateTotalWithTax(items) {\n  const total = calculatePrice(items);\n  return total * (1 + TAX_RATE);\n}\n\nlet finalPrice1 = calculateTotalWithTax(items1);\nlet finalPrice2 = calculateTotalWithTax(items2);"
      },
      {
        name: 'Comentarios: El Porqué, no el Qué',
        description: 'El buen código se documenta a sí mismo. Usa comentarios para explicar por qué se tomó una decisión de diseño compleja, no para parafrasear lo que el código hace.',
        badCode: "// Incrementa i en 1\ni++;",
        goodCode: "// Usamos un algoritmo de ordenamiento rápido aquí\n// porque las pruebas de rendimiento mostraron que es\n// más eficiente para el tamaño de nuestros datos.\nquickSort(data);"
      },
      {
        name: 'Uso de Control de Versiones (Git)',
        description: 'Git es una herramienta fundamental para la calidad. Permite el trabajo en equipo, mantiene un historial de cambios, facilita la revisión de código (Pull Requests) y permite revertir errores de forma segura.',
        goodCode: '$ git commit -m "feat: Add user authentication feature"\n$ git push origin main',
        badCode: 'Copiar la carpeta del proyecto a "Proyecto_v2_final_final.zip"'
      }
    ]
  },
  {
    title: 'Atributos de Calidad en el Código',
    description: 'Los atributos de la ISO 25010 no son conceptos abstractos; se reflejan directamente en cómo escribimos el código.',
    attributesInCode: [
      { attribute: 'Fiabilidad', practice: 'Manejo de Errores Robusto', badCode: "function getUser(id) {\n  return db.users.find(id); // ¿Qué pasa si el usuario no existe?\n}", goodCode: "function getUser(id) {\n  try {\n    const user = db.users.find(id);\n    if (!user) {\n      throw new Error('User not found');\n    }\n    return user;\n  } catch (error) {\n    log.error(error);\n    return null;\n  }\n}" },
      { attribute: 'Mantenibilidad', practice: 'Modularidad y Cohesión', badCode: "function handleUser() {\n  // ... 200 líneas de código que validan, guardan y envían email ...\n}", goodCode: "function handleUser(userData) {\n  validateInput(userData);\n  saveUserToDatabase(userData);\n  sendWelcomeEmail(userData.email);\n}" },
      { attribute: 'Seguridad', practice: 'Validación de Entradas', badCode: "app.post('/comment', (req, res) => {\n  db.execute(`INSERT INTO comments VALUES ('${req.body.comment}')`); // ¡Vulnerable a SQL Injection!\n});", goodCode: "app.post('/comment', (req, res) => {\n  const sanitizedComment = sanitize(req.body.comment);\n  db.execute('INSERT INTO comments VALUES (?)', [sanitizedComment]);\n});" },
      { attribute: 'Eficiencia', practice: 'Algoritmos Óptimos', badCode: "function findUser(users, name) {\n  // Búsqueda lineal O(n)\n  return users.find(u => u.name === name);\n}", goodCode: "function findUser(usersMap, name) {\n  // Búsqueda en mapa O(1)\n  return usersMap.get(name);\n}" }
    ]
  }
];

// --- 6. Cómo hacer pruebas y evaluaciones ---
export const testingAndEvaluationContent: TestingAndEvaluationContent = {
  title: "Pruebas y Evaluación de la Calidad",
  introduction: "Las pruebas son el proceso de ejecutar un sistema con el fin de encontrar errores. La evaluación es un juicio más amplio para determinar si el software cumple con sus objetivos de negocio y calidad.",
  testingTypes: [
    { name: 'Pruebas Unitarias', description: 'Verifican la unidad más pequeña de código (una función o un método) de forma aislada. Son rápidas y baratas.', icon: TestTube },
    { name: 'Pruebas de Integración', description: 'Comprueban que varias unidades o módulos funcionan correctamente juntos.', icon: Layers },
    { name: 'Pruebas de Aceptación del Usuario (UAT)', description: 'Realizadas por el usuario final para confirmar que el sistema cumple con sus necesidades y requisitos en un escenario real.', icon: Users },
  ],
  evaluationTypes: {
    qualitative: "Análisis cualitativo se basa en la observación y el juicio de expertos. Por ejemplo, una evaluación heurística de la usabilidad de una interfaz.",
    quantitative: "Análisis cuantitativo se basa en métricas numéricas. Por ejemplo, medir que el tiempo de carga de la página principal sea inferior a 2 segundos."
  },
  metrics: [
    { name: "Cobertura de Pruebas (Code Coverage)", description: "Mide el porcentaje de tu código que está siendo probado por tus pruebas automáticas. Una cobertura alta (ej. >80%) aumenta la confianza, pero no garantiza la ausencia de errores." },
    { name: "Complejidad Ciclomática", description: "Mide el número de caminos independientes a través del código de un programa. Un número alto (ej. >10) indica un código complejo, difícil de probar y mantener." }
  ],
  practicalExample: {
    title: 'Ejemplo de Prueba Unitaria (Pseudocódigo)',
    code: `
test "sumar_dos_numeros_correctamente" {
  // Preparación (Arrange)
  numero1 = 5
  numero2 = 10

  // Actuación (Act)
  resultado = sumar(numero1, numero2)

  // Afirmación (Assert)
  afirmarQue(resultado).esIgualA(15)
}
    `
  },
  evaluationSimulator: {
    title: 'Simulador de Evaluación',
    description: 'Elige un atributo de calidad para ver ejemplos de cómo se podría evaluar en una aplicación real:',
    options: [
      { attribute: 'Usabilidad', howTo: 'Se podría realizar una prueba de usuario donde se le pide a una persona que complete una tarea (ej. "compra un producto"). Se mide el tiempo que tarda, el número de errores y se recoge su feedback subjetivo sobre la facilidad de uso.' },
      { attribute: 'Eficiencia', howTo: 'Se utilizarían herramientas de profiling y pruebas de carga (como JMeter o k6) para simular miles de usuarios y medir el tiempo de respuesta del servidor, el consumo de CPU y la memoria utilizada bajo estrés.' },
      { attribute: 'Seguridad', howTo: 'Se realizaría un test de penetración (pentesting), donde un experto en seguridad intenta explotar vulnerabilidades conocidas (como XSS, CSRF, Inyección SQL) para ver si el sistema es vulnerable.' }
    ]
  }
};

// --- 7. Cómo sacar conclusiones y recomendaciones ---
export const conclusionContent: ConclusionContent = {
  title: "Análisis de Resultados: Conclusiones y Recomendaciones",
  interpretation: "Las métricas por sí solas no dicen toda la historia. Es crucial interpretar los resultados en el contexto del proyecto. Un 70% de cobertura de pruebas puede ser excelente para un prototipo, pero inaceptable para un software médico.",
  writingGuide: [
    { type: 'Conclusión', advice: "Debe ser un resumen objetivo y directo de los hallazgos. Responde a la pregunta: ¿Se cumplieron los objetivos de calidad? Evita opiniones personales." },
    { type: 'Recomendación', advice: "Debe ser una acción específica, factible y constructiva. Basada en una conclusión, sugiere cómo mejorar el producto. Debe ser técnica y clara." }
  ],
  examples: [
    {
      title: 'Ejemplo de un Buen Análisis',
      conclusion: "Conclusión: El software demuestra una alta mantenibilidad (complejidad ciclomática promedio de 4) y fiabilidad (99.8% de uptime en pruebas), pero la usabilidad obtuvo una puntuación baja (5/10 en tests de usuario) debido a un flujo de compra confuso.",
      recommendation: "Recomendación: Rediseñar el flujo de compra en 3 pasos, guiado por un wizard visual. Implementar retroalimentación inmediata al añadir productos al carrito y simplificar el formulario de pago a solo 4 campos esenciales. Se debe realizar una nueva prueba de usuario después de los cambios."
    },
    {
      title: 'Ejemplo de un Mal Análisis',
      conclusion: "Conclusión: La app a veces es lenta y a los usuarios no les gustó mucho.",
      recommendation: "Recomendación: Hay que arreglarlo para que sea más rápido y fácil de usar."
    }
  ],
  template: {
    title: "Plantilla para tu Análisis",
    description: "Usa esta plantilla para practicar la redacción de tus propias conclusiones y recomendaciones después de evaluar una aplicación.",
    text: "### Conclusión\nBasado en la evaluación, el software [cumple/no cumple] con los criterios de [atributo evaluado]. Los resultados clave indican que [hallazgo principal].\n\n### Recomendación\nSe recomienda [acción específica y técnica] para abordar el problema de [problema identificado]. Esto podría lograrse mediante [paso técnico 1] y [paso técnico 2]."
  }
};

// --- 8. Recursos Adicionales ---
export const additionalResources: Resource[] = [
  { title: "ISO/IEC 25010 Standard", description: "Documento oficial (de pago) de la norma en la web de la Organización Internacional de Normalización.", url: "https://www.iso.org/standard/35733.html" },
  { title: "Clean Code: A Handbook of Agile Software Craftsmanship", description: "El libro de Robert C. Martin ('Uncle Bob'), una referencia fundamental sobre cómo escribir código de calidad.", url: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/" },
  { title: "OWASP Top Ten", description: "Documento de referencia sobre los riesgos de seguridad más críticos para las aplicaciones web. Imprescindible para entender la calidad desde la perspectiva de la seguridad.", url: "https://owasp.org/www-project-top-ten/" },
  { title: "Martin Fowler's Blog", description: "Ensayos y artículos de uno de los pensadores más influyentes en arquitectura de software y buenas prácticas.", url: "https://martinfowler.com/" },
  { title: "Google Testing Blog", description: "Artículos de ingenieros de Google sobre la cultura y las técnicas de testing en una de las mayores empresas de software del mundo.", url: "https://testing.googleblog.com/" },
  { title: "Introduction to Software Testing (Vídeo)", description: "Un curso intensivo de la Universidad de Udacity que cubre los fundamentos de las pruebas de software de manera práctica.", url: "https://www.youtube.com/watch?v=s3-GE-B4a4Q" }
];


// --- Datos existentes (pueden ser eliminados o integrados si es necesario) ---
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

