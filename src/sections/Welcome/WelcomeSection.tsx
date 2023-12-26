import { useEffect, useRef } from 'react';

import { SectionWrapper } from '@/components/sectionWrapper';

import { AnimatedBackground } from '@/sections/Welcome/AnimatedBackground';
import { Button } from '@/ui/Button';

export const WelcomeSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current?.play();
    }
  }, [videoRef.current]);
  return (
    <SectionWrapper
      sectionProps={{ id: 'about' }}
      className='relative z-20 flex min-h-screen w-screen flex-col items-center justify-center p-8 pt-24'
      // innerClassName='rounded-b-[48px] rounded-bl-[48px] shadow-xl'
    >
      <div className='relative z-20 w-11/12'>
        <h1 className='text-primary-default uppercase'>
          Мистецтво створення комфорту
        </h1>
        <p className='text-primary-defaultStrong border-primary-bg mt-6 w-1/2 rounded-xl border bg-slate-50 bg-opacity-20 p-3 shadow-lg backdrop-blur-2xl'>
          Ласкаво просимо до Art-Comfort, де інновації зустрічають комфорт у
          сфері HVAC! Як ваш надійний партнер з опалення, вентиляції та
          кондиціювання повітря, ми пишаємося тим, що пропонуємо безпрецедентні
          рішення, які переосмислюють ваше відчуття внутрішнього комфорту.
        </p>
        <p className='text-primary-defaultStrong border-primary-bg mt-4 w-1/2 rounded-xl border bg-slate-50 bg-opacity-20 p-3 shadow-lg backdrop-blur-2xl'>
          Наша команда кваліфікованих професіоналів прагне надавати
          індивідуальні рішення, які надають пріоритет ефективності, сталості
          та, прежде всього, вашому абсолютному комфорту.
        </p>
        <p className='text-primary-defaultStrong border-primary-bg mt-4 w-1/2 rounded-xl border bg-slate-50 bg-opacity-20 p-3 shadow-lg backdrop-blur-2xl'>
          Відкрийте нову еру кліматичного контролю з Art-Comfort, де кожен
          проект - це шедевр, а ваш комфорт - наше полотно. Ласкаво просимо в
          світ, де опалення та охолодження стають видом мистецтва - ласкаво
          просимо до Art-Comfort.
        </p>

        <Button label='Що ми робимо?' href='#services' className='mt-4' />
      </div>
      <AnimatedBackground />
    </SectionWrapper>
  );
};
