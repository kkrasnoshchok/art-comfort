import { motion } from 'framer-motion';
import { useState } from 'react';
import { RxArrowUp } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

import { Layout } from '@/components/layout';

import { Input } from '@/ui/Input';
import { clsxm } from '@/utils';

type Vacancy = {
  id: string;
  jobTitle: string;
  location: string;
  shortDescription: string;
  longDescription: string;
};

const columns = [
  { key: 'jobTitle', header: 'Назва Вакансії' },
  { key: 'location', header: 'Локація' },
  { key: 'shortDescription', header: 'Короткий опис' },
];

const vacancies: Vacancy[] = [
  {
    id: '1a2b3c4d5e',
    jobTitle: 'Software Developer',
    location: 'New York, NY',
    shortDescription: 'Develop and maintain software applications.',
    longDescription:
      'We are seeking a skilled Software Developer to join our team in New York, NY. In this role, you will be responsible for designing, coding, testing, and debugging software applications. You will collaborate with cross-functional teams to deliver high-quality software solutions.',
  },
  {
    id: '2b3c4d5e6f',
    jobTitle: 'Data Scientist',
    location: 'San Francisco, CA',
    shortDescription: 'Analyze and interpret data to drive business insights.',
    longDescription:
      'Data Analytics Corp. is looking for a talented Data Scientist in San Francisco, CA. As a Data Scientist, you will work on a variety of data analysis projects, leveraging machine learning and statistical techniques to extract valuable insights from large datasets. Join our dynamic team and contribute to data-driven decision-making.',
  },
  {
    id: '3c4d5e6f7g',
    jobTitle: 'UX Designer',
    location: 'Los Angeles, CA',
    shortDescription:
      'Create intuitive and visually appealing user interfaces.',
    longDescription:
      'Design Innovations Ltd. is hiring a UX Designer in Los Angeles, CA. As a UX Designer, you will be responsible for crafting user-friendly and visually engaging interfaces. Your work will involve user research, wireframing, prototyping, and collaborating with development teams to bring your designs to life.',
  },
  {
    id: '1',
    jobTitle: 'Frontend Developer',
    location: 'San Francisco, CA',
    shortDescription: 'Create beautiful and interactive user interfaces.',
    longDescription:
      'We are looking for a talented Frontend Developer to join our team in San Francisco. You will be responsible for building responsive and visually appealing web applications using modern frontend technologies.',
  },
  {
    id: '2',
    jobTitle: 'Backend Developer',
    location: 'New York, NY',
    shortDescription: 'Develop server-side logic for applications.',
    longDescription:
      'Join our team in New York and work on building scalable and efficient backend solutions for our applications. We are seeking an experienced Backend Developer to help us achieve our goals.',
  },
  {
    id: '3',
    jobTitle: 'Data Analyst',
    location: 'Chicago, IL',
    shortDescription: 'Analyze data and generate insights.',
    longDescription:
      'Are you passionate about data analysis? Join us in Chicago as a Data Analyst, where you will work with large datasets to uncover valuable insights that drive business decisions.',
  },
  {
    id: '4',
    jobTitle: 'UI/UX Designer',
    location: 'Los Angeles, CA',
    shortDescription: 'Design intuitive and user-friendly interfaces.',
    longDescription:
      'We are looking for a creative UI/UX Designer to join our design team in Los Angeles. You will play a key role in designing beautiful and intuitive user interfaces for our digital products.',
  },
  {
    id: '5',
    jobTitle: 'Product Manager',
    location: 'Seattle, WA',
    shortDescription: 'Lead product development and strategy.',
    longDescription:
      'As a Product Manager in Seattle, you will be responsible for driving product development and strategy. Join our dynamic team and help shape the future of our products.',
  },
  {
    id: '6',
    jobTitle: 'Marketing Specialist',
    location: 'Miami, FL',
    shortDescription: 'Create and implement marketing campaigns.',
    longDescription:
      'Join our marketing team in Miami as a Marketing Specialist. You will have the opportunity to create and implement marketing campaigns that promote our products and brand.',
  },
  {
    id: '7',
    jobTitle: 'DevOps Engineer',
    location: 'Austin, TX',
    shortDescription: 'Manage and automate infrastructure.',
    longDescription:
      'Are you passionate about DevOps and automation? Join our team in Austin as a DevOps Engineer, where you will manage and automate our infrastructure to ensure high availability and scalability.',
  },
  {
    id: '8',
    jobTitle: 'Software Tester',
    location: 'Denver, CO',
    shortDescription: 'Ensure the quality of software products.',
    longDescription:
      'We are seeking a Software Tester in Denver to ensure the quality of our software products. Join our QA team and work on testing and identifying issues to deliver reliable software.',
  },
  {
    id: '9',
    jobTitle: 'Graphic Designer',
    location: 'Portland, OR',
    shortDescription: 'Create visually appealing graphics and visuals.',
    longDescription:
      'Join our design team in Portland as a Graphic Designer. You will be responsible for creating visually appealing graphics and visuals that enhance our brand and products.',
  },
  {
    id: '10',
    jobTitle: 'Content Writer',
    location: 'Boston, MA',
    shortDescription: 'Create engaging and informative content.',
    longDescription:
      'Do you have a passion for writing? Join us in Boston as a Content Writer, where you will create engaging and informative content that resonates with our audience and customers.',
  },
];

const VacanciesPage = () => {
  const [sortedVacancies, setSortedVacancies] = useState<Vacancy[]>(vacancies);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSort = (field: string) => {
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
            {columns.map((column) => (
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
            <motion.div
              key={vacancy.id}
              layoutId={vacancy.id}
              className='vacancy-list-card pt-4'
            >
              <motion.div
                className='border-primary-bgStrong group flex rounded-xl border-2 py-2 transition-all hover:scale-[1.005]'
                // whileHover={{
                //   scale: 1.02,
                // }}
              >
                {columns.map((column) => (
                  <motion.div
                    key={column.key}
                    className='flex-1 p-2 transition-all group-hover:font-semibold'
                  >
                    {vacancy[column.key]}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Layout>
  );
};

export default VacanciesPage;
