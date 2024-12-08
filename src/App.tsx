import React, { useState } from 'react';
import { questions } from './data/questions';
import { Question } from './components/Question';
import { ResultModal } from './components/ResultModal';
import { calculatePersonalityType, getPersonalityDescription } from './utils/personalityCalculator';
import { Brain } from 'lucide-react';
import logo from './imgs/sccLogo.png'

function App() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, answer: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleComplete = () => {
    if (Object.keys(answers).length === questions.length) {
      setShowResult(true);
    }
  };

  const personalityType = calculatePersonalityType(answers);
  const description = getPersonalityDescription(personalityType);

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center gap-2">
            <img src={logo} alt="" className='w-12 h-12' />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">MBTI Personality Test</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
اكتشف نوع شخصيتك من خلال هذا التقييم الشامل بناءً على مقياس مؤشر نوع الشخصية مايرز-بريغز
          </p>
          <button
            onClick={() => setStarted(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
        <div className="flex justify-center gap-2">
            <img src={logo} alt="" className='w-12 h-12' />
            <h1 className="text-3xl font-bold text-gray-800 text-center">MBTI Personality Test</h1>
          </div>
           <div className="mt-4 bg-white rounded-lg p-4 shadow-md">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{
                  width: `${(Object.keys(answers).length / questions.length) * 100}%`,
                }}
              ></div>
            </div>
            <p className="text-center mt-2 text-gray-600">
              {Object.keys(answers).length} of {questions.length} questions answered
            </p>
          </div>
        </div>

        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            onAnswer={handleAnswer}
            answer={answers[question.id]}
          />
        ))}

        <div className="text-center mt-8">
          <button
            onClick={handleComplete}
            disabled={Object.keys(answers).length !== questions.length}
            className={`px-8 py-3 rounded-lg font-semibold ${
              Object.keys(answers).length === questions.length
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Complete Test
          </button>
        </div>
      </div>

      {showResult && (
        <ResultModal
          type={personalityType}
          description={description}
          onClose={() => setShowResult(false)}
        />
      )}
    </div>
  );
}

export default App;