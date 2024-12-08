export interface Question {
  id: number;
  text: string;
  category: 'E/I' | 'S/N' | 'T/F' | 'J/P';
  options: [string, string];
}

import { eiQuestions } from './questions/eiQuestions';
import { snQuestions } from './questions/snQuestions';
import { tfQuestions } from './questions/tfQuestions';
import { jpQuestions } from './questions/jpQuestions';

export const questions: Question[] = [
  ...eiQuestions,
  ...snQuestions,
  ...tfQuestions,
  ...jpQuestions
];