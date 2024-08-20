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

export type Answer = {
  label: string;
  value?: string | number;
  extraValues?: { [key: string]: string | number };
};

export type Answers = {
  [key: string]: Answer;
};

export type UpdateAnswerFunction = (step: string, value: Answer) => void;

export interface FinalAnswers {
  [key: number]: {
    question: string;
    answer: {
      value: string | number;
      extraValues?: { [key: string]: string | number };
    };
  };
}
