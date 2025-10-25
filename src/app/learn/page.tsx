import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { qualityAttributes, standardsAndModels, quizQuestions } from "@/lib/data";
import Quiz from "@/app/components/Quiz";

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

      <section id="introduction" className="mb-16">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">1. Introducción a la Calidad del Software</CardTitle>
          </CardHeader>
          <CardContent className="text-lg space-y-4 text-foreground/90">
            <p>
              La <strong>calidad del software</strong> no es un lujo, sino una necesidad en el competitivo mundo digital de hoy. Se refiere al grado en que un sistema, componente o proceso cumple con los requisitos especificados y las necesidades o expectativas del cliente o usuario.
            </p>
            <p>
              Abarca desde la corrección funcional (hacer lo que se supone que debe hacer) hasta atributos no funcionales como la fiabilidad, la usabilidad y la eficiencia. Una alta calidad de software reduce los costos a largo plazo, aumenta la satisfacción del cliente y fortalece la reputación de la marca.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="standards" className="mb-16">
        <h2 className="text-3xl font-bold font-headline mb-6 text-center">2. Modelos y Normas</h2>
        <Tabs defaultValue="iso25010" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            {standardsAndModels.map(standard => (
              <TabsTrigger key={standard.id} value={standard.id} className="text-xs sm:text-sm">{standard.title}</TabsTrigger>
            ))}
          </TabsList>
          {standardsAndModels.map(standard => (
            <TabsContent key={standard.id} value={standard.id}>
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline">{standard.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-base text-foreground/80">
                  <p>{standard.content}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section id="attributes" className="mb-16">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">3. Atributos de Calidad (ISO/IEC 25010)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityAttributes.map((attribute) => (
            <Card key={attribute.name} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <attribute.icon className="h-10 w-10 text-primary" />
                <CardTitle className="font-headline">{attribute.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{attribute.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="quiz">
        <h2 className="text-3xl font-bold font-headline mb-8 text-center">4. Autoevaluación Rápida</h2>
        <Quiz questions={quizQuestions} />
      </section>
    </div>
  );
}
