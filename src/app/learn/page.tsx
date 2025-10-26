import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { qualityAttributes, standardsAndModels, implementationSteps, importanceData, historyData, resourcesData, advancedQuizQuestions } from "@/lib/data";
import Quiz from "@/app/components/Quiz";
import { ArrowRight, CheckCircle, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HistoryTimeline } from "../components/HistoryTimeline";

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Aprende sobre Calidad del Software
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Explora los conceptos fundamentales, normas y modelos que definen la calidad en el desarrollo de software.
        </p>
      </header>

      {/* 1. Historia de la Calidad del Software */}
      <section id="history" className="mb-16">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">1. Historia y Evolución de la Calidad del Software</h2>
        <HistoryTimeline events={historyData} />
      </section>

      {/* 2. Importancia y Beneficios */}
      <section id="importance" className="mb-16">
         <h2 className="text-3xl font-bold font-headline mb-8 text-center">2. ¿Por Qué es Importante la Calidad?</h2>
         <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Un pilar para el éxito</h3>
            <p className="text-lg text-foreground/90 mb-4">
              La calidad del software no es un lujo, sino una necesidad. Asegura que un producto no solo funcione, sino que lo haga de manera fiable, eficiente y segura, satisfaciendo tanto las necesidades del usuario como los objetivos del negocio.
            </p>
            <p className="text-lg text-foreground/90">
              Invertir en calidad desde el inicio reduce costes a largo plazo, previene fallos catastróficos y construye una reputación sólida.
            </p>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Fallo Costoso: Ariane 5</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">En 1996, el cohete Ariane 5 explotó 40 segundos después de su lanzamiento debido a un error de software. Una conversión de datos incorrecta, que no fue probada adecuadamente, costó más de 370 millones de dólares. Este es un recordatorio extremo de la importancia de las pruebas y la calidad del código.</p>
            </CardContent>
          </Card>
         </div>
         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <Users className="h-10 w-10 text-primary"/>
                <CardTitle>Para el Usuario</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Experiencia fluida, confianza en el producto y satisfacción que fomenta la lealtad.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <Target className="h-10 w-10 text-accent"/>
                <CardTitle>Para el Negocio</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reducción de costes de mantenimiento, mejor reputación y mayor competitividad en el mercado.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <CheckCircle className="h-10 w-10 text-green-500"/>
                <CardTitle>Para el Desarrollo</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Código más fácil de mantener y evolucionar, menos estrés por errores y orgullo por el trabajo bien hecho.</p>
              </CardContent>
            </Card>
         </div>
      </section>

      {/* 3. Implementación Práctica */}
      <section id="implementation" className="mb-16">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">3. Implementando la Calidad en Proyectos Reales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {implementationSteps.map((step) => (
            <Card key={step.phase} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{step.phase}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2">Prácticas y Herramientas:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {step.practices.map((practice, index) => (
                    <li key={index}>{practice}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Modelos y Normas Ampliados */}
      <section id="standards" className="mb-16">
        <h2 className="text-3xl font-bold font-headline mb-6 text-center">4. Modelos y Normas de Calidad</h2>
        <Tabs defaultValue="iso25010" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 h-auto">
            {standardsAndModels.map(standard => (
              <TabsTrigger key={standard.id} value={standard.id} className="text-xs sm:text-sm">{standard.title}</TabsTrigger>
            ))}
          </TabsList>
          {standardsAndModels.map(standard => (
            <TabsContent key={standard.id} value={standard.id}>
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline">{standard.title}</CardTitle>
                  <CardDescription>{standard.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="text-base text-foreground/80 space-y-4">
                  <p>{standard.content}</p>
                   {standard.details && <p className="text-sm p-4 bg-secondary rounded-lg">{standard.details}</p>}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      
      {/* 5. Atributos de Calidad Ampliados */}
      <section id="attributes" className="mb-16">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">5. Atributos de Calidad (ISO/IEC 25010)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityAttributes.map((attribute) => (
            <Card key={attribute.name} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <attribute.icon className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="font-headline">{attribute.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{attribute.description}</p>
                <p className="mt-4 text-xs p-2 bg-secondary rounded-md"><strong>Ejemplo de evaluación:</strong> {attribute.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. Quiz Avanzado */}
      <section id="quiz" className="mb-16">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">6. Evaluación Final</h2>
        <Quiz questions={advancedQuizQuestions} quizId="advanced-quality-quiz" />
      </section>

      {/* 7. Recursos Adicionales */}
      <section id="resources">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">7. Recursos Adicionales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((resource) => (
            <Card key={resource.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                 <Button asChild variant="outline" size="sm">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Visitar <ArrowRight className="ml-2 h-4 w-4"/>
                  </a>
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
