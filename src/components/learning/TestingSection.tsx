
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testingAndEvaluationContent } from "@/lib/data";
import { TestTube, Layers, Users, Lightbulb } from 'lucide-react';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const iconMap: { [key: string]: React.ElementType } = {
  TestTube,
  Layers,
  Users,
};

export function TestingSection() {
  const [selectedAttribute, setSelectedAttribute] = useState(testingAndEvaluationContent.evaluationSimulator.options[0]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">6. Cómo Hacer Pruebas y Evaluaciones</h2>

      <Card>
        <CardHeader>
          <CardTitle>Tipos de Pruebas de Software</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{testingAndEvaluationContent.introduction}</p>
            <div className="space-y-4">
                {testingAndEvaluationContent.testingTypes.map((type, index) => {
                const Icon = iconMap[type.icon.displayName || 'TestTube'];
                return (
                    <div key={index} className="flex items-start gap-3">
                    <Icon className="h-6 w-6 mt-1 flex-shrink-0 text-blue-500" />
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{type.name}</p>
                        <p className="text-gray-600 dark:text-gray-400">{type.description}</p>
                    </div>
                    </div>
                );
                })}
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Evaluación Cualitativa vs. Cuantitativa</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
                <h4 className="font-semibold">Evaluación Cualitativa</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testingAndEvaluationContent.evaluationTypes.qualitative}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800">
                <h4 className="font-semibold">Evaluación Cuantitativa</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testingAndEvaluationContent.evaluationTypes.quantitative}</p>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Métricas e Indicadores de Calidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            {testingAndEvaluationContent.metrics.map((metric, index) => (
                <div key={index}>
                    <p className="font-semibold">{metric.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{metric.description}</p>
                </div>
            ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Ejemplo de Prueba Unitaria</CardTitle>
        </CardHeader>
        <CardContent>
            <pre className="p-3 bg-gray-900 text-white rounded-md text-sm whitespace-pre-wrap"><code>{testingAndEvaluationContent.practicalExample.code}</code></pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Lightbulb className="text-yellow-500"/> Simulador de Evaluación</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{testingAndEvaluationContent.evaluationSimulator.description}</p>
            <Tabs defaultValue={selectedAttribute.attribute} onValueChange={(value) => setSelectedAttribute(testingAndEvaluationContent.evaluationSimulator.options.find(o => o.attribute === value)!)}>
                <TabsList>
                    {testingAndEvaluationContent.evaluationSimulator.options.map(option => (
                        <TabsTrigger key={option.attribute} value={option.attribute}>{option.attribute}</TabsTrigger>
                    ))}
                </TabsList>
                {testingAndEvaluationContent.evaluationSimulator.options.map(option => (
                    <TabsContent key={option.attribute} value={option.attribute}>
                        <div className="p-4 border rounded-lg mt-2 bg-gray-50 dark:bg-gray-800">
                            <p className="font-semibold">¿Cómo se evaluaría la {option.attribute}?</p>
                            <p className="text-gray-600 dark:text-gray-400">{option.howTo}</p>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </CardContent>
      </Card>

    </div>
  );
}
