import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import NextImage from '@/components/NextImage';

import { Menu, MenuItem } from '@/ui/NavbarMenu';
import { useLocale } from '@/utils';
import { cn } from '@/utils/cn';
import { LocaleType, useTranslations } from '@/utils/useLocale';

import logo from '../../assets/logo.png';

/**
   * Structure:
   * - Call Button
   * - Burger Button for further menu
   * - Primary Links:
   *  - about: '/about',
      - services: '#services',
      - projects: '/projects',
      - contacts: '#contacts',
      - vacancies: '/vacancies',
      - news: '/news',
   * - Secondary Links:
   */

const locales: LocaleType[] = [
  {
    value: 'ua',
    label: 'Українська',
    emoji: '🇺🇦',
  },
  {
    value: 'en',
    label: 'English',
    emoji: '🇬🇧',
  },
  {
    value: 'de',
    label: 'Deutsch',
    emoji: '🇩🇪',
  },
  {
    value: 'pl',
    label: 'Polska',
    emoji: '🇵🇱',
  },
];

export const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const { locale, updateLocale } = useLocale();
  const { header } = useTranslations();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  return (
    <div className='fixed top-4 z-50 flex w-full items-center justify-center'>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        className='w-full max-w-7xl'
      >
        <Menu setActive={setActive} className={cn('flex items-center px-4')}>
          <Link className='flex-1 pr-24' href='/'>
            <div className='mb-3 flex items-center'>
              <NextImage src={logo} alt='logo' width={80} height={80} />
            </div>
          </Link>
          <MenuItem
            href='/about'
            setActive={setActive}
            active={active}
            item={header.about}
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>{header.aboutTooltip}</p>
            </div>
          </MenuItem>
          <MenuItem
            href='/services'
            setActive={setActive}
            active={active}
            item={header.services}
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>{header.servicesTooltip}</p>
            </div>
          </MenuItem>
          <MenuItem
            href='/projects'
            setActive={setActive}
            active={active}
            item={header.projects}
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>{header.projectsTooltip}</p>
            </div>
          </MenuItem>
          <MenuItem
            href='#contacts'
            setActive={setActive}
            active={active}
            item={header.contacts}
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>{header.contactsTooltip}</p>
            </div>
          </MenuItem>
          <MenuItem
            href='/vacancies'
            setActive={setActive}
            active={active}
            item={header.careers}
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>{header.carrersTooltip}</p>
            </div>
          </MenuItem>
          <MenuItem
            href='/news'
            setActive={setActive}
            active={active}
            item={header.news}
          >
            <div className='flex flex-col space-y-4 text-sm'>
              <p className='w-48'>{header.newsTooltip}</p>
            </div>
          </MenuItem>
          <div>
            <span
              onClick={() => setDropdownOpened((prev) => !prev)}
              className='relative rounded-md border px-2 py-1 text-2xl'
            >
              {locale.emoji}
            </span>
            {dropdownOpened && (
              <div className='absolute right-4 top-20 flex w-36 flex-col gap-[2px] rounded-lg bg-white text-sm'>
                {locales.map((localeItem, index) => (
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
                      index === locales.length - 1 && 'rounded-b-lg'
                    )}
                  >
                    {localeItem.emoji} {localeItem.label}
                  </motion.p>
                ))}
              </div>
            )}
          </div>
        </Menu>
      </motion.div>
    </div>
  );
};
