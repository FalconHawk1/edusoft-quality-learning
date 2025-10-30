
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { introductionContent } from "@/lib/data";
import { Lightbulb, AlertTriangle, Milestone } from 'lucide-react';

export function IntroductionSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">1. Introducción a la Calidad del Software</h2>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Lightbulb className="text-yellow-500" /> ¿Qué es la Calidad del Software?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 dark:text-gray-300">{introductionContent.definition}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Importancia en el Ciclo de Vida del Desarrollo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">{introductionContent.importance}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Milestone className="text-blue-500"/> Historia Resumida de la Calidad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative border-l-2 border-blue-500 pl-6 space-y-4">
            {introductionContent.history.map((event, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-8 top-1 h-3 w-3 rounded-full bg-blue-500"></div>
                <p className="font-bold text-blue-600 dark:text-blue-400">{event.year} - {event.title}</p>
                <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-red-500" /> Ejemplos Famosos de Fallos de Calidad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {introductionContent.famousFailures.map((failure, index) => (
            <div key={index} className="rounded-lg border border-red-200 bg-red-50 p-4 dark:bg-red-900/20 dark:border-red-800">
              <p className="font-semibold text-red-800 dark:text-red-300">{failure.title}</p>
              <p className="text-red-700 dark:text-red-400">{failure.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
