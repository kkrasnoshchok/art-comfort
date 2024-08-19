import { useMemo, useState } from 'react';

import { Questionnaire } from '@/components/quiz/Questionnaire';
import { questions } from '@/components/quiz/questions.dataset';
import { SuccessScreen } from '@/components/quiz/SuccessScreen';
import { Answers } from '@/components/quiz/types';

import { Button } from '@/ui/Button';
import { Modal } from '@/ui/Modal';

// Initial state for answers
const initialAnswers: Answers = {};

type QuizProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Quiz = (props: QuizProps) => {
  const { isOpen, onClose } = props;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const updateAnswer = (step: string, value: string | number) => {
    setAnswers((prev) => ({ ...prev, [step]: value }));
  };

  const isNextEnabled = useMemo(() => {
    const currentAnswer = answers[`step${currentStep + 1}` as keyof Answers];
    // const optionChosen = questions[currentStep].options.indexOf
    const currentExtraAnswer =
      answers[`step${currentStep + 1}_extra` as keyof Answers];
    const hasCurrentAnswer =
      currentAnswer !== undefined && currentAnswer !== '';
    const hasCurrentExtraAnswer =
      currentExtraAnswer !== undefined && currentExtraAnswer !== '';
    return hasCurrentAnswer || hasCurrentExtraAnswer;
  }, [answers, currentStep]);

  const handleSubmit = () => {
    console.log('Final Answers:', answers);
    setIsSubmitted(true);
  };

  return (
    <Modal {...{ isOpen, onClose }}>
      <div className='p-4'>
        {isSubmitted ? (
          <SuccessScreen />
        ) : (
          <>
            <Questionnaire
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              answers={answers}
              updateAnswer={updateAnswer}
            />
            <div className='mt-4 flex justify-between'>
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className='btn btn-secondary'
              >
                Previous
              </button>
              {currentStep < questions.length - 1 ? (
                <Button
                  onClick={handleNext}
                  disabled={!isNextEnabled}
                  className='btn btn-primary'
                  label='Next'
                />
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isNextEnabled}
                  className='btn btn-primary'
                >
                  Submit
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
