import { motion } from 'framer-motion';

export const AboutSection = () => (
  <section
    id='about'
    className='flex w-screen flex-col items-center justify-center px-6 py-24 md:flex-row lg:h-screen lg:py-24 portrait:flex-col'
  >
    <motion.div className='flex-1 md:pr-4'>
      <h1 className='md:text-2xl lg:text-4xl'>
        Savor Serenity:
        <br />
        Where{' '}
        <motion.span className='bg-gradient-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent'>
          Art
        </motion.span>{' '}
        and{' '}
        <motion.span className='bg-gradient-to-r from-blue-500 to-blue-700  bg-clip-text text-transparent'>
          Comfort
        </motion.span>{' '}
        Converge
      </h1>
      <motion.p className='mt-8 md:pr-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        magnam obcaecati fugiat, hic sapiente eos doloremque odio dicta nulla
        rerum vero inventore magni? Quo itaque suscipit ullam nam dolorem
        assumenda voluptatem quidem nostrum dicta omnis unde accusantium
        officia, voluptatum, quae dignissimos, consequatur labore quasi nemo
        reprehenderit facilis cupiditate aspernatur magnam maxime? Nostrum, ea
        fuga.
      </motion.p>
    </motion.div>
    <motion.div className='flex h-full w-full flex-1 items-center justify-center lg:justify-end'>
      <motion.div className='mt-12 aspect-square w-full rounded-3xl bg-gradient-to-b from-blue-300 to-pink-300 lg:mt-0 lg:h-4/5' />
    </motion.div>
  </section>
);
