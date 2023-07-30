import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const AboutSection = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // Animate only once on enter
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  const fadeInUpAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const slideInRightAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id='about'
      className='flex h-screen w-screen flex-col items-center justify-center px-6 py-24 lg:flex-row'
      ref={ref}
    >
      <motion.div
        className='flex-1'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInUpAnimation}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>
          Savor Serenity:
          <br />
          Where{' '}
          <motion.span
            className='bg-gradient-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent'
            variants={slideInRightAnimation}
          >
            Art
          </motion.span>{' '}
          and{' '}
          <motion.span
            className='bg-gradient-to-r from-blue-500 to-blue-700  bg-clip-text text-transparent'
            variants={slideInRightAnimation}
          >
            Comfort
          </motion.span>{' '}
          Converge
        </h1>
        <motion.p
          className='mt-8'
          variants={fadeInUpAnimation}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          magnam obcaecati fugiat, hic sapiente eos doloremque odio dicta nulla
          rerum vero inventore magni? Quo itaque suscipit ullam nam dolorem
          assumenda voluptatem quidem nostrum dicta omnis unde accusantium
          officia, voluptatum, quae dignissimos, consequatur labore quasi nemo
          reprehenderit facilis cupiditate aspernatur magnam maxime? Nostrum, ea
          fuga.
        </motion.p>
      </motion.div>
      <motion.div
        className='flex h-full w-full flex-1 items-center justify-center lg:justify-end'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInRightAnimation}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <motion.div className='h-full w-4/5 rounded-3xl bg-blue-300 backdrop-blur-3xl lg:h-4/5'></motion.div>
      </motion.div>
    </section>
  );
};
