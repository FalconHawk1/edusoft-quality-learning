import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BookOpen, Target } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'Módulo Educativo Interactivo',
      description: 'Aprende sobre las normas ISO/IEC 25010 y 9126, modelos de madurez como CMMI y las mejores prácticas de calidad de software a través de contenido dinámico.',
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: 'Evaluador de Calidad Práctico',
      description: 'Aplica tus conocimientos evaluando software. Registra aplicaciones y califícalas según atributos de calidad para obtener un puntaje ponderado.',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: 'Quizzes y Autoevaluaciones',
      description: 'Refuerza tu aprendizaje con quizzes interactivos que ofrecen retroalimentación instantánea y seguimiento de tu progreso.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full py-24 sm:py-32 flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container px-4 md:px-6">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              EduSoft Quality Learning
            </h1>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl mt-4">
              La plataforma definitiva para aprender y aplicar los principios de la calidad del software.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-headline bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/learn">Empezar a Aprender</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="font-headline">
                <Link href="/evaluate">Evaluar una Aplicación</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground font-headline">Sobre la Plataforma</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Enseña y Aplica la Calidad del Software</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  EduSoft Quality Learning es un proyecto académico diseñado para cerrar la brecha entre la teoría y la práctica en la ingeniería de software. Cumpliendo con los estándares ISO, te ofrecemos las herramientas para dominar y evaluar la calidad del software de manera efectiva.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center">
                    {feature.icon}
                    <CardTitle className="font-headline mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 EduSoft Quality Learning. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="/learn" className="text-xs hover:underline underline-offset-4">
              Aprende
            </Link>
            <Link href="/evaluate" className="text-xs hover:underline underline-offset-4">
              Evalúa
            </Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}
