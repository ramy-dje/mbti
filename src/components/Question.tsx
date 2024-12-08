import React from 'react';
import type { Question as QuestionType } from '../data/questions';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (questionId: number, answer: number) => void;
  answer?: number;
}

export const Question: React.FC<QuestionProps> = ({ question, onAnswer, answer }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(question.id, index)}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              answer === index
                ? 'bg-blue-500 text-white'
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};