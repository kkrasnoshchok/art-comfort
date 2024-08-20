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

  const isNextEnabled = useMemo(() => {
    const currentAnswer = answers[`${currentStep + 1}` as keyof Answers];
    // return hasCurrentAnswer || hasCurrentExtraAnswer;
    return true;
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
              updateAnswer={setAnswers}
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
