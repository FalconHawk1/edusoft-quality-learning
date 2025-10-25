import type { LucideIcon } from "lucide-react";

export type QualityAttribute = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type Standard = {
  id: string;
  title: string;
  content: string;
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
};

export type EvaluationResult = {
  attribute: string;
  score: number;
};
