import { Dispatch, SetStateAction, useMemo } from 'react';

import { questions } from '@/components/quiz/questions.dataset';
import { Answers } from '@/components/quiz/types';

interface QuestionnaireProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  answers: Answers;
  updateAnswer: (step: string, value: string | number) => void;
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
                  answers[`step${question.id}` as keyof Answers] ===
                  option.value
                }
                onChange={(e) => {
                  updateAnswer(`step${question.id}`, e.target.value);
                }}
              />
            )}
            {option.label}
          </label>
          {option.input && (
            <input
              onFocus={(event) => {
                updateAnswer(
                  `step${question.id}`,
                  answers[
                    `step${question.id}_extra-${index}` as keyof Answers
                  ] || ''
                );
              }}
              type={option.input}
              value={
                answers[`step${question.id}_extra-${index}` as keyof Answers] ||
                ''
              }
              onChange={(e) =>
                updateAnswer(
                  `step${question.id}_extra-${index}`,
                  e.target.value
                )
              }
            />
          )}
        </div>
      ))}
    </div>
  );
};
