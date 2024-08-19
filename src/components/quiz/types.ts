export interface Option {
  value: string;
  label: string;
  input?: 'text' | 'number';
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  condition?: (answers: Answers) => boolean;
}

export interface Answers {
  [key: number]: {
    value: string | number;
    extraValues?: { [key: string]: string | number };
  };
}

export interface FinalAnswers {
  [key: number]: {
    question: string;
    answer: {
      value: string | number;
      extraValues?: { [key: string]: string | number };
    };
  };
}
