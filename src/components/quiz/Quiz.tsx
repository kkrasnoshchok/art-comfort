import { useCallback, useMemo, useState } from 'react';

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

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  const isNextEnabled = useMemo(() => {
    const currentAnswer = answers[`${currentStep + 1}` as keyof Answers];
    const hasCurrentAnswer = !!currentAnswer?.value;
    const hasCurrentExtraAnswer = !!currentAnswer?.extraValues;

    return hasCurrentAnswer || hasCurrentExtraAnswer;
  }, [answers, currentStep]);

  const handleSubmit = () => {
    console.log('Final Answers:', answers);
    setIsSubmitted(true);
  };

  const closeModal = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setIsSubmitted(false);
    onClose();
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
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
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className='btn btn-secondary'
                label='Previous'
              />
              {currentStep < questions.length - 1 ? (
                <Button
                  onClick={handleNext}
                  disabled={!isNextEnabled}
                  className='btn btn-primary'
                  label='Next'
                />
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isNextEnabled}
                  className='btn btn-primary'
                  label='Submit'
                />
              )}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
