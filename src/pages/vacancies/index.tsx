import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { RxArrowUp } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Input } from '@/ui/Input';
import { clsxm, useTranslations } from '@/utils';
import { cn } from '@/utils/cn';
import {
  vacancies,
  vacanciesColumns,
  Vacancy,
} from '@/utils/dataset/vacancies.dataset';
import { slugify } from '@/utils/slugify';

const MotionLink = motion(Link);

const VacanciesPage = () => {
  const [sortedVacancies, setSortedVacancies] =
    useState<Omit<Vacancy, 'longDescription'>[]>(vacancies);
  const [sortField, setSortField] = useState<
    keyof Omit<Vacancy, 'longDescription'> | null
  >(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { vacancies: vacanciesTranslations } = useTranslations();

  const handleSort = (field: keyof Omit<Vacancy, 'longDescription'>) => {
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
      <SectionWrapper>
        <section
          className={clsxm(
            'flex min-h-screen w-full max-w-7xl flex-col bg-gradient-to-b pt-16'
          )}
        >
          <div className='flex flex-row items-center'>
            <h2 className='text-grayscale-header flex-1'>
              {vacanciesTranslations.openPositions}
            </h2>
            <div className='flex'>
              <Input
                label={vacanciesTranslations.searchVacanciesPlaceholder}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                withClear
                onClear={() => handleSearch('')}
                className='border-grayscale-headerWeak border bg-transparent'
              />
            </div>
          </div>

          <div className='border-grayscale-headerWeak mt-6 border border-b-0'>
            <div className='border-grayscale-headerWeak flex border-b-2'>
              {vacanciesColumns(vacanciesTranslations).map((column, index) => (
                <motion.div
                  key={column.key}
                  layoutId={column.key}
                  onClick={() => handleSort(column.key)}
                  className={clsxm(
                    'vacancy-list-column flex min-w-[30%] cursor-pointer flex-row items-center p-2',
                    'text-grayscale-header hover:text-grayscale-body font-semibold',
                    sortField === column.key &&
                      'bg-grayscale-bgWeak transition-all',
                    index === 0 && 'flex-1'
                  )}
                >
                  {column.header}{' '}
                  {sortField === column.key && (
                    <motion.div>
                      <RxArrowUp
                        size={16}
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
                        size={16}
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
                className='vacancy-list-card block'
              >
                <motion.div className='border-grayscale-body hover:bg-grayscale-bgWeak group flex border-b transition-all'>
                  {vacanciesColumns(vacanciesTranslations).map(
                    (column, index) => (
                      <motion.div
                        key={column.key}
                        className={cn(
                          'min-w-[30%] p-2 transition-all',
                          index === 0 && 'flex-1'
                        )}
                      >
                        {vacancy[column.key]}
                      </motion.div>
                    )
                  )}
                </motion.div>
              </MotionLink>
            ))}
          </div>
        </section>
      </SectionWrapper>
    </Layout>
  );
};

export default VacanciesPage;
