import { Button as AntDesignButton, Upload, UploadFile } from 'antd';
import { Formik, FormikHelpers } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  ClassAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
  useMemo,
  useState,
} from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { FaUpload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Markdown, { ExtraProps } from 'react-markdown';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { useBreakpoint } from '@/utils';
import { vacancies } from '@/utils/dataset/vacancies.dataset';
import { useTranslations } from '@/utils/locales';

const VacancyPage = () => {
  const router = useRouter();
  const { isLg } = useBreakpoint('lg');
  const {
    form,
    general,
    contacts,
    vacancies: vacanciesTranslations,
  } = useTranslations();

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const memoizedVacancies = useMemo(
    () => vacancies(vacanciesTranslations),
    [vacanciesTranslations]
  );

  const baseMarkdownProps = useMemo(
    () => ({
      components: {
        ul: (
          props: ClassAttributes<HTMLUListElement> &
            HTMLAttributes<HTMLUListElement> &
            ExtraProps
        ) => <ul {...props} style={{ listStyleType: 'circle' }} />,
        li: (
          props: ClassAttributes<HTMLLIElement> &
            LiHTMLAttributes<HTMLLIElement> &
            ExtraProps
        ) => <li {...props} style={{ marginLeft: '1.5rem' }} />,
      },
    }),
    []
  );

  const vacancy = useMemo(
    () => memoizedVacancies.find((vacancy) => vacancy.id === router.query.slug),
    [memoizedVacancies, router.query.slug]
  );

  const MemoizedVacancyDetails = useMemo(() => {
    if (!vacancy) {
      return null;
    }
    return (
      <div className='pr-4'>
        <h2 className='text-grayscale-header mt-8'>{vacancy.name}</h2>
        {/* Long Details */}
        <motion.p className='text-grayscale-body mt-2'>
          {vacanciesTranslations.baseIntroduction}
        </motion.p>
        <p className='text-grayscale-body mt-2'>{vacancy.introduction}</p>
        <h4 className='mt-4'>{vacanciesTranslations.importantForUsLabel}</h4>
        <p className='text-grayscale-body mt-2'>
          <Markdown {...baseMarkdownProps}>{vacancy.importantForUs}</Markdown>
        </p>
        <h4 className='mt-4'>{vacanciesTranslations.requirementsLabel}</h4>
        <p className='text-grayscale-body mt-2'>
          <Markdown {...baseMarkdownProps}>{vacancy.requirements}</Markdown>
        </p>
        <h4 className='mt-4'>{vacanciesTranslations.weOfferLabel}</h4>
        <p className='text-grayscale-body mt-2'>
          <Markdown {...baseMarkdownProps}>{vacancy.weOffer}</Markdown>
        </p>
        {vacancy.jobBoardsLinks && (
          <>
            <h4 className='mt-4'>{vacanciesTranslations.jobBoardsLabel}</h4>
            <p className='text-grayscale-body mt-2'>
              <Markdown {...baseMarkdownProps}>
                {vacancy.jobBoardsLinks}
              </Markdown>
            </p>
          </>
        )}
      </div>
    );
  }, [vacancy, vacanciesTranslations, baseMarkdownProps]);

  if (!router.query.slug) {
    return null;
  }

  if (!vacancy) {
    return null;
  }

  const ContactsForm = z.object({
    name: z.string({ required_error: form.name.error }).min(1),
    email: z
      .string({ required_error: form.email.error })
      .email(form.email.invalidError)
      .min(1),
    phone: z.string({ required_error: form.phone.error }).min(1),
    message: z.string({ required_error: form.motivationMessage.error }).min(1),
    files: z.array(z.object({})).optional(),
  });

  type ContactsFormType = z.infer<typeof ContactsForm>;

  const onFormSubmit = async (
    values: ContactsFormType,
    helpers: FormikHelpers<ContactsFormType>
  ) => {
    const formData = new FormData();
    for (const valueKey in values) {
      if (valueKey !== 'files') {
        formData.append(
          valueKey,
          values[valueKey as keyof typeof values] as string
        );
      }
    }
    for (let i = 0; i < (values.files?.length ?? 0); i++) {
      formData.append('files', values.files?.[i] as string);
    }

    formData.append('to', 'krasnoshchok4work@gmail.com');

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('success');
        helpers.resetForm();
      } else {
        toast.error('Error uploading files');
      }
    } catch (error) {
      const tError = error as Error;
      throw new Error(tError.message, { cause: tError.cause });
    }
  };

  return (
    <Layout>
      <SectionWrapper>
        <section className='mx-4 w-full max-w-7xl pt-16'>
          <motion.div>
            <Button
              label={general.backToList}
              size='small'
              onClick={router.back}
            />
          </motion.div>
          <div className='flex flex-col lg:flex-row'>
            {MemoizedVacancyDetails}
            <div className='min-w-[35%] lg:sticky lg:right-0 lg:top-24 lg:h-fit'>
              <p className='text-grayscale-headerWeak text-lg font-semibold'>
                {contacts.contactUsDirectly}
              </p>
              <div className='bg-grayscale-bg mt-2 flex w-full flex-col gap-2 rounded-lg p-2'>
                <p className='text-sm'>{vacanciesTranslations.hrData}</p>
                <div className='flex flex-row items-center'>
                  <Button
                    Icon={<MdEmail color='#1e293b' size={24} />}
                    className='contacts-section__button-phone items-center'
                    theme='ghost'
                    label='hr@art-comfort.com'
                    labelClassName='ml-2 text-slate-800'
                    href='mailto:hr@art-comfort.com'
                    size='small'
                  />
                </div>
                <div className='flex flex-row items-center'>
                  <Button
                    Icon={<AiFillPhone color='#1e293b' size={24} />}
                    className='contacts-section__button-phone items-center'
                    theme='ghost'
                    label='+380963090322'
                    labelClassName='ml-2 text-slate-800'
                    href='tel:+380963090322'
                    size='small'
                  />
                </div>
              </div>
              <p className='text-grayscale-headerWeak mt-4 text-lg font-semibold'>
                {contacts.leaveRequest}
              </p>
              <Formik
                validateOnBlur={hasSubmitted}
                validateOnChange={hasSubmitted}
                onSubmit={async (values, helpers) => {
                  await onFormSubmit(
                    values,
                    helpers as FormikHelpers<ContactsFormType>
                  );
                }}
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                  files: [],
                }}
                validationSchema={toFormikValidationSchema(ContactsForm)}
              >
                {({
                  values,
                  isSubmitting,
                  handleSubmit,
                  handleChange,
                  setFieldValue,
                  errors,
                }) => (
                  <>
                    <div className='mt-6 flex w-full flex-col gap-4'>
                      <Input
                        label={form.name.label}
                        name='name'
                        onClear={() => setFieldValue('name', '')}
                        value={values.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        error={errors.name}
                        success={
                          !!(!errors.name && values.name.length && hasSubmitted)
                        }
                      />
                      <Input
                        label={form.email.label}
                        name='email'
                        onClear={() => setFieldValue('email', '')}
                        value={values.email}
                        disabled={isSubmitting}
                        onChange={handleChange}
                        error={errors.email}
                        success={
                          !!(
                            !errors.email &&
                            values.email.length &&
                            hasSubmitted
                          )
                        }
                      />
                      <Input
                        label={form.phone.label}
                        name='phone'
                        onClear={() => setFieldValue('phone', '')}
                        value={values.phone}
                        disabled={isSubmitting}
                        onChange={handleChange}
                        error={errors.phone}
                        success={
                          !!(
                            !errors.phone &&
                            values.phone.length &&
                            hasSubmitted
                          )
                        }
                      />
                      <Input
                        label={form.motivationMessage.label}
                        name='message'
                        disabled={isSubmitting}
                        type='textarea'
                        rows={10}
                        withClear={isLg}
                        error={errors.message}
                        onClear={() => setFieldValue('message', '')}
                        inputClassName='w-full resize-none border-transparent focus:border-transparent focus:ring-0'
                        value={values.message}
                        onChange={handleChange}
                        success={
                          !!(
                            !errors.message &&
                            values.message.length &&
                            hasSubmitted
                          )
                        }
                      />
                      <div className='mt-2 flex w-10/12 flex-col items-start justify-center'>
                        <Upload
                          multiple
                          listType='text'
                          beforeUpload={() => false}
                          onChange={(info) => {
                            if (info.file.status !== 'uploading') {
                              setFieldValue(
                                'files',
                                info.fileList.map((file) => file.originFileObj)
                              );
                            }
                          }}
                          fileList={values.files as UploadFile[]}
                          className='upload-list-inline'
                          accept='.jpg, .jpeg, .png, .pdf'
                        >
                          <AntDesignButton icon={<FaUpload />}>
                            {form.files.label}
                          </AntDesignButton>
                        </Upload>
                      </div>
                      <div>
                        <Button
                          onClick={() => {
                            setHasSubmitted(true);
                            handleSubmit();
                          }}
                          label={form.send}
                          size='medium'
                          theme='primary'
                          className='mt-8'
                          disabled={!!errors}
                        />
                      </div>
                    </div>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </Layout>
  );
};

export default VacancyPage;
