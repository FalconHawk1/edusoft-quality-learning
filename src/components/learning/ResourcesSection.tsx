
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { additionalResources } from "@/lib/data";
import { BookOpen } from 'lucide-react';

export function ResourcesSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">8. Recursos para Aprender Más</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {additionalResources.map((resource, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-indigo-500"/>
                {resource.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Visitar Recurso &rarr;
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
