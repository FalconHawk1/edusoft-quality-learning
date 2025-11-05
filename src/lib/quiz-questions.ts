
import type { QuizQuestion } from './types';

export const finalQuizQuestions: QuizQuestion[] = [
  {
    question: "¿Cuál es la principal característica que la norma ISO/IEC 25010 añadió al modelo de calidad en comparación con su predecesora, la ISO/IEC 9126?",
    options: [
      "Usabilidad",
      "Mantenibilidad",
      "Seguridad",
      "Eficiencia"
    ],
    correctAnswer: 2,
    explanation: "La ISO/IEC 25010 (SQuaRE) introdujo la 'Seguridad' y la 'Compatibilidad' como características de calidad de primer nivel, que no estaban explícitamente en el modelo anterior ISO 9126."
  },
  {
    question: "En el modelo CMMI, ¿qué nivel de madurez describe a una organización donde los procesos están estandarizados y documentados a nivel organizacional?",
    options: [
      "Nivel 1: Inicial",
      "Nivel 2: Gestionado",
      "Nivel 3: Definido",
      "Nivel 4: Gestionado Cuantitativamente"
    ],
    correctAnswer: 2,
    explanation: "El Nivel 3 (Definido) es cuando una organización establece un conjunto de procesos estándar y los documenta para asegurar la consistencia en toda la empresa."
  },
  {
    question: "¿Qué principio de 'Código Limpio' se viola cuando copias y pegas un bloque de código en múltiples lugares de tu aplicación?",
    options: [
      "Nombres de variables significativos",
      "DRY (Don't Repeat Yourself)",
      "Comentarios que explican el porqué",
      "Funciones pequeñas y enfocadas"
    ],
    correctAnswer: 1,
    explanation: "El principio DRY (No te repitas) establece que cada pieza de conocimiento debe tener una única representación. Copiar y pegar código crea duplicación y dificulta el mantenimiento."
  },
  {
    question: "Estás escribiendo una prueba que verifica que una sola función se comporta como se espera, sin interactuar con otras partes del sistema. ¿Qué tipo de prueba estás realizando?",
    options: [
      "Prueba de Integración",
      "Prueba de Aceptación del Usuario (UAT)",
      "Prueba de Sistema",
      "Prueba Unitaria"
    ],
    correctAnswer: 3,
    explanation: "Las pruebas unitarias se centran en verificar la unidad más pequeña de código (una función o método) de forma completamente aislada del resto de la aplicación."
  },
  {
    question: "Un desarrollador escribe código que es vulnerable a inyección SQL. ¿Qué atributo de calidad de la ISO 25010 se está viendo más comprometido?",
    options: [
        "Fiabilidad",
        "Usabilidad",
        "Seguridad",
        "Mantenibilidad"
    ],
    correctAnswer: 2,
    explanation: "La inyección SQL es una vulnerabilidad de seguridad clásica. Un código que la permite está fallando directamente en el atributo de Seguridad, que busca proteger el sistema contra ataques maliciosos."
  },
  {
    question: "¿Para qué sirve principalmente una métrica como la 'Complejidad Ciclomática'?",
    options: [
        "Para medir la velocidad de ejecución del programa.",
        "Para medir qué tan difícil es de entender, probar y mantener el código.",
        "Para medir el porcentaje del código que tiene pruebas automáticas.",
        "Para medir qué tan bien la aplicación se adapta a diferentes tamaños de pantalla."
    ],
    correctAnswer: 1,
    explanation: "La Complejidad Ciclomática mide el número de caminos independientes en el código. Un valor alto indica un código más complejo y, por lo tanto, más difícil de mantener y probar."
  },
  {
    question: "¿Qué tipo de prueba se enfoca en verificar que diferentes módulos o componentes de una aplicación funcionan juntos correctamente?",
    options: [
      "Prueba Unitaria",
      "Prueba de Integración",
      "Prueba de Humo (Smoke Test)",
      "Prueba de Regresión"
    ],
    correctAnswer: 1,
    explanation: "Las pruebas de integración están diseñadas específicamente para encontrar defectos en las interfaces y las interacciones entre componentes o sistemas integrados."
  },
  {
    question: "Si una aplicación web funciona correctamente en Chrome, Firefox y Safari, ¿qué sub-característica de calidad, según ISO 25010, está demostrando principalmente?",
    options: [
      "Coexistencia",
      "Interoperabilidad",
      "Adaptabilidad",
      "Instalabilidad"
    ],
    correctAnswer: 2,
    explanation: "La adaptabilidad (dentro de la Portabilidad) es la capacidad del producto para ser utilizado eficazmente en diferentes entornos de hardware, software o de operación. Funcionar en múltiples navegadores es un claro ejemplo de adaptabilidad."
  },
  {
    question: "Una aplicación de comercio electrónico se cae cada vez que 100 usuarios intentan hacer una compra simultáneamente. ¿Qué sub-característica de la Fiabilidad está fallando principalmente?",
    options: [
      "Madurez",
      "Disponibilidad",
      "Tolerancia a fallos",
      "Capacidad de recuperación"
    ],
    correctAnswer: 0,
    explanation: "La madurez se refiere a la capacidad del sistema para evitar fallos como resultado de defectos en el software bajo condiciones normales. Un fallo predecible bajo una carga esperada indica una falta de madurez en el código."
  },
  {
    question: "Al redactar una recomendación de mejora para una evaluación de calidad, ¿cuál de las siguientes es la característica MÁS importante?",
    options: [
      "Ser muy técnico y usar jerga.",
      "Ser breve, incluso si es vago.",
      "Ser específico, accionable y justificar el 'porqué'.",
      "Criticar duramente el código existente."
    ],
    correctAnswer: 2,
    explanation: "Una buena recomendación debe ser clara, proponer una acción concreta (accionable) y explicar por qué esa acción mejorará la calidad, proporcionando contexto y motivación al desarrollador."
  }
];
