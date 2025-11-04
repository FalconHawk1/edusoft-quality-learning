import type { LucideIcon } from "lucide-react";

export type QualityAttribute = {
  name: string;
  description: string;
  icon: string; // Name of the Lucide icon
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

export type IntroductionContent = {
  definition: string;
  importance: string;
  history: HistoryEvent[];
  influentialStandards: string;
  famousFailures: { title: string; description: string; }[];
};

export type QualityStandardAttribute = {
  name: string;
  example: string;
  icon: string;
};

export type QualityStandard = {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of the Lucide icon
  attributes?: QualityStandardAttribute[];
  structure?: string;
  application?: string;
};

export type QualityModel = {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of the Lucide icon
  levels?: { level: number; name: string; description: string; }[];
  comparison?: string;
  structure?: string;
  interactiveQuestion?: string;
};

export type SoftwareStandardConcept = {
  definitions: { type: string; description: string; }[];
  importance: string;
  comparisonTable: {
    headers: string[];
    rows: { area: string; standards: string; }[];
  };
};

export type CodingPractice = {
  name: string;
  description: string;
  badCode: string;
  goodCode: string;
};

export type AttributeInCode = {
  attribute: string;
  practice: string;
  badCode: string;
  goodCode: string;
};

export type CodingBestPractice = {
  title: string;
  description: string;
  practices?: CodingPractice[];
  attributesInCode?: AttributeInCode[];
};

export type TestingAndEvaluationContent = {
  title: string;
  introduction: string;
  testingTypes: { name: string; description: string; icon: string; }[];
  evaluationTypes: { qualitative: string; quantitative: string; };
  metrics: { name: string; description: string; }[];
  practicalExample: { title: string; code: string; };
  evaluationSimulator: {
    title: string;
    description: string;
    options: { attribute: string; howTo: string; }[];
  };
};

export type ConclusionContent = {
  title: string;
  interpretation: string;
  writingGuide: { type: string; advice: string; }[];
  examples: { title: string; conclusion: string; recommendation: string; }[];
  template: { title: string; description: string; text: string; };
};
