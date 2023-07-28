export const AboutSection = () => {
  return (
    <section
      id='about'
      className='flex h-screen w-screen items-center justify-center px-6 py-24'
    >
      <div className='flex-1'>
        <h1>
          Savor Serenity:
          <br />
          Where{' '}
          <span className='bg-gradient-to-r from-pink-700 to-pink-300 bg-clip-text text-transparent'>
            Art
          </span>{' '}
          and{' '}
          <span className='bg-gradient-to-r from-blue-300 to-blue-700  bg-clip-text text-transparent'>
            Comfort
          </span>{' '}
          Converge
        </h1>
        <p className='mt-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          magnam obcaecati fugiat, hic sapiente eos doloremque odio dicta nulla
          rerum vero inventore magni? Quo itaque suscipit ullam nam dolorem
          assumenda voluptatem quidem nostrum dicta omnis unde accusantium
          officia, voluptatum, quae dignissimos, consequatur labore quasi nemo
          reprehenderit facilis cupiditate aspernatur magnam maxime? Nostrum, ea
          fuga.
        </p>
      </div>
      <div className='flex h-full w-full flex-1 items-center justify-center'>
        <div className='h-3/5 w-3/5 rounded-3xl bg-blue-300 backdrop-blur-3xl'></div>
      </div>
    </section>
  );
};
