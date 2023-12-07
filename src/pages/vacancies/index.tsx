import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { RxArrowUp } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

import { Layout } from '@/components/layout';

import { Input } from '@/ui/Input';
import { clsxm } from '@/utils';
import {
  vacancies,
  vacanciesColumns,
  Vacancy,
} from '@/utils/dataset/vacancies.dataset';
import { slugify } from '@/utils/slugify';

const MotionLink = motion(Link);

const VacanciesPage = () => {
  const [sortedVacancies, setSortedVacancies] = useState<Vacancy[]>(vacancies);
  const [sortField, setSortField] = useState<keyof Vacancy | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSort = (field: keyof Vacancy) => {
    if (field === sortField) {
      // Toggle sorting direction if sorting the same field
      const direction = sortDirection === 'asc' ? 'desc' : 'asc';
      setSortDirection(direction);

      const sorted = [...sortedVacancies].reverse();
      setSortedVacancies(sorted);
    } else {
      // Sort a new field in ascending order
      setSortField(field);
      setSortDirection('asc');

      const sorted = [...sortedVacancies].sort((a, b) => {
        return a[field].localeCompare(b[field]);
      });
      setSortedVacancies(sorted);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filteredVacancies = query
      ? vacancies.filter((vacancy) =>
          Object.values(vacancy).some((value) =>
            value.toString().toLowerCase().includes(query.toLowerCase())
          )
        )
      : vacancies;

    const sorted = [...filteredVacancies].sort((a, b) => {
      if (sortField) {
        const comparison = a[sortField].localeCompare(b[sortField]);
        return sortDirection === 'asc' ? comparison : -comparison;
      }
      return 0;
    });

    setSortedVacancies(sorted);
  };

  const handleRemoveSort = () => {
    // Remove sorting field and direction
    setSortField(null);
    setSortDirection('asc');

    const sorted = [...sortedVacancies].sort((a, b) => {
      return a.id.localeCompare(b.id);
    });

    setSortedVacancies(sorted);
  };

  return (
    <Layout>
      <motion.section
        className={clsxm(
          'from-primary-bg to-secondary-bg flex min-h-screen flex-col bg-gradient-to-b px-16 py-12'
        )}
      >
        <h1 className='h1 text-primary-defaultStrong'>Вакансії</h1>
        <p className='p text-primary-defaultWeak mt-2 italic'>
          Щоб відправити заявку, натисніть на обрану вакансію
        </p>
        {/* <motion.div className='mt-4 flex flex-col'>
              {vacancies.map((vacancy) => (
                <motion.div
                  key={vacancy.id}
                  className='cursor-pointer rounded-lg'
                  whileHover={{ scale: 1.02 }}
                  transition={{ ease: 'easeInOut', duration: 1 }}
                >
                  <motion.h2 className='text-xl font-semibold'>
                    {vacancy.jobTitle}
                  </motion.h2>
                  <motion.p className='text-gray-500'>
                    {vacancy.location}
                  </motion.p>
                  <motion.p className='mt-2 text-gray-800'>
                    {vacancy.shortDescription}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div> */}
        <div className='mt-6 pb-64'>
          <div className='flex flex-1 justify-end p-2'>
            <Input
              label='Пошук вакансії'
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              withClear
              onClear={() => handleSearch('')}
              className='border-primary-defaultWeak border-2 bg-transparent'
            />
          </div>
          <div className='border-primary-defaultStrong flex rounded-3xl border-2 p-2 shadow-lg'>
            {vacanciesColumns.map((column) => (
              <motion.div
                key={column.key}
                layoutId={column.key}
                onClick={() => handleSort(column.key)}
                className={clsxm(
                  'vacancy-list-column flex flex-1 cursor-pointer flex-row items-center border-2 border-transparent p-2',
                  'text-primary-defaultStrong hover:text-primary-defaultWeak',
                  sortField === column.key &&
                    'border-primary-defaultWeak bg-primary-bg rounded-2xl transition-all'
                )}
              >
                {column.header}{' '}
                {sortField === column.key && (
                  <motion.div>
                    <RxArrowUp
                      size={24}
                      className={clsxm(
                        'ml-4',
                        sortDirection === 'asc' && 'rotate-180'
                      )}
                    />
                  </motion.div>
                )}
                {sortField === column.key && (
                  <motion.div
                    key='remove-sort'
                    layoutId='remove-sort'
                    className='mr-2 flex flex-1 justify-end'
                  >
                    <RxCross2
                      size={24}
                      onClick={handleRemoveSort}
                      className='cursor-pointe'
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          {sortedVacancies.map((vacancy) => (
            <MotionLink
              href={`/vacancies/${slugify(
                `${vacancy.id} ${vacancy.jobTitle} ${vacancy.location}`
              )}`}
              key={vacancy.id}
              layoutId={vacancy.id}
              className='vacancy-list-card block pt-4'
            >
              <motion.div
                className='border-primary-bgStrong group flex rounded-xl border-2 py-2 transition-all hover:scale-[1.005]'
                // whileHover={{
                //   scale: 1.02,
                // }}
              >
                {vacanciesColumns.map((column) => (
                  <motion.div
                    key={column.key}
                    className='flex-1 p-2 transition-all group-hover:font-semibold'
                  >
                    {vacancy[column.key]}
                  </motion.div>
                ))}
              </motion.div>
            </MotionLink>
          ))}
        </div>
      </motion.section>
    </Layout>
  );
};

export default VacanciesPage;
