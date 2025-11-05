
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IntroductionSection } from "@/components/learning/IntroductionSection";
import { StandardsSection } from "@/components/learning/StandardsSection";
import { ModelsSection } from "@/components/learning/ModelsSection";
import { CodingSection } from "@/components/learning/CodingSection";
import { TestingSection } from "@/components/learning/TestingSection";
import { ConclusionsSection } from "@/components/learning/ConclusionsSection";
import { ResourcesSection } from "@/components/learning/ResourcesSection";
import { softwareStandardsConcept } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// --- Importaciones para el Quiz ---
import Quiz from '@/app/components/Quiz';
import { finalQuizQuestions } from '@/lib/quiz-questions';

// A new component for the 'Standards' concept section
function SoftwareStandardsConceptSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">4. Estándares del Software</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Diferencia entre Norma, Modelo y Estándar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {softwareStandardsConcept.definitions.map((def, index) => (
            <div key={index}>
              <p className="font-semibold text-lg">{def.type}: <span className="font-normal text-base text-gray-700 dark:text-gray-300">{def.description}</span></p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Importancia de los Estándares</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">{softwareStandardsConcept.importance}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comparativa de Estándares Usados en Desarrollo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  {softwareStandardsConcept.comparisonTable.headers.map((header, index) => (
                    <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                {softwareStandardsConcept.comparisonTable.rows.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{row.area}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{row.standards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// --- Componente para el contenido del Quiz ---
function QuizSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Evaluación Final</h2>
      <p className="text-muted-foreground">
        Pon a prueba tus conocimientos sobre los conceptos clave de la calidad del software con esta evaluación final. ¡Demuestra lo que has aprendido!
      </p>
      <Quiz questions={finalQuizQuestions} />
    </div>
  );
}

export default function LearnPage() {
  const tabs = [
    { value: "intro", label: "1. Introducción", Component: IntroductionSection },
    { value: "standards", label: "2. Normas", Component: StandardsSection },
    { value: "models", label: "3. Modelos", Component: ModelsSection },
    { value: "concepts", label: "4. Estándares", Component: SoftwareStandardsConceptSection },
    { value: "coding", label: "5. Codificar", Component: CodingSection },
    { value: "testing", label: "6. Pruebas", Component: TestingSection },
    { value: "conclusions", label: "7. Conclusiones", Component: ConclusionsSection },
    { value: "resources", label: "8. Recursos", Component: ResourcesSection },
    // --- Pestaña del Quiz añadida al final ---
    { value: "quiz", label: "Evaluación Final", Component: QuizSection },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Guía Interactiva de Calidad del Software
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Una guía educativa completa sobre los conceptos, normas, modelos y prácticas que definen la calidad en el desarrollo de software.
        </p>
      </header>

      <Tabs defaultValue="intro" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 h-auto mb-6">
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <tab.Component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
