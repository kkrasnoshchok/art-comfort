/* eslint-disable no-console */
import { Select } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { HeaderLink } from '@/components/buttons/HeaderLink';
import NextImage from '@/components/NextImage';

import logo from '@/assets/logo.png';
import { UsaIcon } from '@/assets/svgs/UsaIcon';
import { en, ua } from '@/locales';

const Hrefs = {
  about: '#about',
  services: '#services',
  projects: '#projects',
  team: '#team',
  jobs: '#jobs',
  cerfitications: '#certifications',
  contacts: '#contacts',
} as const;

export default function Header() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ua;

  const onLocaleChange = (locale: 'ua' | 'en') => {
    router.push(router.pathname, router.asPath, { locale });
  };

  const headerLinks = [
    { href: Hrefs.about, title: t.header.aboutLabel },
    { href: Hrefs.services, title: t.header.servicesLabel },
    { href: Hrefs.projects, title: t.header.projectsLabel },
    { href: Hrefs.team, title: t.header.teamLabel },
    { href: Hrefs.jobs, title: t.header.jobsLabel },
    { href: Hrefs.cerfitications, title: t.header.certificationsLabel },
    { href: Hrefs.contacts, title: t.header.contactsLabel },
  ];

  return (
    <AnimatePresence>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed top-0 flex h-24 w-full items-center justify-between bg-white bg-opacity-40 p-6 backdrop-blur-sm'
      >
        {/* Logo */}
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
        {/* Nav */}
        <nav className='flex items-center gap-8'>
          {headerLinks
            .filter((l) => l.title !== t.header.contactsLabel)
            .map((link) => (
              <HeaderLink
                key={link.href}
                onClick={() => console.log(`console logging`)}
                {...link}
              />
            ))}
          <motion.a
            className='ml-8 rounded-full border-2 border-white bg-black px-6 py-3 text-white transition-all hover:border-black hover:bg-white hover:text-black'
            href={headerLinks[headerLinks.length - 1].href}
          >
            {headerLinks[headerLinks.length - 1].title}
          </motion.a>
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
        </nav>
      </motion.header>
    </AnimatePresence>
  );
}
