
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { codingBestPractices } from "@/lib/data";
import { CheckCircle, XCircle, FileCode, GitBranch } from 'lucide-react';

export function CodingSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">5. Cómo Codificar y Programar con Calidad</h2>
      
      {codingBestPractices.map((section, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{section.description}</p>
            
            {section.practices && section.practices.map((practice, pIndex) => (
              <div key={pIndex} className="mb-6">
                <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">{practice.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{practice.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/30">
                    <div className="flex items-center gap-2 font-semibold text-red-700 dark:text-red-300">
                      <XCircle className="h-5 w-5" /> Mal Código
                    </div>
                    <pre className="mt-2 p-2 bg-white dark:bg-gray-800 rounded text-sm whitespace-pre-wrap"><code>{practice.badCode}</code></pre>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/30">
                    <div className="flex items-center gap-2 font-semibold text-green-700 dark:text-green-300">
                      <CheckCircle className="h-5 w-5" /> Buen Código
                    </div>
                    <pre className="mt-2 p-2 bg-white dark:bg-gray-800 rounded text-sm whitespace-pre-wrap"><code>{practice.goodCode}</code></pre>
                  </div>
                </div>
              </div>
            ))}

            {section.attributesInCode && section.attributesInCode.map((attr, aIndex) => (
                 <div key={aIndex} className="mb-6">
                    <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">{attr.attribute}: <span className="text-gray-600 dark:text-gray-400">{attr.practice}</span></h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/30">
                            <div className="flex items-center gap-2 font-semibold text-red-700 dark:text-red-300"><XCircle className="h-5 w-5" /> Mal Código</div>
                            <pre className="mt-2 p-2 bg-white dark:bg-gray-800 rounded text-sm whitespace-pre-wrap"><code>{attr.badCode}</code></pre>
                        </div>
                        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/30">
                            <div className="flex items-center gap-2 font-semibold text-green-700 dark:text-green-300"><CheckCircle className="h-5 w-5" /> Buen Código</div>
                            <pre className="mt-2 p-2 bg-white dark:bg-gray-800 rounded text-sm whitespace-pre-wrap"><code>{attr.goodCode}</code></pre>
                        </div>
                    </div>
                 </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
