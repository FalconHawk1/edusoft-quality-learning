'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Award, RotateCw } from 'lucide-react';
import type { QuizQuestion } from '@/lib/types';

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleNext = () => {
    if (selectedAnswer !== null) {
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
  };

  if (isFinished) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-2xl">
        <CardHeader className="text-center">
          <Award className="h-16 w-16 mx-auto text-accent" />
          <CardTitle className="text-3xl font-headline mt-4">¡Quiz Completado!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-5xl font-bold">
            {score} / {questions.length}
          </p>
          <p className="text-muted-foreground mt-2">Respuestas correctas</p>
          <Progress value={(score / questions.length) * 100} className="mt-6" />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleRestart}>
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
              <div className="flex items-center space-x-3">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="text-base cursor-pointer">
                  {option}
                </Label>
              </div>
              <AnimatePresence>
                {showResult && index === currentQuestion.correctAnswer && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 text-sm text-green-600 flex items-center"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" /> Correcto
                  </motion.div>
                )}
                {showResult && index === selectedAnswer && !isCorrect && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 text-sm text-red-600 flex items-center"
                  >
                    <XCircle className="h-4 w-4 mr-2" /> Incorrecto
                  </motion.div>
                )}
              </AnimatePresence>
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
        <Button onClick={showResult ? handleNext : handleSubmit} disabled={selectedAnswer === null} className="w-full">
          {showResult ? 'Siguiente Pregunta' : 'Confirmar Respuesta'}
        </Button>
      </CardFooter>
    </Card>
  );
}
