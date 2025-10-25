'use client';

import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { EVALUATION_ATTRIBUTES } from '@/lib/constants';

const formSchema = z.object(
  EVALUATION_ATTRIBUTES.reduce((acc, attr) => {
    acc[attr.name] = z.array(z.number().min(0).max(5)).length(1);
    return acc;
  }, {} as Record<string, z.ZodType<any, any>>)
);

type FormData = z.infer<typeof formSchema>;

export default function EvaluationForm({ applicationId }: { applicationId: string }) {
  const router = useRouter();
  
  const defaultValues = EVALUATION_ATTRIBUTES.reduce((acc, attr) => {
    acc[attr.name] = [3];
    return acc;
  }, {} as Record<string, [number]>);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: FormData) => {
    const results = EVALUATION_ATTRIBUTES.map(attr => ({
        attribute: attr.name,
        score: data[attr.name][0]
    }));
    
    const queryParams = new URLSearchParams();
    results.forEach(r => queryParams.append(r.attribute, r.score.toString()));

    router.push(`/evaluate/${applicationId}/results?${queryParams.toString()}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Formulario de Evaluación</CardTitle>
            <CardDescription>Desliza para puntuar cada característica.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {EVALUATION_ATTRIBUTES.map((attribute) => (
              <FormField
                key={attribute.name}
                control={form.control}
                name={attribute.name}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="text-lg font-semibold">{attribute.name}</FormLabel>
                      <span className="font-bold text-lg text-primary w-10 text-center">{field.value?.[0]}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{attribute.description}</p>
                    <FormControl>
                      <Slider
                        min={0}
                        max={5}
                        step={1}
                        value={field.value}
                        onValueChange={field.onChange}
                        className="mt-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </CardContent>
          <CardFooter>
            <Button type="submit" size="lg" className="w-full">Calcular Puntuación</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
