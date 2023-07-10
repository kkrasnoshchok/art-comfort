/* eslint-disable no-console */
import { AnimatePresence, motion } from 'framer-motion';

import { HeaderLink } from '@/components/buttons/HeaderLink';
import NextImage from '@/components/NextImage';

import logo from '@/assets/logo.png';

const Hrefs = {
  about: '#about',
  services: '#services',
  projects: '#projects',
  team: '#team',
  jobs: '#jobs',
  cerfitications: '#certifications',
  contacts: '#contacts',
} as const;

// type Href = (typeof Hrefs)[keyof typeof Hrefs];

const headerLinks = [
  { href: Hrefs.about, title: 'About' },
  { href: Hrefs.services, title: 'Services' },
  { href: Hrefs.projects, title: 'Projects' },
  { href: Hrefs.team, title: 'Team' },
  { href: Hrefs.jobs, title: 'Job offers' },
  { href: Hrefs.cerfitications, title: 'Certifications' },
  { href: Hrefs.contacts, title: 'Contacts' },
];

export default function Header() {
  // const [activeLink, setActiveLink] = useState<Href>('#about');
  return (
    <AnimatePresence>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed top-0 flex h-24 w-full items-center justify-between bg-white bg-opacity-25 p-6 backdrop-blur-sm'
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
            .filter((l) => l.title !== 'Contacts')
            .map((link) => (
              <HeaderLink
                key={link.href}
                onClick={() => {
                  console.log(`console logging`);
                }}
                // onClick={() => setActiveLink(link.href)}

                // active={activeLink === link.href}
                {...link}
              />
            ))}
          <motion.a
            className='ml-8 rounded-full border-2 border-white bg-black px-6 py-3 text-white'
            href={headerLinks[headerLinks.length - 1].href}
          >
            {headerLinks[headerLinks.length - 1].title}
          </motion.a>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
}
