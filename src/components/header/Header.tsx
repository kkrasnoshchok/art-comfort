import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import NextImage from '@/components/NextImage';

import { Button } from '@/ui/Button';
import { Menu, MenuItem } from '@/ui/NavbarMenu';
import { cn, useBreakpoint } from '@/utils';
import { menuLanguages, useLocale, useTranslations } from '@/utils/locales';

import logo from '../../assets/logo.png';

export const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const { locale, updateLocale } = useLocale();
  const { header } = useTranslations();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const { isLg: isBurgerHidden } = useBreakpoint('lg');
  const shouldDisplayBurger = !isBurgerHidden;
  const [isBurgerMenuOpened, setBurgerMenuOpened] = useState(false);
  return (
    <div className='fixed top-4 z-50 flex w-full items-center justify-center'>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.15,
          easings: ['easeIn', 'easeOut'],
          delay: 0.2,
        }}
        className={cn(
          'mx-4 w-full xl:max-w-7xl',
          shouldDisplayBurger && 'flex items-center'
        )}
      >
        <Menu
          setActive={setActive}
          className={cn(
            'flex w-full px-4',
            shouldDisplayBurger &&
              'items-center rounded-xl bg-opacity-60 backdrop-blur-md'
          )}
        >
          <div className='menu flex w-full flex-1 flex-col'>
            <div
              className={cn(
                'flex flex-row items-center gap-8',
                shouldDisplayBurger && 'flex-1 justify-between'
              )}
            >
              <Link href='/'>
                <div className='flex items-center'>
                  <NextImage src={logo} alt='logo' width={80} height={80} />
                </div>
              </Link>
              {shouldDisplayBurger && (
                <>
                  <Button
                    Icon={
                      <div className='border-primary-default flex h-8 w-8 flex-col items-center justify-center gap-[3px] rounded-full border-2 px-[6px]'>
                        {Array(3)
                          .fill(0)
                          .map((_, index) => (
                            <div
                              key={index}
                              className='line bg-primary-defaultStrong h-[1px] w-full'
                            />
                          ))}
                      </div>
                    }
                    onClick={() => {
                      setBurgerMenuOpened((prev) => !prev);
                    }}
                    theme='ghost'
                  />
                </>
              )}
            </div>
            <div
              className={cn(
                'my-2 flex w-full flex-col items-end gap-2',
                !isBurgerMenuOpened && 'pointer-events-none hidden opacity-0'
              )}
            >
              <MenuItem
                href='/about'
                setActive={setActive}
                active={active}
                item={header.about}
              />
              <MenuItem
                href='/services'
                setActive={setActive}
                active={active}
                item={header.services}
              />
              <MenuItem
                href='/projects'
                setActive={setActive}
                active={active}
                item={header.projects}
              />
              <MenuItem
                href='/'
                setActive={setActive}
                active={active}
                item={header.contacts}
              />
              <MenuItem
                href='/vacancies'
                setActive={setActive}
                active={active}
                item={header.careers}
              />
              <MenuItem
                href='/news'
                setActive={setActive}
                active={active}
                item={header.news}
              />
            </div>
          </div>

          {isBurgerHidden && (
            <div className='flex flex-row items-center gap-4'>
              <MenuItem
                href='/about'
                setActive={setActive}
                active={active}
                item={header.about}
              />
              <MenuItem
                href='/services'
                setActive={setActive}
                active={active}
                item={header.services}
              />
              <MenuItem
                href='/projects'
                setActive={setActive}
                active={active}
                item={header.projects}
              />
              <MenuItem
                href='/#contacts'
                setActive={setActive}
                active={active}
                item={header.contacts}
              />
              <MenuItem
                href='/vacancies'
                setActive={setActive}
                active={active}
                item={header.careers}
              />
              <MenuItem
                href='/news'
                setActive={setActive}
                active={active}
                item={header.news}
              />
              <div className='cursor-pointer'>
                <span
                  onClick={() => setDropdownOpened((prev) => !prev)}
                  className='relative rounded-md border px-2 py-1 text-2xl'
                >
                  {locale.emoji}
                </span>
                {dropdownOpened && (
                  <div className='absolute right-4 top-20 flex w-36 flex-col gap-[2px] rounded-lg bg-white text-sm'>
                    {menuLanguages.map((localeItem, index) => (
                      <motion.p
                        whileHover={{
                          borderColor: 'rgba(0,0,0,1)',
                        }}
                        onClick={() => {
                          updateLocale(localeItem);
                          setDropdownOpened(false);
                        }}
                        key={localeItem.value}
                        className={cn(
                          'px-4 py-2',
                          'border border-transparent',
                          locale.value === localeItem.value && 'border-black',
                          index === 0 && 'rounded-t-lg',
                          index === menuLanguages.length - 1 && 'rounded-b-lg'
                        )}
                      >
                        {localeItem.emoji} {localeItem.label}
                      </motion.p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </Menu>
      </motion.div>
    </div>
  );
};
