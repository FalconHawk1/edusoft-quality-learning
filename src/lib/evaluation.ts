import { EVALUATION_ATTRIBUTES } from './constants';
import type { EvaluationResult } from './types';

interface EvaluationItem {
  score: number;
  weight: number;
}

export function computeFinalScore(items: EvaluationItem[]): number {
  let sum = 0;
  items.forEach(i => {
    sum += i.score * i.weight;
  });
  
  // Weights are predefined and sum to 1. The result is already the weighted score.
  return parseFloat(sum.toFixed(2));
}

export function getScoreInterpretation(score: number): { text: string; color: string } {
  if (score <= 1.4) return { text: "Bajo", color: "text-red-500" };
  if (score <= 2.9) return { text: "Regular", color: "text-yellow-500" };
  if (score <= 3.9) return { text: "Bueno", color: "text-blue-500" };
  return { text: "Excelente", color: "text-green-500" };
}
