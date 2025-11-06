'use client';
import { useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EVALUATION_ATTRIBUTES } from '@/lib/constants';
import { computeFinalScore, getScoreInterpretation } from '@/lib/evaluation';
import type { EvaluationResult, Application } from '@/lib/types';
import { Progress } from '@/components/ui/progress';

export default function EvaluationResults({ results, applicationId }: { results: EvaluationResult[], applicationId: string }) {
  const itemsWithWeights = results.map(r => {
    const attr = EVALUATION_ATTRIBUTES.find(a => a.name === r.attribute);
    return { score: r.score, weight: attr?.weight || 0 };
  });

  const finalScore = computeFinalScore(itemsWithWeights);
  const interpretation = getScoreInterpretation(finalScore);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) return;
    const user = JSON.parse(storedUser);

    const storageKey = user.username === 'admin' ? 'all_apps' : 'student_apps';
    const storedApps = JSON.parse(localStorage.getItem(storageKey) || '[]') as Application[];
    const appIndex = storedApps.findIndex(app => app.id === applicationId);

    if (appIndex !== -1 && storedApps[appIndex].averageScore !== finalScore) {
      storedApps[appIndex].averageScore = finalScore;
      localStorage.setItem(storageKey, JSON.stringify(storedApps));
    }
  }, [finalScore, applicationId]);
  
  const getScoreColor = (score: number) => {
    const { color } = getScoreInterpretation(score);
    if (color.includes('green')) return 'fill-green-500';
    if (color.includes('blue')) return 'fill-blue-500';
    if (color.includes('yellow')) return 'fill-yellow-500';
    return 'fill-red-500';
  };

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {/* Puntuación Final */}
      <Card className="md:col-span-1 flex flex-col justify-center items-center text-center shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Puntuación Final</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-7xl font-bold text-primary">{finalScore.toFixed(2)}</div>
          <div className={`text-3xl font-semibold mt-4 ${interpretation.color}`}>{interpretation.text}</div>
          <p className="text-muted-foreground mt-2">sobre 5.0</p>
        </CardContent>
      </Card>
      
      {/* Desglose por Atributo */}
      <Card className="md:col-span-2 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Desglose por Atributo</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={results} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 5]} />
              <YAxis dataKey="attribute" type="category" width={100} />
              <Tooltip 
                contentStyle={{
                 backgroundColor: 'hsl(var(--background))',
                 borderColor: 'hsl(var(--border))'
                }}
                formatter={(value: number) => value.toFixed(2)}
              />
              <Legend />
              <Bar dataKey="score" name="Puntuación" fill="hsl(var(--primary))" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Resumen en Tarjetas */}
      <Card className="md:col-span-3 shadow-lg">
        <CardHeader>
            <CardTitle>Resumen de Métricas</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {results.map(result => {
                 const interpretation = getScoreInterpretation(result.score);
                 return(
                     <div key={result.attribute} className="flex flex-col items-center space-y-3 p-4 border rounded-lg">
                        <h4 className="font-semibold text-lg">{result.attribute}</h4>
                        <p className="text-4xl font-bold">{result.score.toFixed(1)}</p>
                        <Progress value={result.score * 20} />
                        <p className={`font-semibold ${interpretation.color}`}>{interpretation.text}</p>
                     </div>
                 )
            })}
        </CardContent>
      </Card>
    </div>
  );
}
