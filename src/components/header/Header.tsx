import Link from 'next/link';
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

import NextImage from '@/components/NextImage';
import { Quiz } from '@/components/quiz/Quiz';

import { Button } from '@/ui/Button';
import { Menu, MenuItem } from '@/ui/NavbarMenu';
import { cn, useBreakpoint } from '@/utils';

import logo from '../../assets/logo.png';

export const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const { isLg: isBurgerHidden } = useBreakpoint('lg');
  const [isQuizOpened, setQuizOpened] = useState(false);
  return (
    <div className='fixed z-50 flex w-full flex-col items-center justify-center bg-white'>
      {/* Logo & Quote */}
      <div className='flex w-full flex-row items-center justify-center gap-64'>
        <Link href='/'>
          <div className='mb-3 flex items-center'>
            <NextImage src={logo} alt='logo' width={140} height={140} />
          </div>
        </Link>
        <div className='flex flex-col items-end'>
          <Button
            Icon={<FaPhone size={16} />}
            label='+380931323212'
            href='tel:+380931323212'
            theme='ghost'
            className='flex flex-row items-center'
            labelClassName='ml-2'
          />
          <p className='mt-2 text-base  italic'>
            Poznaj prawdziwą sztukę doskonałego klimatu z Art-Comfort
          </p>
        </div>
      </div>
      {/* Menu */}
      <Menu
        setActive={setActive}
        className={cn(
          'mt-4 flex w-full flex-row items-center justify-center px-4'
        )}
      >
        {isBurgerHidden && (
          <>
            <div className=''>
              <Button label='open quiz' onClick={() => setQuizOpened(true)} />
            </div>
            <MenuItem
              href='/about'
              setActive={setActive}
              active={active}
              item='O nas'
            />
            <MenuItem
              href='/services'
              setActive={setActive}
              active={active}
              item='Usługi'
            />
            <MenuItem
              href='/projects'
              setActive={setActive}
              active={active}
              item='Projekty'
            />
            <MenuItem
              href='/#contacts'
              setActive={setActive}
              active={active}
              item='Kontakty'
            />
          </>
        )}
      </Menu>
      <Quiz
        isOpen={isQuizOpened}
        onClose={() => {
          setQuizOpened(false);
        }}
      />
    </div>
  );
};
