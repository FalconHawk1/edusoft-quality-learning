export const EVALUATION_ATTRIBUTES = [
  {
    name: "Usabilidad",
    weight: 0.25,
    description: "Facilidad con la que los usuarios pueden utilizar el software.",
    questions: [
      "¿La aplicación tiene una interfaz clara y coherente?",
      "¿Es fácil de aprender y usar sin instrucciones extensas?",
      "¿Los textos, botones e íconos son comprensibles?",
      "¿Ofrece retroalimentación visual al usuario?",
      "¿Permite accesibilidad para usuarios con limitaciones visuales o motoras?"
    ]
  },
  {
    name: "Eficiencia",
    weight: 0.20,
    description: "Rendimiento del software en relación con los recursos utilizados.",
    questions: [
      "¿Los tiempos de respuesta son adecuados para cada acción?",
      "¿El consumo de recursos (CPU/memoria) parece optimizado?",
      "¿El sistema evita operaciones o pantallas innecesarias?",
      "¿Se ejecutan las tareas sin retrasos visibles?"
    ]
  },
  {
    name: "Fiabilidad",
    weight: 0.20,
    description: "Capacidad del software para funcionar sin fallos.",
    questions: [
      "¿El sistema responde consistentemente sin errores?",
      "¿Maneja adecuadamente situaciones inesperadas o datos erróneos?",
      "¿Los resultados son correctos y repetibles?",
      "¿El sistema evita cierres o fallos al interactuar varias veces?"
    ]
  },
  {
    name: "Mantenibilidad",
    weight: 0.15,
    description: "Facilidad para modificar y mejorar el software.",
    questions: [
      "¿La aplicación permite actualizar o modificar componentes sin romper otros?",
      "¿Su estructura o código parece modular y bien organizado?",
      "¿Es posible entender fácilmente la lógica del sistema?",
      "¿Existen comentarios o documentación dentro del código (si aplica)?"
    ]
  },
  {
    name: "Seguridad",
    weight: 0.20,
    description: "Protección contra accesos no autorizados y amenazas.",
    questions: [
      "¿La aplicación protege la información del usuario?",
      "¿Solicita autenticación o validación antes de acciones importantes?",
      "¿Evita exposición de datos sensibles o contraseñas?",
      "¿Muestra mensajes de error sin revelar información interna?"
    ]
  },
];
