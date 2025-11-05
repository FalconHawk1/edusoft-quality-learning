
import CodeAnalyzer from '@/app/components/CodeAnalyzer';

export default function LabPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Laboratorio de Código
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Un entorno interactivo para analizar la calidad de tu código basado en los atributos de la norma ISO/IEC 25010.
        </p>
      </header>
      <main>
        <CodeAnalyzer />
      </main>
    </div>
  );
}
