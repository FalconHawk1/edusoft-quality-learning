
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, BookText, ShieldCheck, Wrench, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import { analyzeCodeQuality, CodeAnalysisResult } from '@/lib/code-analyzer';

// Carga dinámica para el editor Ace, que solo funciona en el cliente.
const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    require('ace-builds/src-noconflict/mode-javascript');
    require('ace-builds/src-noconflict/theme-monokai');
    require('ace-builds/src-noconflict/ext-language_tools');
    return ace;
  },
  { ssr: false } // Deshabilitar Server-Side Rendering para este componente
);

const ATTRIBUTE_ICONS: { [key: string]: React.ElementType } = {
  mantenibilidad: Wrench,
  usabilidad: BookText,
  fiabilidad: ShieldCheck,
  eficiencia: Zap,
  seguridad: AlertTriangle,
};

const getScoreColor = (score: number) => {
  if (score >= 4.0) return 'bg-green-500';
  if (score >= 2.5) return 'bg-yellow-500';
  return 'bg-red-500';
};

export default function CodeAnalyzer() {
  const [code, setCode] = useState<string>('// Pega tu código aquí para analizarlo...\nfunction ejemplo(arr) {\n  let total = 0;\n  for(let i=0; i<arr.length; i++) {\n    total += arr[i];\n  }\n  console.log("El total es " + total);\n}');
  const [analysisResult, setAnalysisResult] = useState<CodeAnalysisResult | null>(null);

  const handleAnalyze = () => {
    const result = analyzeCodeQuality(code);
    setAnalysisResult(result);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Editor de Código</CardTitle>
          <CardDescription>Pega o escribe tu código en el siguiente editor y presiona "Evaluar Código" para ver el análisis de calidad.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <AceEditor
              mode="javascript"
              theme="monokai"
              onChange={setCode}
              value={code}
              name="code-editor"
              editorProps={{ $blockScrolling: true }}
              width="100%"
              height="300px"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </div>
          <Button onClick={handleAnalyze} className="mt-4 w-full md:w-auto">
            <BarChart className="mr-2 h-4 w-4" />
            Evaluar Código
          </Button>
        </CardContent>
      </Card>

      {analysisResult && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Puntuaciones Individuales */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Resultados del Análisis</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {(Object.keys(analysisResult.scores) as Array<keyof typeof analysisResult.scores>).map((key) => {
                  const score = analysisResult.scores[key];
                  const Icon = ATTRIBUTE_ICONS[key];
                  return (
                    <div key={key} className="flex flex-col items-center space-y-2">
                        <div className="flex items-center gap-2">
                           <Icon className="h-5 w-5"/>
                           <h4 className="font-semibold capitalize">{key}</h4>
                        </div>
                        <p className="text-3xl font-bold">{score.toFixed(1)}</p>
                        <Progress value={score * 20} className={`h-2 ${getScoreColor(score)}`} />
                    </div>
                  );
              })}
            </CardContent>
          </Card>

          {/* Conclusión */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                Conclusión General
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold">Puntuación Promedio: {analysisResult.average.toFixed(1)} / 5.0</p>
              <p className="text-muted-foreground mt-2">{analysisResult.conclusion}</p>
            </CardContent>
          </Card>

          {/* Recomendaciones */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="mr-2 h-5 w-5 text-blue-500" />
                Recomendaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analysisResult.recommendations.length > 0 ? (
                <ul className="space-y-2 list-disc list-inside">
                  {analysisResult.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm">{rec}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-green-600 font-semibold">¡Felicidades! No se encontraron problemas obvios.</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
