import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from 'antd';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';
import baseColors from 'tailwindcss/colors';
import { z } from 'zod';

import { Layout } from '@/components/layout';

import { clsxm, useI18n } from '@/utils';

type Vacancy = {
  id: string;
  jobTitle: string;
  location: string;
  shortDescription: string;
  longDescription: string;
};

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
  const [formSent, setFormSent] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | never[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
    }
  };
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
  const { locale } = useRouter();
  const { t } = useI18n();
  const getRequiredError = (field: string) => {
    if (locale === 'ua') {
      return t.contacts.inputError;
    }
    `${field}${t.contacts.inputError}`;
  };

  const ContactsForm = z
    .object({
      name: z.string().min(1, getRequiredError('Name')),
      email: z
        .string()
        .email(t.contacts.emailInputError)
        .min(1, getRequiredError('Email')),
      phone: z.string().min(1, getRequiredError('Phone')),
      message: z.string(),
    })
    .required();

  type ContactsFormType = z.infer<typeof ContactsForm>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactsFormType>({
    resolver: zodResolver(ContactsForm),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  });

  const onSubmit: SubmitHandler<ContactsFormType> = async (values) => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }
    for (const valueKey in values) {
      formData.append(valueKey, values[valueKey as keyof ContactsFormType]);
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Files uploaded successfully');
        setFormSent(true);
        setValue('name', '');
        setValue('email', '');
        setValue('phone', '');
        setValue('message', '');
        if (fileRef.current?.value) {
          fileRef.current.value = '';
        }
      } else {
        toast.error('Error uploading files');
      }
    } catch (error) {
      const tError = error as Error;
      throw new Error(tError.message, { cause: tError.cause });
    }
  };
  return (
    <>
      {selectedVacancy && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.3 }}
          className='absolute z-[100] flex w-screen items-center justify-center'
        >
          <motion.div className='relative my-12 flex w-4/6 flex-col items-center justify-center rounded-lg bg-white p-2 shadow-xl'>
            <motion.div className='flex w-full flex-row items-center'>
              <motion.div>
                <motion.h2 className='text-2xl font-semibold'>
                  {selectedVacancy.jobTitle}
                </motion.h2>
                <motion.p className='text-gray-500'>
                  {selectedVacancy.location}
                </motion.p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className='ml-auto cursor-pointer rounded-full border border-red-500 p-2'
                onClick={() => setSelectedVacancy(null)}
              >
                <RxCross2 size={32} color={baseColors.red[500]} />
              </motion.div>
            </motion.div>
            <motion.div className='px-12 pb-4'>
              <motion.div className='my-4 h-36 w-full rounded-lg bg-gray-400' />
              <motion.p className='mt-2 text-gray-800'>
                {selectedVacancy.longDescription}
              </motion.p>
              <motion.div>
                <motion.h3 className='mt-8 text-xl font-semibold'>
                  Apply for a job
                </motion.h3>
                <div className='mt-6 flex w-full flex-col items-center gap-2 lg:items-start'>
                  {formSent && (
                    <Alert
                      className='mb-2 mr-6'
                      message='Ваш лист успішно надіслано!'
                      type='success'
                      closable
                      onClose={() => setFormSent(false)}
                      showIcon
                    />
                  )}
                  <input
                    className={clsxm([
                      'w-full border border-slate-300 lg:w-10/12',
                      errors.name?.message && 'border-red-500 text-red-500',
                    ])}
                    type='text'
                    id='name'
                    placeholder={t.contacts.nameInputPlaceholder}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className='my-0 py-0 text-sm text-red-500'>
                      {errors.name.message}
                    </p>
                  )}
                  <input
                    className={clsxm([
                      'w-full border border-slate-300 lg:w-10/12',
                      errors.email?.message && 'border-red-500 text-red-500',
                    ])}
                    type='email'
                    id='email'
                    placeholder={t.contacts.emailInputPlaceholder}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className='my-0 py-0 text-sm text-red-500'>
                      {errors.email.message}
                    </p>
                  )}
                  <input
                    className={clsxm([
                      'w-full border border-slate-300 lg:w-10/12',
                      errors.phone?.message && 'border-red-500 text-red-500',
                    ])}
                    type='tel'
                    id='phone'
                    placeholder={t.contacts.phoneInputPlaceholder}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className='my-0 py-0 text-sm text-red-500'>
                      {errors.phone.message}
                    </p>
                  )}
                  <textarea
                    placeholder={t.contacts.coverLetterInputPlaceholder}
                    className='rows w-full resize-none border border-slate-300 lg:w-10/12'
                    rows={6}
                    {...register('message')}
                  />
                  <div className='mt-2 flex flex-col items-start justify-center lg:mt-6'>
                    <input
                      ref={fileRef}
                      type='file'
                      multiple
                      onChange={(e) => handleFileChange(e)}
                    />
                  </div>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    className='mt-4 border border-slate-200 px-12 py-2 lg:mt-6'
                  >
                    {t.contacts.sendEmailButtonLabel}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <motion.div
        className={`h-screen w-screen ${
          selectedVacancy?.id ? 'bg-blue-100 opacity-10' : 'bg-white'
        }`}
      >
        <Layout>
          <motion.section className='w-screen px-6 py-24'>
            <h1 className='mt-12'>Вакансії</h1>
            <motion.div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {vacancies.map((vacancy) => (
                <motion.div
                  key={vacancy.id}
                  className='mt-8 cursor-pointer rounded-lg bg-white p-4 shadow-lg'
                  whileHover={{ scale: 1.02 }}
                  transition={{ ease: 'easeInOut', duration: 1 }}
                  onClick={() => setSelectedVacancy(vacancy)}
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
            </motion.div>
          </motion.section>
        </Layout>
      </motion.div>
    </>
  );
};

export default VacanciesPage;
