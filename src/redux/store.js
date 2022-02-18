let EasyQuestions = [
  {
    id: 1,
    questionNum: 1,
    question: "Выберите правильный перевод слова ' иметь '",
    q: [
      {type: "no",var: " Want "},
      { type: "yes", var: " Have " },
      { type: "no", var: " I am " },
    ],

    path: "/1",
    link: "/easy/2",
    next: "NEXT",
  },
  {
    id: 2,
    questionNum: 2,
    question: "Выберите правильный перевод слова ' идти '",
    q: [
      { type: "yes", var: " go " },
      { type: "no", var: " went  " },
      { type: "no", var: " move " },
    ],

    path: "/2",
    link: "/easy/3",
    next: "NEXT",
  },
  {
    id: 3,
    questionNum: 3,
    question: "Выберите правильный перевод слова 'свободен '",
    q: [
      { type: "yes", var: " free" },
      { type: "no", var: " busy " },
      { type: "no", var: " study" },
    ],

    path: "/3",
    link: "/easy/4",
    next: "NEXT",
  },
  {
    id: 4,
    questionNum: 4,
    question: "Выберите правильный перевод слова ' низкий '",

    q: [
      { type: "no", var: " little" },

      { type: "no", var: " small" },

      { type: "yes", var: " low" },
    ],

    path: "/4",
    link: "/easy/5",
    next: "NEXT",
  },
  {
    id: 5,
    questionNum: 5,
    question: "Выберите правильный перевод слова ' cделать ' ",

    q: [
      { type: "yes", var: " make" },
      { type: "no", var: " create" },

      { type: "no", var: " did " },
    ],

    path: "/5",
    link: "/easy/result",
    next: "NEXT",
  },
  {
    id: 6,
    questionNum: 6,
    question: "Выберите правильный перевод слова ' Я никогда не был в России ' ",

    q: [
      { type: "no", var: " I have ever been to Russia" },
      { type: "yes", var: " I was never to Russia" },
      { type: "no", var: " I have never been to Russia " },
    ],

    path: "/6",
    link: "/easy/7",
    next: "NEXT",
  },
  {
    id: 7,
    questionNum: 7,
    question: " Выберите подходящий вариант перевода 'Вы вообще слушаете?' ",

    q: [
      { type: "no", var: " Have you even listened?" },
      { type: "no", var: "  Do you even listening?" },
      { type: "yes", var: " Are you even listening? " },
    ],

    path: "/7",
    link: "/easy/8",
    next: "NEXT",
  },
  {
    id: 8,
    questionNum: 8,
    question: " Выберите подходящий вариант перевода ' В понедельник я отремонтировал дверь и окно' ",
   
    
    
    q: [
      { type: "no", var: " I have fixed the door and window on Monday" },
      { type: "yes", var: "  I fixed the door and window on Monday" },
      { type: "no", var: " I fix the door and window on Monday " },
    ],

    path: "/8",
    link: "/easy/9",
    next: "NEXT",
  },
  {
    id: 9,
    questionNum: 9,
    question: " Выберите правильный вариант ответа на вопрос 'What were you doing last night at 7:00?'",
   
    
    
    q: [
      { type: "yes", var: " I was sleeping." },
      { type: "no", var: "  I will be sleeping." },
      { type: "no", var: " I sleep." },
    ],

    path: "/9",
    link: "/easy/10",
    next: "NEXT",
  },
  {
    id: 10,
    questionNum: 10,
    question: " Выберите правильный вариант ответа на вопрос '  What is your busiest day of the week?' ",
   
    
    
    q: [
      { type: "yes", var: " Tuesday." },
      { type: "no", var: " In the morning." },
      { type: "no", var: "Every day. " },
    ],

    path: "/10",
    link: "/result",
    next: "NEXT",
  },
];

export default EasyQuestions;
