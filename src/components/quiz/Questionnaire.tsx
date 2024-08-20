import { Dispatch, SetStateAction, useMemo } from 'react';

import { questions } from '@/components/quiz/questions.dataset';
import { Answers } from '@/components/quiz/types';

interface QuestionnaireProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  answers: Answers;
  updateAnswer: Dispatch<SetStateAction<Answers>>;
}

export const Questionnaire = ({
  currentStep,
  setCurrentStep,
  answers,
  updateAnswer,
}: QuestionnaireProps) => {
  const question = useMemo(() => questions[currentStep], [currentStep]);

  console.log('[Log] question', {
    question,
    answers,
  });

  if (!question || (question.condition && !question.condition(answers))) {
    setCurrentStep((prev) => prev + 1);
    return null;
  }

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <div key={option.value}>
          <label>
            {!option.input && (
              <input
                type='radio'
                name={`step${question.id}`}
                value={option.value}
                checked={
                  answers[`${question.id}` as keyof Answers]?.value ===
                  option.value
                }
                onChange={(e) => {
                  updateAnswer((prev) => ({
                    ...prev,
                    [`${question.id}`]: {
                      label: question.question,
                      value: e.target.value,
                    },
                  }));
                }}
              />
            )}
            {option.label}
          </label>
          {option.input && (
            <input
              type={option.input}
              value={
                answers[`${question.id}` as keyof Answers]?.extraValues?.[
                  index
                ] || ''
              }
              onChange={(e) =>
                updateAnswer((prev) => ({
                  ...prev,
                  [`${question.id}`]: {
                    label: question.question,
                    extraValues: {
                      ...prev[`${question.id}`]?.extraValues,
                      [index]: e.target.value,
                    },
                  },
                }))
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};
