'use client';

import { useState, useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';
import EvaluationForm from '@/app/components/EvaluationForm';
import { mockApplications } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Application } from '@/lib/types';

export default function EvaluateAppPage({ params }: { params: { id: string } }) {
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/auth-error');
      return;
    }

    const user = JSON.parse(storedUser);
    let allApps: Application[] = [];

    if (user.username === 'admin') {
      const adminApps = localStorage.getItem('all_apps');
      allApps = adminApps ? JSON.parse(adminApps) : mockApplications;
    } else {
      const studentApps = localStorage.getItem('student_apps');
      allApps = studentApps ? JSON.parse(studentApps) : [];
    }

    const app = allApps.find((app) => app.id === params.id);

    if (app) {
      setApplication(app);
    }
    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!application) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Button asChild variant="outline" size="sm" className="mb-4">
          <Link href="/evaluate">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Panel
          </Link>
        </Button>
        <h1 className="text-4xl font-bold font-headline">
          Evaluando: {application.name}
        </h1>
        <p className="text-muted-foreground mt-2">
          Asigna una puntuación de 0 a 5 para cada atributo de calidad.
        </p>
      </div>

      <EvaluationForm applicationId={application.id} />
    </div>
  );
}
