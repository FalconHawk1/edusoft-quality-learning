'use client';

import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EVALUATION_ATTRIBUTES } from '@/lib/constants';
import { computeFinalScore, getScoreInterpretation } from '@/lib/evaluation';
import type { EvaluationResult } from '@/lib/types';

export default function EvaluationResults({ results }: { results: EvaluationResult[] }) {
  const itemsWithWeights = results.map(r => {
    const attr = EVALUATION_ATTRIBUTES.find(a => a.name === r.attribute);
    return { score: r.score, weight: attr?.weight || 0 };
  });

  const finalScore = computeFinalScore(itemsWithWeights);
  const interpretation = getScoreInterpretation(finalScore);

  const chartData = results.map(r => ({
    subject: r.attribute,
    score: r.score,
    fullMark: 5,
  }));

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-1 flex flex-col justify-center items-center text-center shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Puntuación Final Ponderada</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-7xl font-bold text-primary">{finalScore.toFixed(2)}</div>
          <div className={`text-3xl font-semibold mt-4 ${interpretation.color}`}>{interpretation.text}</div>
          <p className="text-muted-foreground mt-2">sobre 5.0</p>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2 lg:col-span-2 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Desglose por Atributo</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 5]} />
              <Radar 
                name="Puntuación" 
                dataKey="score" 
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))" 
                fillOpacity={0.6} 
              />
               <Legend />
               <Tooltip contentStyle={{
                 backgroundColor: 'hsl(var(--background))',
                 borderColor: 'hsl(var(--border))'
               }}/>
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
