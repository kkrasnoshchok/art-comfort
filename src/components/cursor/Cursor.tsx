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
        innerScale: 4.5,
        innerStyle: {
          border: '4px solid rgba(196, 12, 82, 1)',
          backgroundColor: 'rgba(52, 76, 114, 0.8)',
          borderRadius: 48,
        },
        children: (
          <p className='text-primary-bg text-center font-semibold'>
            Повернутись на головну сторінку
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
        target: '.swiper-element',
        innerScale: 4.5,
        innerStyle: {
          border: '4px solid rgba(196, 12, 82, 1)',
          backgroundColor: 'rgba(52, 76, 114, 0.8)',
        },
        children: (
          <p className='text-primary-bg text-center font-semibold'>
            Дізнатись більше про партнерів
          </p>
        ),
      },
      {
        target: 'a',
        innerScale: 3.5,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
          border: '4px solid rgba(196, 12, 82, 1)',
        },
        children: <p className='text-primary-bg font-semibold'>Натиснути</p>,
      },
      {
        target: '.services-card',
        innerScale: 2.5,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
          border: '4px solid rgba(196, 12, 82, 1)',
        },
        children: <p className='text-primary-bg p text-center'>Обрати</p>,
      },
      {
        target: '.project-card',
        innerScale: 3.5,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
          border: '4px solid rgba(196, 12, 82, 1)',
        },
        children: (
          <p className='text-primary-bg p text-center'>Дізнатись більше</p>
        ),
      },
      {
        target: '.team-element',
        innerScale: 3.5,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
          border: '4px solid rgba(196, 12, 82, 1)',
        },
        children: <p className='text-primary-bg p text-center'>Звʼязатись</p>,
      },
      {
        target: '.base-input',
        innerScale: 2,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
          border: '4px solid rgba(196, 12, 82, 1)',
        },
      },
      {
        target: '.input-file',
        innerScale: 4,
        innerStyle: {
          backgroundColor: 'rgba(196, 12, 82, 1)',
          border: '4px solid rgba(196, 12, 82, 1)',
        },
        children: (
          <p className='text-primary-bg p text-center'>
            Натисність щоб додати файл
          </p>
        ),
      },
    ]}
  />
);
