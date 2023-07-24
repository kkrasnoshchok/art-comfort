/* eslint-disable no-console */
import { Select } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import { NavigationList } from '@/components/header/components/NavigationList/NavigationList';
import { Href, Hrefs } from '@/components/header/types';
import NextImage from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { UsaIcon } from '@/assets/svgs/UsaIcon';
import { clsxm, useI18n } from '@/utils';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<Href>('#about');
  const router = useRouter();
  const [menuOpened, setMenuOpened] = useState(false);

  const onLocaleChange = (locale: 'ua' | 'en') => {
    router.push(router.pathname, router.asPath, { locale });
  };
  const { t } = useI18n();

  const links = useMemo(
    () => [
      { href: Hrefs.about, title: t.header.aboutLabel },
      { href: Hrefs.services, title: t.header.servicesLabel },
      { href: Hrefs.projects, title: t.header.projectsLabel },
      { href: Hrefs.team, title: t.header.teamLabel },
      { href: Hrefs.jobs, title: t.header.jobsLabel },
      { href: Hrefs.cerfitications, title: t.header.certificationsLabel },
    ],
    [t]
  );
  const contacts = { href: Hrefs.contacts, title: t.header.contactsLabel };

  useEffect(() => {
    // Intersection Observer configuration
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% of the section needs to be visible
    };

    // Callback function when the section is intersecting
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe each section
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ translateY: -20 }}
        animate={{ translateY: 0 }}
        exit={{ opacity: 0 }}
        className={clsxm([
          'fixed top-0 z-50 flex h-24 w-full items-center justify-between bg-white bg-opacity-40 p-6 backdrop-blur-sm',
        ])}
      >
        {/* Logo */}
        <div className={clsxm(['flex', menuOpened && ''])}>
          <a href='#'>
            <div className='mb-3 flex items-center'>
              <NextImage
                src={logo}
                alt='logo'
                width={120}
                height={120}
                className='absolute '
              />
            </div>
          </a>
        </div>
        <div className={clsxm(['flex items-center gap-4'])}>
          {/* Nav */}
          <nav className='hidden items-center gap-8 xl:flex'>
            <NavigationList
              nav={{
                links,
                contacts,
              }}
              activeLink={activeLink}
            />
          </nav>
          {/* Language Select */}
          <Select
            size='large'
            className='w-16'
            defaultValue={router.locale}
            showArrow={false}
            listItemHeight={28}
            bordered
            options={[
              {
                label: (
                  <div className='flex h-full w-full flex-col items-center justify-center'>
                    <div className='h-3 w-8 bg-blue-600' />
                    <div className='h-3 w-8 bg-yellow-300' />
                  </div>
                ),
                value: 'ua',
              },
              {
                label: (
                  <div className='flex h-full w-full flex-col items-center justify-center'>
                    <UsaIcon size={32} />
                  </div>
                ),

                value: 'en',
              },
            ]}
            onChange={(value) => onLocaleChange(value as 'ua' | 'en')}
          />
          {/* Burger Button */}
          <motion.a
            onClick={() => setMenuOpened((p) => !p)}
            className='flex h-10 w-10 flex-col items-center justify-center gap-1  rounded-full border border-gray-300 bg-white xl:hidden'
          >
            <div
              className={clsxm([
                'h-0.5 w-6 bg-gray-300 transition-all',
                menuOpened && 't-2/4 l-2/4 absolute rotate-45',
              ])}
            ></div>
            <div
              className={clsxm([
                'h-0.5 w-6 bg-gray-300 transition-all',
                menuOpened && 'hidden',
              ])}
            ></div>
            <div
              className={clsxm([
                'h-0.5 w-6 bg-gray-300 transition-all',
                menuOpened && 't-2/4 l-2/4 absolute -rotate-45',
              ])}
            ></div>
          </motion.a>
        </div>
      </motion.header>
      {menuOpened && (
        <AnimatePresence>
          <motion.nav
            initial={{ translateX: 60 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 60 }}
            className='fixed right-0 top-24 z-50 flex h-screen w-full flex-col items-center justify-start gap-8 bg-white  bg-opacity-40 p-2 pt-6 backdrop-blur-3xl sm:w-72 sm:items-end sm:backdrop-blur-sm'
          >
            <NavigationList
              nav={{ links, contacts }}
              contactsClassName='mt-auto mb-36 w-2/3 ml-0 sm:w-full justify-center items-center text-center'
              headerLinkClassName='text-2xl'
              onLinkClick={() => setMenuOpened(false)}
              activeLink={activeLink}
            />
          </motion.nav>
        </AnimatePresence>
      )}
    </AnimatePresence>
  );
};
