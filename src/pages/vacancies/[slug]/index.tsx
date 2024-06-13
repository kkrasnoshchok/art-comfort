import { Button as AntDesignButton, Upload, UploadFile } from 'antd';
import { Formik, FormikHelpers } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@/components/layout';
import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { useBreakpoint } from '@/utils';
import { vacancies } from '@/utils/dataset/vacancies.dataset';
import { useTranslations } from '@/utils/locales';

const VacancyPage = () => {
  const router = useRouter();
  const { isLg } = useBreakpoint('lg');
  const { form, general } = useTranslations();

  const [hasSubmitted, setHasSubmitted] = useState(false);

  if (!router.query.slug) {
    return null;
  }
  const vacancyId = (router.query.slug as string).split('-')[0];

  const vacancy = vacancies.find((vacancy) => vacancy.id === vacancyId);
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
        <section className='mx-4 w-full max-w-6xl pt-16'>
          <motion.div>
            <Button
              label={general.backToList}
              size='small'
              onClick={router.back}
            />
          </motion.div>
          <div className='flex flex-col lg:flex-row'>
            <div className='pr-4'>
              <h2 className='text-grayscale-header mt-8'>{vacancy.jobTitle}</h2>
              {/* Long Details */}
              <motion.p className='text-grayscale-body mt-4'>
                {vacancy.longDescription}
              </motion.p>
            </div>
            <div className='min-w-[35%]'>
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
