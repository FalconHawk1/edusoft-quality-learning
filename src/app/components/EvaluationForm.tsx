'use client';

import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EVALUATION_ATTRIBUTES } from '@/lib/constants';
import { computeFinalScore } from '@/lib/evaluation';
import type { Application } from '@/lib/types';

// Esquema de validación para una sola métrica
const metricSchema = z.object({
  name: z.string(),
  questions: z.array(z.number().min(1).max(5)),
});

// Esquema de validación para el formulario completo
const formSchema = z.object({
  metrics: z.array(metricSchema),
});

type FormData = z.infer<typeof formSchema>;

export default function EvaluationForm({ applicationId }: { applicationId: string }) {
  const router = useRouter();

  // Valores por defecto para el formulario
  const defaultValues = {
    metrics: EVALUATION_ATTRIBUTES.map(attr => ({
      name: attr.name,
      questions: Array(attr.questions.length).fill(3), // Inicializa cada pregunta con 3
    })),
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: 'metrics',
  });

  const onSubmit = (data: FormData) => {
    // Calcula el promedio de cada métrica principal
    const attributeScores = data.metrics.map(metric => {
      const sum = metric.questions.reduce((acc, score) => acc + score, 0);
      const average = sum / metric.questions.length;
      return { attribute: metric.name, score: average };
    });

    // Calcula la puntuación final ponderada
    const itemsWithWeights = attributeScores.map(r => {
      const attr = EVALUATION_ATTRIBUTES.find(a => a.name === r.attribute);
      return { score: r.score, weight: attr?.weight || 0 };
    });
    const finalScore = computeFinalScore(itemsWithWeights);

    // Guarda el resultado en localStorage
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/auth-error');
      return;
    }
    const user = JSON.parse(storedUser);

    const storageKey = user.username === 'admin' ? 'all_apps' : 'student_apps';
    const appsRaw = localStorage.getItem(storageKey);

    if (appsRaw) {
      const apps = JSON.parse(appsRaw) as Application[];
      const appIndex = apps.findIndex(app => app.id === applicationId);
      if (appIndex !== -1) {
        apps[appIndex].averageScore = finalScore;
        localStorage.setItem(storageKey, JSON.stringify(apps));
      }
    }

    // Redirige a la página de resultados con los promedios de cada atributo
    const queryParams = new URLSearchParams();
    attributeScores.forEach(r => queryParams.append(r.attribute, r.score.toFixed(2)));
    router.push(`/evaluate/${applicationId}/results?${queryParams.toString()}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Formulario de Evaluación Detallada</CardTitle>
            <CardDescription>Expande cada atributo y puntúa las preguntas guía de 1 a 5.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full space-y-4">
              {fields.map((field, index) => {
                const attributeInfo = EVALUATION_ATTRIBUTES[index];
                const questionScores = form.watch(`metrics.${index}.questions`);
                const metricAverage = questionScores.reduce((a, b) => a + b, 0) / questionScores.length;

                return (
                  <AccordionItem value={field.id} key={field.id} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                        <div className="flex justify-between items-center w-full pr-4">
                            <span>{attributeInfo.name}</span>
                            <span className="font-bold text-lg text-primary">
                                Prom.: {metricAverage.toFixed(1)}
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-6">
                      {attributeInfo.questions.map((question, qIndex) => (
                        <FormField
                          key={`${field.id}-q-${qIndex}`}
                          control={form.control}
                          name={`metrics.${index}.questions.${qIndex}`}
                          render={({ field: qField }) => (
                            <FormItem>
                              <div className="flex justify-between items-center">
                                <FormLabel>{question}</FormLabel>
                                <span className="font-bold text-md text-primary w-10 text-center">
                                  {qField.value}
                                </span>
                              </div>
                              <FormControl>
                                <Slider
                                  min={1}
                                  max={5}
                                  step={1}
                                  value={[qField.value]}
                                  onValueChange={(value) => qField.onChange(value[0])}
                                  className="mt-2"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
          <CardFooter>
            <Button type="submit" size="lg" className="w-full">Calcular Puntuación</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
