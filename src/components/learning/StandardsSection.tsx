
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { qualityStandards } from "@/lib/data";
import { BookCopy, CheckCircle, GaugeCircle, Shuffle, Accessibility, ShieldCheck, Lock, Wrench, Move, Milestone, FileText, Layers, GraduationCap } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  BookCopy,
  CheckCircle,
  GaugeCircle,
  Shuffle,
  Accessibility,
  ShieldCheck,
  Lock,
  Wrench,
  Move,
  Milestone,
  FileText,
  Layers,
  GraduationCap
};

export function StandardsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">2. Normas de Calidad del Software</h2>
      
      <div className="space-y-4">
        {qualityStandards.map((standard) => {
          const StandardIcon = iconMap[standard.icon] || BookCopy;
          return (
            <Card key={standard.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <StandardIcon className="h-6 w-6 text-blue-500" />
                  {standard.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{standard.description}</p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details">
                    <AccordionTrigger>Ver Detalles y Ejemplos</AccordionTrigger>
                    <AccordionContent>
                      {standard.attributes && (
                        <div className="mt-4 space-y-3">
                          {standard.attributes.map((attr, index) => {
                            const AttrIcon = iconMap[attr.icon] || CheckCircle;
                            return (
                              <div key={index} className="flex items-start gap-3 rounded-lg border p-3">
                                <AttrIcon className="h-5 w-5 mt-1 flex-shrink-0 text-gray-600 dark:text-gray-400" />
                                <div>
                                  <p className="font-semibold text-gray-800 dark:text-gray-200">{attr.name}</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{attr.example}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {standard.structure && (
                        <div className="mt-4 text-gray-600 dark:text-gray-400">
                          <p><span className="font-semibold">Estructura:</span> {standard.structure}</p>
                        </div>
                      )}
                      {standard.application && (
                        <div className="mt-4 text-gray-600 dark:text-gray-400">
                           <p><span className="font-semibold">Aplicación Práctica:</span> {standard.application}</p>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
