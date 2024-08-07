import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { RxArrowUp } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Input } from '@/ui/Input';
import { cn } from '@/utils';
import {
  vacancies,
  vacanciesColumns,
  Vacancy,
} from '@/utils/dataset/vacancies.dataset';
import { useTranslations } from '@/utils/locales';

const MotionLink = motion(Link);

const VacanciesPage = () => {
  const { vacancies: vacanciesTranslations } = useTranslations();
  const memoizedVacancies = useMemo(
    () => vacancies(vacanciesTranslations),
    [vacanciesTranslations]
  );
  useEffect(() => {
    if (memoizedVacancies) {
      setSortedVacancies(memoizedVacancies);
    }
  }, [memoizedVacancies]);
  const [sortedVacancies, setSortedVacancies] =
    useState<Vacancy[]>(memoizedVacancies);
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
      ? memoizedVacancies.filter((vacancy) =>
          Object.values(vacancy).some((value) =>
            value.toString().toLowerCase().includes(query.toLowerCase())
          )
        )
      : memoizedVacancies;

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
          className={cn(
            'mx-4 flex min-h-screen w-full max-w-7xl flex-col bg-gradient-to-b pt-16'
          )}
        >
          <div className='flex flex-col items-center gap-2 md:flex-row'>
            <h2 className='text-grayscale-header w-full text-left'>
              {vacanciesTranslations.openPositions}
            </h2>
            <div className='w-full'>
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

          <div className='border-grayscale-headerWeak mt-6 rounded-md border border-b-0'>
            <div className='border-grayscale-body flex border-b-2'>
              {vacanciesColumns(vacanciesTranslations).map((column, index) => (
                <motion.div
                  key={column.key}
                  layoutId={column.key}
                  onClick={() => handleSort(column.key)}
                  className={cn(
                    'vacancy-list-column flex cursor-pointer flex-row items-center p-2',
                    'text-grayscale-header hover:text-grayscale-body font-semibold',
                    sortField === column.key &&
                      'bg-grayscale-bgWeak rounded-t-lg transition-all',
                    index === 0 && 'flex-1'
                  )}
                >
                  {column.header}{' '}
                  {sortField === column.key && (
                    <motion.div>
                      <RxArrowUp
                        size={16}
                        className={cn(
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
                href={`/vacancies/${vacancy.id}`}
                key={vacancy.id}
                layoutId={vacancy.id}
                className='vacancy-list-card block'
              >
                <motion.div className='border-grayscale-body hover:bg-grayscale-bgWeak group flex rounded-md border-b transition-all'>
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
