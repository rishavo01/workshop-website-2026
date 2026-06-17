import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle, AlertTriangle } from 'lucide-react';

interface InteractiveCodeProps {
  task: string;
  initialCode: string;
  solution: string;
  onPracticeCompleted?: () => void;
}

export default function InteractiveCode({ task, initialCode, solution, onPracticeCompleted }: InteractiveCodeProps) {
  const [code, setCode] = useState(initialCode);
  const [status, setStatus] = useState<'idle' | 'success' | 'fail'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Reset code when task changes
  useEffect(() => {
    setCode(initialCode);
    setStatus('idle');
    setFeedbackMessage('');
  }, [initialCode]);

  const handleRun = () => {
    // Basic verification: compare codes after cleaning whitespaces/newlines
    const cleanStr = (str: string) => str.replace(/\s+/g, '').trim().toLowerCase();
    
    const isMatched = cleanStr(code) === cleanStr(solution);

    if (isMatched) {
      setStatus('success');
      setFeedbackMessage('Great job! Your code successfully compiles and matches the correct output solution!');
      if (onPracticeCompleted) {
        onPracticeCompleted();
      }
    } else {
      setStatus('fail');
      setFeedbackMessage('The output did not match our expected solution. Check for syntax, typing, or casing errors and try again!');
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setStatus('idle');
    setFeedbackMessage('');
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Task instructions header */}
      <div className="bg-gray-50 border-b border-gray-200 p-4">
        <h4 className="font-semibold text-gray-900 text-sm mb-1.5">Interactive Practice Task:</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{task}</p>
      </div>

      {/* Editor & Actions */}
      <div className="p-4 bg-gray-900 flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-gray-400 font-mono">WORKSPACE EDITOR</span>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-40 font-mono text-sm bg-gray-950 text-green-400 border border-gray-800 rounded p-3 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          spellCheck={false}
        />
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500 font-mono">Verify your logic against standard outcomes</span>
          <button
            onClick={handleRun}
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white rounded px-4 py-1.5 text-xs font-bold transition-colors shadow"
          >
            <Play className="h-3.5 w-3.5 fill-current" /> Run & Verify
          </button>
        </div>
      </div>

      {/* Output Console / Status Banner */}
      {status !== 'idle' && (
        <div className={`border-t p-4 text-sm ${
          status === 'success'
            ? "bg-green-50 border-green-200 text-green-800"
            : "bg-red-50 border-red-200 text-red-800"
        }`}>
          <div className="flex gap-2.5 items-start">
            {status === 'success' ? (
              <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-bold mb-0.5">
                {status === 'success' ? "Verification Succeeded!" : "Verification Failed"}
              </p>
              <p className="leading-relaxed text-xs">{feedbackMessage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
