
// src/lib/code-analyzer.ts

export interface CodeAnalysisResult {
  scores: {
    mantenibilidad: number;
    usabilidad: number;
    fiabilidad: number;
    eficiencia: number;
    seguridad: number;
  };
  average: number;
  conclusion: string;
  recommendations: string[];
}

// Heurísticas y reglas para el análisis cualitativo
const RULES = {
  // Mantenibilidad
  VARIABLE_NAMES: { // Nombres de variables (no ser 1-2 letras, no ser keywords genéricas)
    regex: /\b(let|const|var)\s+([a-zA-Z_]{1,2})\s*=/g,
    penalty: 0.5,
  },
  FUNCTION_LENGTH: { // Longitud de funciones (más de 20 líneas es una señal)
    lines: 20,
    penalty: 0.4,
  },
  NO_COMMENTS: {
    regex: /\/\/|\/\*/,
    penalty: 1.0, // Penalización alta si no hay ni un solo comentario
  },
  // Usabilidad (Legibilidad)
  LINE_LENGTH: { // Líneas demasiado largas
    length: 120,
    penalty: 0.2,
  },
  BAD_INDENTATION: { // Heurística simple: busca líneas que empiezan con espacio pero no de forma consistente
    regex: /^\s{1,3}[^\s\*]/, // Líneas que no están bien indentadas (ej. 1-3 espacios)
    penalty: 0.3,
  },
  // Fiabilidad
  NO_ERROR_HANDLING: {
    regex: /try\s*{/,
    penalty: 1.5, // Muy alta penalización si no hay manejo de errores
  },
  // Eficiencia
  NESTED_LOOPS: {
    regex: /(for|while)[^\{]*?\{([\s\S]*?)(for|while)/g, // Bucle dentro de otro
    penalty: 0.8,
  },
  // Seguridad
  USE_OF_EVAL: {
    regex: /eval\(/,
    penalty: 2.0, // Penalización máxima por usar eval
  },
  INNER_HTML: {
    regex: /\.innerHTML\s*=/,
    penalty: 1.0, // Riesgo de XSS
  },
};

export const analyzeCodeQuality = (code: string): CodeAnalysisResult => {
  let scores: CodeAnalysisResult['scores'] = {
    mantenibilidad: 5.0,
    usabilidad: 5.0,
    fiabilidad: 5.0,
    eficiencia: 5.0,
    seguridad: 5.0,
  };
  let recommendations: Set<string> = new Set();

  if (!code.trim()) {
    return {
      scores: { mantenibilidad: 0, usabilidad: 0, fiabilidad: 0, eficiencia: 0, seguridad: 0 },
      average: 0,
      conclusion: "El código está vacío. Pega un fragmento de código para analizarlo.",
      recommendations: [],
    };
  }

  const lines = code.split('\n');

  // --- Análisis ---
  const shortVarMatches = code.match(RULES.VARIABLE_NAMES.regex) || [];
  if (shortVarMatches.length > 0) {
    scores.mantenibilidad -= RULES.VARIABLE_NAMES.penalty * shortVarMatches.length;
    recommendations.add("Utiliza nombres de variables más descriptivos (evita nombres como 'a', 'b', 'd').");
  }
  if (!RULES.NO_COMMENTS.regex.test(code)) {
    scores.mantenibilidad -= RULES.NO_COMMENTS.penalty;
    recommendations.add("Añade comentarios para explicar la lógica compleja o el propósito de las funciones.");
  }

  lines.forEach(line => {
    if (line.length > RULES.LINE_LENGTH.length) {
      scores.usabilidad -= RULES.LINE_LENGTH.penalty;
      recommendations.add(`Evita líneas de código demasiado largas (más de ${RULES.LINE_LENGTH.length} caracteres).`);
    }
    if (RULES.BAD_INDENTATION.regex.test(line)) {
        scores.usabilidad -= RULES.BAD_INDENTATION.penalty;
        recommendations.add("Asegura una indentación consistente en todo el código para mejorar la legibilidad.");
    }
  });

  if (!RULES.NO_ERROR_HANDLING.regex.test(code)) {
    scores.fiabilidad -= RULES.NO_ERROR_HANDLING.penalty;
    recommendations.add("Considera usar bloques try/catch para manejar posibles errores en tiempo de ejecución.");
  }
  
  const nestedLoopMatches = code.match(RULES.NESTED_LOOPS.regex) || [];
  if (nestedLoopMatches.length > 0) {
      scores.eficiencia -= RULES.NESTED_LOOPS.penalty * nestedLoopMatches.length;
      recommendations.add("Revisa los bucles anidados; podrían impactar el rendimiento. Busca formas de optimizarlos.");
  }

  if (RULES.USE_OF_EVAL.regex.test(code)) {
    scores.seguridad -= RULES.USE_OF_EVAL.penalty;
    recommendations.add("Evita el uso de 'eval()', ya que puede ser un riesgo de seguridad muy grave (ejecución de código arbitrario).");
  }
  if (RULES.INNER_HTML.regex.test(code)) {
    scores.seguridad -= RULES.INNER_HTML.penalty;
    recommendations.add("Ten cuidado al usar '.innerHTML'; puede exponerte a ataques de Cross-Site Scripting (XSS). Prefiere '.textContent'.");
  }

  // Normalizar puntuaciones (asegurar que no bajen de 0)
  Object.keys(scores).forEach(keyStr => {
    const key = keyStr as keyof typeof scores;
    scores[key] = Math.max(0, scores[key]);
  });

  // Calcular promedio
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const average = totalScore / Object.keys(scores).length;

  // Generar Conclusión
  let conclusion = "El análisis ha finalizado.";
  if (average >= 4.0) {
    conclusion = "El código presenta una buena calidad general, con espacio para mejoras menores.";
  } else if (average >= 2.5) {
    conclusion = "El código es funcional, pero se beneficiaría de aplicar mejores prácticas de calidad.";
  } else {
    conclusion = "El código tiene áreas críticas de mejora en calidad, seguridad y mantenibilidad.";
  }
  if (recommendations.size === 0 && code.trim().length > 0) {
    conclusion = "¡Excelente! El código sigue buenas prácticas de calidad según las heurísticas de este analizador.";
  }

  return {
    scores,
    average,
    conclusion,
    recommendations: Array.from(recommendations),
  };
};
