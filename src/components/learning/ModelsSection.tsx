
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { qualityModels } from "@/lib/data";
import { Scaling, GitBranch, Layers, Lightbulb } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  Scaling,
  GitBranch,
  Layers
};

export function ModelsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">3. Modelos de Calidad del Software</h2>

      {qualityModels.map((model) => {
        const ModelIcon = iconMap[model.icon.displayName || 'Layers'];
        return (
          <Card key={model.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ModelIcon className="h-6 w-6 text-purple-500" />
                {model.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{model.description}</p>

              {model.levels && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Niveles de Madurez CMMI:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 text-center">
                    {model.levels.map(level => (
                      <div key={level.level} className="p-2 border rounded-lg">
                        <p className="font-bold text-lg text-purple-600 dark:text-purple-400">{level.level}</p>
                        <p className="font-semibold text-sm">{level.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {model.comparison && (
                <div className="p-3 bg-gray-50 rounded-lg dark:bg-gray-800">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">Comparación:</p>
                  <p className="text-gray-600 dark:text-gray-400">{model.comparison}</p>
                </div>
              )}

              {model.structure && (
                <div className="p-3 bg-gray-50 rounded-lg dark:bg-gray-800">
                    <p className="font-semibold text-gray-800 dark:text-gray-200">Estructura:</p>
                    <p className="text-gray-600 dark:text-gray-400">{model.structure}</p>
                </div>
              )}

              {model.interactiveQuestion && (
                <div className="mt-4 p-4 border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-yellow-500" />
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-300">Para Reflexionar:</h4>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{model.interactiveQuestion}</p>
                </div>
              )}

            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
