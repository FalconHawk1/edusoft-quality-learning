import type { LucideIcon } from "lucide-react";

export type QualityAttribute = {
  name: string;
  description: string;
  icon: LucideIcon;
  example: string;
};

export type Standard = {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  details?: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type Application = {
  id: string;
  name: string;
  description: string;
  url: string;
  createdAt: string;
  averageScore?: number;
  createdBy?: string; // Optional field to store the username of the creator
};

export type EvaluationResult = {
  attribute: string;
  score: number;
};

export type HistoryEvent = {
  year: string;
  title: string;
  description: string;
};

export type ImplementationStep = {
  phase: string;
  description: string;
  practices: string[];
};

export type Resource = {
  title: string;
  description: string;
  url: string;
};

export type ImportanceBenefit = {
  target: string;
  benefit: string;
  icon: LucideIcon;
}
