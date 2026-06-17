import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

interface QuizComponentProps {
  questions: QuizQuestion[];
  onQuizCompleted?: () => void;
}

export default function QuizComponent({ questions, onQuizCompleted }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answersLog, setAnswersLog] = useState<{ [key: number]: boolean }>({});

  if (!questions || questions.length === 0) {
    return (
      <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-6 text-center text-gray-500">
        No quiz questions available for this lesson.
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (submitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    if (selectedOptionIndex === null || submitted) return;
    
    const isCorrect = selectedOptionIndex === currentQuestion.correctAnswerIndex;
    setSubmitted(true);
    setAnswersLog(prev => ({ ...prev, [currentQuestionIndex]: isCorrect }));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOptionIndex(null);
    setSubmitted(false);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
      if (onQuizCompleted) {
        onQuizCompleted();
      }
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setSubmitted(false);
    setScore(0);
    setShowResult(false);
    setAnswersLog({});
  };

  if (showResult) {
    const passed = score >= Math.ceil(questions.length / 2);
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-700 mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz Completed!</h3>
        <p className="text-gray-600 mb-6">
          You scored <span className="font-bold text-blue-700">{score}</span> out of <span className="font-bold">{questions.length}</span> questions.
        </p>

        <div className="inline-flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm">
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="h-4 w-4" /> Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
        <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
          Current Score: {score}/{questions.length}
        </span>
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-gray-900 text-lg mb-6">{currentQuestion.question}</h4>

        {/* Options list */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOptionIndex === idx;
            const isCorrectOption = currentQuestion.correctAnswerIndex === idx;
            
            let cardStyle = "border-gray-200 hover:bg-gray-50";
            let circleStyle = "border-gray-300";

            if (isSelected) {
              cardStyle = "border-blue-600 bg-blue-50/50";
              circleStyle = "border-blue-600 bg-blue-600 text-white";
            }

            if (submitted) {
              if (isCorrectOption) {
                cardStyle = "border-green-600 bg-green-50/40";
                circleStyle = "border-green-600 bg-green-600 text-white";
              } else if (isSelected) {
                cardStyle = "border-red-600 bg-red-50/40";
                circleStyle = "border-red-600 bg-red-600 text-white";
              } else {
                cardStyle = "border-gray-200 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                disabled={submitted}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full flex items-center gap-4 rounded-lg border-2 p-4 text-left transition-all ${cardStyle}`}
              >
                <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${circleStyle}`}>
                  {submitted && isCorrectOption ? "✓" : submitted && isSelected ? "✗" : idx + 1}
                </div>
                <span className="text-sm font-medium text-gray-700">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation text box */}
        {submitted && (
          <div className={`mt-6 rounded-lg p-4 border text-sm ${
            selectedOptionIndex === currentQuestion.correctAnswerIndex
              ? "bg-green-50/50 border-green-200 text-green-800"
              : "bg-red-50/50 border-red-200 text-red-800"
          }`}>
            <div className="flex gap-2 items-start">
              {selectedOptionIndex === currentQuestion.correctAnswerIndex ? (
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-bold mb-1">
                  {selectedOptionIndex === currentQuestion.correctAnswerIndex ? "Correct Answer!" : "Incorrect Answer"}
                </p>
                {currentQuestion.explanation && <p className="leading-relaxed">{currentQuestion.explanation}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="mt-6 flex justify-end gap-4 border-t border-gray-100 pt-4">
          {!submitted ? (
            <button
              disabled={selectedOptionIndex === null}
              onClick={handleSubmit}
              className={`rounded px-6 py-2 text-sm font-bold text-white transition-colors ${
                selectedOptionIndex === null
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800"
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="rounded bg-blue-700 px-6 py-2 text-sm font-bold text-white hover:bg-blue-800 transition-colors"
            >
              {currentQuestionIndex + 1 < questions.length ? "Next Question" : "Finish Quiz"}
            </button>
          )
          }
        </div>
      </div>
    </div>
  );
}
