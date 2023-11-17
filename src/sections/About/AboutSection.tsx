import { motion } from 'framer-motion';
import Image from 'next/image';

import bgPath from '@/assets/About_Us_Background.jpg';

export const AboutSection = () => (
  <section
    id='about'
    className='flex w-full flex-col items-center justify-center px-6 py-24 md:flex-row portrait:flex-col'
  >
    <motion.div className='flex-1 md:pr-4'>
      <h1 className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent md:text-2xl lg:text-4xl'>
        Тут має красуватись девіз або якийсь слоган
        {/* Savor Serenity:
        <br />
        Where{' '}
        <motion.span className='bg-gradient-to-r from-pink-700 to-pink-500 bg-clip-text text-transparent'>
          Art
        </motion.span>{' '}
        and{' '}
        <motion.span className='bg-gradient-to-r from-blue-500 to-blue-700  bg-clip-text text-transparent'>
          Comfort
        </motion.span>{' '}
        Converge */}
      </h1>
      <motion.p className='mt-8 md:pr-4'>
        <span className='bg-black text-white'>
          Тут має бути щось типу короткого гарного опису компанії, діяльності та
          виклику довіри.
        </span>
        <br />
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
      <motion.div className='relative mt-12 flex aspect-square w-full items-center justify-center rounded-3xl bg-gradient-to-b from-blue-300 to-pink-300 lg:mt-0 lg:h-4/5'>
        <h3 className='mx-4 bg-white px-4 text-xl text-black'>
          Тут має бути якесь гарне фото чи анімація роботи вентиляційної системи
        </h3>
        <Image
          src={bgPath}
          alt='alt'
          className='-z-1 absolute h-full w-full justify-center justify-self-center rounded-3xl object-cover opacity-40'
        />
      </motion.div>
    </motion.div>
  </section>
);
