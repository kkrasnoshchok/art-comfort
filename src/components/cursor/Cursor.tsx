import AnimatedCursor from 'react-animated-cursor';

export const Cursor = () => (
  <AnimatedCursor
    innerSize={32}
    outerSize={0}
    innerStyle={{
      border: '2px solid rgba(20, 20, 43, 1)',
      backgroundColor: 'rgba(235, 237, 241, 0.1)',
    }}
    outerAlpha={0.9}
    innerScale={2}
    trailingSpeed={1}
    clickables={[
      {
        target: '.header-logo',
        innerScale: 3.5,
        innerStyle: {
          border: '4px solid rgba(196, 12, 82, 1)',
          backgroundColor: 'rgba(52, 76, 114, 0.8)',
        },
        children: (
          <p className='text-primary-bg text-center text-xs font-semibold'>
            На головну сторінку
          </p>
        ),
      },
      {
        target: '.header-link',
        innerScale: 1.5,
        innerStyle: {
          border: '2px solid rgba(196, 12, 82, 1)',
          backgroundColor: 'rgba(52, 76, 114, 0.2)',
        },
      },
      {
        target: '.header-language-select',
        innerScale: 1.2,
        innerStyle: {
          border: '2px solid rgba(196, 12, 82, 1)',
          backgroundColor: 'rgba(52, 76, 114, 0.4)',
        },
      },
      {
        target: '.header-burger-menu',
        innerScale: 1.5,
        innerStyle: {
          border: '2px solid rgba(196, 12, 82, 1)',
          backgroundColor: 'rgba(52, 76, 114, 0.4)',
        },
      },
      {
        target: 'a',
        innerScale: 2.5,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
          border: '4px solid rgba(196, 12, 82, 1)',
        },
        children: (
          <p className='text-primary-bg text-xs font-semibold'>Натиснути</p>
        ),
      },
      {
        target: '.services-card',
        innerScale: 2,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
          border: '4px solid rgba(196, 12, 82, 1)',
        },
        children: (
          <p className='text-primary-bg p text-center text-sm'>Обрати</p>
        ),
      },
      {
        target: '.team-element',
        innerScale: 2.4,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
        },
        children: (
          <p className='text-primary-bg p text-center text-xs'>Звʼязатись</p>
        ),
      },
      {
        target: '.base-input',
        innerScale: 1.5,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
        },
      },
      {
        target: '.input-file',
        innerScale: 3,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
        },
        children: (
          <p className='text-primary-bg p text-center text-xs'>Додати файл</p>
        ),
      },
      {
        target: '.vacancy-list-column',
        innerScale: 2,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
        },
        children: (
          <p className='text-primary-bg p text-center text-[10px]'>Сортувати</p>
        ),
      },
      {
        target: '.vacancy-list-card',
        innerScale: 3,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
        },
        children: (
          <p className='text-primary-bg p text-center text-xs'>
            Податись на вакансію
          </p>
        ),
      },
    ]}
  />
);
