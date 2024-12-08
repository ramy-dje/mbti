import type { Question } from '../questions';

export const snQuestions: Question[] = [
  {
    id: 5,
    text: "عند حل المشاكل، هل تفضل أن:",
    category: "S/N",
    options: ["التركيز على الحقائق والتفاصيل الملموسة", "البحث عن الأنماط والإمكانات"]
  },
  {
    id: 6,
    text: "أي شيء يهمك أكثر:",
    category: "S/N",
    options: ["ما هو فعلي وحالي", "ما هو ممكن ومستقبلي"]
  },
  {
    id: 7,
    text: "عند تعلم شيء جديد، تفضل:",
    category: "S/N",
    options: ["التعليمات خطوة بخطوة", "فهم الصورة الكبيرة أولاً"]
  },
  {
    id: 8,
    text: "أنت أكثر انجذابًا إلى:",
    category: "S/N",
    options: ["الطرق العملية والمثبتة", "النهج الجديدة والمبتكرة"]
  }
];
