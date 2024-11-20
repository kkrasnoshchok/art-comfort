import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';

import { questions } from '@/components/quiz/questions.dataset';
import { Answers, Option } from '@/components/quiz/types';

import { Input } from '@/ui/Input';
import { cn } from '@/utils';

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

  const renderInput = useCallback(
    (option: Option) => {
      const value = option.value;
      const inputName = `${question.id}`;
      const isActive = answers[inputName]?.value === value;
      return (
        <div
          className={cn(
            'flex cursor-pointer flex-row items-center rounded-lg border p-4',
            'transition-all hover:-translate-y-[2px] hover:shadow-md',
            isActive && '-translate-y-[2px] border-black shadow-md'
          )}
          onClick={() => {
            updateAnswer((prev) => ({
              ...prev,
              [inputName]: {
                label: question.question,
                value,
              },
            }));
          }}
        >
          <p className='ml-2 font-bold'>{option.label}</p>
        </div>
      );
    },
    [answers, question, updateAnswer]
  );

  if (!question || (question.condition && !question.condition(answers))) {
    setCurrentStep((prev) => prev + 1);
    return null;
  }

  return (
    <div>
      <h2 className='text-center text-xl'>{question.question}</h2>
      <div className='mt-4 flex flex-col gap-2'>
        {question.options.map((option, index) => (
          <div key={option.value}>
            {!option.input && renderInput(option)}
            {option.input && (
              <Input
                label={option.label}
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
    </div>
  );
};
