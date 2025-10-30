
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { conclusionContent } from "@/lib/data";
import { CheckCircle, XCircle, Pencil } from 'lucide-react';

export function ConclusionsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">7. Cómo Sacar Conclusiones y Recomendaciones</h2>

      <Card>
        <CardHeader>
          <CardTitle>Interpretando los Resultados</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">{conclusionContent.interpretation}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Guía para una Buena Redacción</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {conclusionContent.writingGuide.map((guide, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{guide.type}</h4>
              <p className="text-gray-600 dark:text-gray-400">{guide.advice}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {conclusionContent.examples.map((example, index) => (
          <Card key={index} className={example.title.includes('Buen') ? "border-green-500" : "border-red-500"}>
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${example.title.includes('Buen') ? "text-green-600" : "text-red-600"}`}>
                {example.title.includes('Buen') ? <CheckCircle /> : <XCircle />}
                {example.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold">Conclusión:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{example.conclusion}</p>
              </div>
              <div>
                <h4 className="font-semibold">Recomendación:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{example.recommendation}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Pencil className="text-blue-500"/> Plantilla para tu Análisis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-gray-700 dark:text-gray-300">{conclusionContent.template.description}</p>
          <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono">
            {conclusionContent.template.text}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
