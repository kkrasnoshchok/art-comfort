import { Formik } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import 'react-toastify/dist/ReactToastify.min.css';

import { Layout } from '@/components/layout';

import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { useI18n } from '@/utils';
import { vacancies } from '@/utils/dataset/vacancies.dataset';

const VacancyPage = () => {
  const router = useRouter();

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | never[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
    }
  };

  const { t } = useI18n();
  const getRequiredError = (field: string) => {
    if (router.locale === 'ua') {
      return t.contacts.inputError;
    }
    `${field}${t.contacts.inputError}`;
  };
  if (!router.query.slug) {
    return null;
  }
  const vacancyId = (router.query.slug as string).split('-')[0];

  const vacancy = vacancies.find((vacancy) => vacancy.id === vacancyId);
  if (!vacancy) {
    return null;
  }

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

  return (
    <Layout>
      <motion.div className=' from-primary-bg to-secondary-bg flex min-h-screen w-full flex-col items-center bg-gradient-to-b px-16 pb-24 pt-12'>
        <div className='border-primary-bgStrong'>
          <motion.div>
            <Button label='Back' onClick={router.back} />
          </motion.div>
          <motion.h1 className='text-primary-defaultStrong mt-8'>
            {vacancy.jobTitle}
          </motion.h1>
          {/* Long Details */}
          <motion.p className='text-primary-defaultWeak mt-8'>
            {vacancy.longDescription.map((longDescription) => (
              <>
                <p key={longDescription}>{longDescription}</p>
                <br />
              </>
            ))}
          </motion.p>
          {/* Form */}
          <motion.div>
            {/* Form */}
            <Formik
              validateOnBlur={hasSubmitted}
              validateOnChange={hasSubmitted}
              onSubmit={async (values, helpers) => {
                setHasSubmitted(true);
                const formData = new FormData();
                for (let i = 0; i < selectedFiles.length; i++) {
                  formData.append('files', selectedFiles[i]);
                }
                for (const valueKey in values) {
                  formData.append(
                    valueKey,
                    values[valueKey as keyof typeof values]
                  );
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
              }}
              initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
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
                  <p className='text-primary-defaultWeak mt-8 text-lg font-semibold'>
                    {t.contacts.subtitle}
                  </p>
                  <div className='mt-6 flex w-full flex-col gap-4'>
                    <Input
                      label='Name'
                      name='name'
                      onClear={() => setFieldValue('name', '')}
                      value={values.name}
                      onChange={handleChange}
                      className='w-10/12'
                      disabled={isSubmitting}
                      error={errors.name}
                      success={
                        !!(!errors.name && values.name.length && hasSubmitted)
                      }
                    />
                    <Input
                      label='Email'
                      name='email'
                      onClear={() => setFieldValue('email', '')}
                      value={values.email}
                      disabled={isSubmitting}
                      onChange={handleChange}
                      className='w-10/12'
                      error={errors.email}
                      success={
                        !!(!errors.email && values.email.length && hasSubmitted)
                      }
                    />
                    <Input
                      label='Phone'
                      name='phone'
                      onClear={() => setFieldValue('phone', '')}
                      value={values.phone}
                      disabled={isSubmitting}
                      onChange={handleChange}
                      className='w-10/12'
                      error={errors.phone}
                      success={
                        !!(!errors.phone && values.phone.length && hasSubmitted)
                      }
                    />
                    <Input
                      label='Чому я хочу працювати в Арт-Комфорт?'
                      name='message'
                      disabled={isSubmitting}
                      type='textarea'
                      rows={10}
                      onClear={() => setFieldValue('message', '')}
                      inputClassName='w-full resize-none border-transparent focus:border-transparent focus:ring-0'
                      className='w-10/12'
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
                      <input
                        ref={fileRef}
                        type='file'
                        multiple
                        onChange={(e) => handleFileChange(e)}
                        className='input-file'
                      />
                    </div>
                    <div>
                      <Button
                        onClick={() => handleSubmit()}
                        label='Надіслати'
                        size='medium'
                        theme='primary'
                        className='mt-8'
                      />
                    </div>
                  </div>
                </>
              )}
            </Formik>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default VacancyPage;
