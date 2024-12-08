interface Results {
  [key: string]: number;
}

export const calculatePersonalityType = (answers: { [key: number]: number }) => {
  const results: Results = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const questionNumber = parseInt(questionId);
    if (questionNumber <= 4) {
      answer === 0 ? results.E++ : results.I++;
    } else if (questionNumber <= 8) {
      answer === 0 ? results.S++ : results.N++;
    } else if (questionNumber <= 12) {
      answer === 0 ? results.T++ : results.F++;
    } else {
      answer === 0 ? results.J++ : results.P++;
    }
  });

  return `${results.E > results.I ? 'E' : 'I'}${results.S > results.N ? 'S' : 'N'}${
    results.T > results.F ? 'T' : 'F'}${results.J > results.P ? 'J' : 'P'}`;
};

export const getPersonalityDescription = (type: string): { title: string; description: string } => {
  const descriptions: { [key: string]: { title: string; description: string } } = {
      ISTJ: {
        title: "المفتش",
        description: "عملي، موجه بالحقائق، وموثوق. أنت تقدر التقليد والتنظيم."
      },
      ISFJ: {
        title: "الواقي",
        description: "دافئ، محب، ومسؤول. أنت مكرس لخدمة الآخرين."
      },
      INFJ: {
        title: "المستشار",
        description: "بصير، مبدع، وحساس. أنت تبحث عن المعنى والاتصال."
      },
      INTJ: {
        title: "الماهر",
        description: "استراتيجي، مبتكر، ومستقل. تسعى وراء المعرفة والكفاءة."
      },
      ISTP: {
        title: "الحرفي",
        description: "ملاحظ، تحليلي، وقابل للتكيف. أنت متفوق في حل المشاكل العملية."
      },
      ISFP: {
        title: "الملحن",
        description: "لطيف، فني، وقابل للتكيف. تعيش في اللحظة الحالية."
      },
      INFP: {
        title: "الشفاء",
        description: "مثالي، مبدع، ومتعاطف. أنت تبحث عن الأصالة والانسجام."
      },
      INTP: {
        title: "المهندس",
        description: "منطقي، أصلي، ومفكر مبدع. تبحث عن الفهم والمعرفة."
      },
      ESTP: {
        title: "الدينامو",
        description: "نشط، عملي، وعفوي. تستمتع بالعمل والنتائج الفورية."
      },
      ESFP: {
        title: "المؤدي",
        description: "اجتماعي، ودود، وعفوي. تستمتع بالحياة وجلب الفرح للآخرين."
      },
      ENFP: {
        title: "البطل",
        description: "حماسي، مبدع، واجتماعي. ترى الإمكانيات في كل مكان."
      },
      ENTP: {
        title: "الرؤيوي",
        description: "سريع، مبتكر، وصريح. تستمتع بالتحديات الفكرية."
      },
      ESTJ: {
        title: "المشرف",
        description: "عملي، تقليدي، ومنظم. تقدر الوضوح والبنية."
      },
      ESFJ: {
        title: "المزود",
        description: "دافئ القلب، ضميري، ومتعاون. تسعى وراء الانسجام والاتصال."
      },
      ENFJ: {
        title: "المعلم",
        description: "كاريزمي، مثالي، وملهم. تساعد الآخرين على التطور والنمو."
      },
      ENTJ: {
        title: "القائد",
        description: "صريح، حاسم، وقائد استراتيجي. تنظم التغيير بفعالية."
      }
        
  }
  return descriptions[type];
};