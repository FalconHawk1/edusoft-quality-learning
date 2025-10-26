'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Award, RotateCw } from 'lucide-react';
import type { QuizQuestion } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
// We'll add a simple function to save to Firestore later
// import { saveQuizResult } from '@/lib/firebase';

interface QuizProps {
  questions: QuizQuestion[];
  quizId: string;
}

export default function Quiz({ questions, quizId }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [error, setError] = useState('');
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleNext = () => {
    if (showResult && selectedAnswer !== null) {
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
    }

    setShowResult(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
    setStudentName('');
    setError('');
  };

  const handleSaveResult = async () => {
    if (!studentName.trim()) {
      setError('Por favor, ingresa tu nombre para guardar.');
      return;
    }
    setError('');
    
    // Placeholder for Firestore logic
    console.log('Saving result:', {
      studentName,
      quizId,
      score,
      totalQuestions: questions.length,
      date: new Date().toISOString(),
    });
    
    // try {
    //   await saveQuizResult({
    //     studentName,
    //     quizId,
    //     score,
    //     totalQuestions: questions.length,
    //   });
    //   toast({
    //     title: "¡Resultado Guardado!",
    //     description: "Tu puntuación ha sido registrada con éxito.",
    //   });
    // } catch (e) {
    //   toast({
    //     variant: "destructive",
    //     title: "Error al guardar",
    //     description: "No se pudo registrar tu puntuación. Inténtalo de nuevo.",
    //   });
    // }
    
    toast({
        title: "Resultado Guardado (Simulación)",
        description: `El resultado de ${studentName} ha sido guardado.`,
    });
  };
  
  const getScoreInterpretation = () => {
      const percentage = (score / questions.length) * 10;
      if (percentage <= 4) return { text: "Necesita mejorar", color: "text-red-500" };
      if (percentage <= 7) return { text: "Bueno", color: "text-yellow-500" };
      return { text: "Excelente", color: "text-green-500" };
  }

  if (isFinished) {
    const interpretation = getScoreInterpretation();
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-2xl">
        <CardHeader className="text-center">
          <Award className="h-16 w-16 mx-auto text-accent" />
          <CardTitle className="text-3xl font-headline mt-4">¡Evaluación Completada!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-5xl font-bold">
            {score} / {questions.length}
          </p>
          <p className={`text-2xl font-semibold ${interpretation.color}`}>{interpretation.text}</p>
          <Progress value={(score / questions.length) * 100} className="mt-6" />
          <div className="pt-6 space-y-2">
              <Label htmlFor="studentName" className="font-semibold">Guarda tu resultado:</Label>
              <Input 
                id="studentName"
                placeholder="Ingresa tu nombre" 
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="max-w-sm mx-auto"
                />
              {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleSaveResult} disabled={!studentName}>
            Guardar Puntuación
          </Button>
          <Button onClick={handleRestart} variant="outline">
            <RotateCw className="mr-2 h-4 w-4" />
            Volver a Intentar
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg overflow-hidden">
      <CardHeader>
        <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="mb-4" />
        <CardTitle className="font-headline text-2xl">
          Pregunta {currentQuestionIndex + 1}: {currentQuestion.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          onValueChange={(value) => setSelectedAnswer(Number(value))}
          value={selectedAnswer?.toString()}
          disabled={showResult}
          className="space-y-4"
        >
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              <div className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${
                  showResult && index === currentQuestion.correctAnswer ? 'bg-green-100 border-green-300' 
                  : showResult && index === selectedAnswer && !isCorrect ? 'bg-red-100 border-red-300'
                  : ''
                }`}>
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="text-base cursor-pointer flex-1">
                  {option}
                </Label>
                 {showResult && index === currentQuestion.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                 )}
                 {showResult && index === selectedAnswer && !isCorrect && (
                    <XCircle className="h-5 w-5 text-red-600" />
                 )}
              </div>
            </div>
          ))}
        </RadioGroup>
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-secondary rounded-lg border"
            >
              <h4 className="font-bold">Explicación:</h4>
              <p className="text-secondary-foreground">{currentQuestion.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={showResult ? handleNext : handleSubmit} 
          disabled={selectedAnswer === null} 
          className="w-full"
        >
          {showResult 
            ? (currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Evaluación') 
            : 'Confirmar Respuesta'}
        </Button>
      </CardFooter>
    </Card>
  );
}
