'use client';
import { Suspense } from 'react';
import { useSearchParams, notFound, useRouter, useParams } from 'next/navigation';
import EvaluationResults from '@/app/components/EvaluationResults';
import { EVALUATION_ATTRIBUTES } from '@/lib/constants';
import type { EvaluationResult } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RotateCw } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function ResultsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const results: EvaluationResult[] = [];
  let isValid = true;
  for (const attr of EVALUATION_ATTRIBUTES) {
    const scoreStr = searchParams.get(attr.name);
    if (scoreStr === null) {
      isValid = false;
      break;
    }
    results.push({ attribute: attr.name, score: parseFloat(scoreStr) });
  }

  if (!isValid || !id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div>
                 <h1 className="text-4xl font-bold font-headline">Resultados de la Evaluación</h1>
                <p className="text-muted-foreground mt-2">Análisis detallado de la calidad de la aplicación.</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" onClick={() => router.back()}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a Evaluar
                </Button>
                <Button asChild>
                    <Link href="/evaluate">
                        <RotateCw className="mr-2 h-4 w-4" />
                        Evaluar Otra App
                    </Link>
                </Button>
            </div>
        </div>
      <EvaluationResults results={results} applicationId={id} />
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Cargando resultados...</div>}>
      <ResultsPageContent />
    </Suspense>
  );
}
