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
  Users
} from 'lucide-react';
import type { QualityAttribute, Standard, QuizQuestion, Application } from './types';

export const qualityAttributes: QualityAttribute[] = [
  {
    name: 'Usabilidad',
    description: 'Grado en que un producto o sistema puede ser utilizado por usuarios específicos para lograr objetivos definidos con eficacia, eficiencia y satisfacción en un contexto de uso especificado.',
    icon: Accessibility,
  },
  {
    name: 'Confiabilidad',
    description: 'Capacidad de un sistema o componente para funcionar bajo condiciones establecidas durante un período de tiempo determinado. Incluye madurez, disponibilidad, tolerancia a fallos y recuperabilidad.',
    icon: ShieldCheck,
  },
  {
    name: 'Eficiencia',
    description: 'Rendimiento relativo a la cantidad de recursos utilizados en condiciones establecidas. Se relaciona con el tiempo de respuesta y el consumo de recursos.',
    icon: GaugeCircle,
  },
  {
    name: 'Mantenibilidad',
    description: 'Grado de efectividad y eficiencia con el que un producto o sistema puede ser modificado por los mantenedores. Incluye modularidad, reutilización, analizabilidad y modificabilidad.',
    icon: Wrench,
  },
  {
    name: 'Seguridad',
    description: 'Grado en que un producto o sistema protege la información y los datos para que personas o sistemas no autorizados no puedan leerlos o modificarlos. Incluye confidencialidad, integridad y no repudio.',
    icon: Lock,
  },
  {
    name: 'Compatibilidad',
    description: 'Grado en que un producto, sistema o componente puede intercambiar información con otros y/o realizar sus funciones requeridas mientras comparte el mismo entorno de hardware o software.',
    icon: Shuffle,
  },
  {
    name: 'Portabilidad',
    description: 'Grado de efectividad y eficiencia con el que un sistema, producto o componente puede ser transferido de un entorno de hardware, software u otro entorno operativo o de uso a otro.',
    icon: Move,
  },
];

export const standardsAndModels: Standard[] = [
  {
    id: 'iso25010',
    title: 'ISO/IEC 25010',
    content: 'Este estándar define un modelo de calidad de producto de software. Describe ocho características de calidad: adecuación funcional, eficiencia de rendimiento, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad. Cada una se divide en sub-características. Es la base para la evaluación de la calidad del software moderno.',
  },
  {
    id: 'iso9126',
    title: 'ISO/IEC 9126',
    content: 'Fue el predecesor del ISO/IEC 25010. Definió un modelo de calidad con seis características: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad. Aunque ha sido reemplazado, sus conceptos sentaron las bases para los modelos de calidad actuales y es importante conocerlo por su valor histórico.',
  },
  {
    id: 'ieee1061',
    title: 'IEEE 1061',
    content: 'Este estándar se centra en la creación de un marco para las métricas de calidad del software. Proporciona una metodología para establecer requisitos de calidad y para identificar, implementar, analizar y validar métricas de calidad del software. Su enfoque está en la cuantificación de la calidad.',
  },
  {
    id: 'cmmi',
    title: 'CMMI (Capability Maturity Model Integration)',
    content: 'Es un modelo de mejora de procesos que ayuda a las organizaciones a mejorar su rendimiento. CMMI puede ser utilizado para guiar la mejora de procesos a través de un proyecto, una división o una organización completa. Define 5 niveles de madurez, desde "Inicial" hasta "Optimizado".',
  },
];

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
