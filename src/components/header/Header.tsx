import Link from 'next/link';
import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

import NextImage from '@/components/NextImage';

import { Button } from '@/ui/Button';
import { Menu, MenuItem } from '@/ui/NavbarMenu';
import { cn, useBreakpoint } from '@/utils';
import { useTranslations } from '@/utils/locales';

import logo from '../../assets/logo.png';

export const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const { header } = useTranslations();
  const { isLg: isBurgerHidden } = useBreakpoint('lg');
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
              href='/#contacts'
              setActive={setActive}
              active={active}
              item={header.contacts}
            >
              <div className='flex flex-col space-y-4 text-sm'>
                <p className='w-48'>{header.contactsTooltip}</p>
              </div>
            </MenuItem>
            {/* <MenuItem
                href='/vacancies'
                setActive={setActive}
                active={active}
                item={header.careers}
              >
                <div className='flex flex-col space-y-4 text-sm'>
                  <p className='w-48'>{header.carrersTooltip}</p>
                </div>
              </MenuItem> */}
            {/* <MenuItem
                href='/news'
                setActive={setActive}
                active={active}
                item={header.news}
              >
                <div className='flex flex-col space-y-4 text-sm'>
                  <p className='w-48'>{header.newsTooltip}</p>
                </div>
              </MenuItem> */}
            {/* <div className='cursor-pointer'>
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
              </div> */}
          </>
        )}
      </Menu>
    </div>
  );
};
