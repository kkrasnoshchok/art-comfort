import { Alert } from 'antd';
import { Formik } from 'formik';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { GoogleMap } from '@/pages/contacts/components/GoogleMap';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { useI18n } from '@/utils';

export const ContactsSection = () => {
  const { locale } = useRouter();
  const [formStatus, setFormStatus] = useState<
    'idle' | 'loading' | 'error' | 'success'
  >('idle');
  const [selectedFiles, setSelectedFiles] = useState<FileList | never[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
    }
  };

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

  // const onSubmit: SubmitHandler<ContactsFormType> = async (values) => {
  //   setFormStatus('loading');
  //   const formData = new FormData();
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     formData.append('files', selectedFiles[i]);
  //   }
  //   for (const valueKey in values) {
  //     formData.append(valueKey, values[valueKey as keyof typeof values]);
  //   }

  //   try {
  //     const response = await fetch('/api/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       setFormStatus('success');
  //       setTimeout(() => {
  //         setFormStatus('idle');
  //       }, 2000);
  //       setValue('name', '');
  //       setValue('email', '');
  //       setValue('phone', '');
  //       setValue('message', '');
  //       if (fileRef.current?.value) {
  //         fileRef.current.value = '';
  //       }
  //     } else {
  //       toast.error('Error uploading files');
  //     }
  //   } catch (error) {
  //     setFormStatus('error');
  //     setTimeout(() => {
  //       setFormStatus('idle');
  //     }, 2000);
  //     const tError = error as Error;
  //     throw new Error(tError.message, { cause: tError.cause });
  //   }
  // };

  return (
    <motion.section
      id='contacts'
      className='from-primary-bgStrong to-secondary-bgStrong flex w-screen items-center justify-center bg-gradient-to-t pb-24 pt-12'
    >
      <motion.div className='border-primary-bg flex w-11/12 flex-col rounded-[36px] border-2 bg-gray-50 bg-opacity-25 p-8 shadow-lg lg:flex-row'>
        <div className='flex w-full flex-col items-center lg:w-1/3 lg:items-start'>
          <h1>{t.contacts.title}</h1>
          <div className='mt-6 flex w-full flex-col items-center lg:items-start'>
            {/* Form */}
            <Formik
              onSubmit={(values) => {
                console.log('onSubmit');
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
                handleBlur,
                handleSubmit,
                handleChange,
                setFieldValue,
                errors,
              }) => (
                <>
                  <p className='text-lg font-semibold'>{t.contacts.subtitle}</p>
                  <div className='mt-6 flex w-full flex-col items-center gap-2 lg:items-start'>
                    {formStatus === 'success' && (
                      <Alert
                        className='mb-2 mr-6'
                        message='Ваш лист успішно надіслано!'
                        type='success'
                        closable
                        onClose={() => setFormStatus('idle')}
                        showIcon
                      />
                    )}
                    <Input
                      label='Name'
                      name='name'
                      onClear={() => setFieldValue('name', '')}
                      value={values.name}
                      onChange={handleChange}
                      className='w-10/12'
                      error={errors.name}
                    />
                    <Input
                      label='Email'
                      name='email'
                      onClear={() => setFieldValue('email', '')}
                      value={values.email}
                      onChange={handleChange}
                      className='w-10/12'
                      error={errors.email}
                    />
                    <Input
                      label='Phone'
                      name='phone'
                      onClear={() => setFieldValue('phone', '')}
                      value={values.phone}
                      onChange={handleChange}
                      className='w-10/12'
                      error={errors.phone}
                    />
                    <Input
                      label='Message'
                      name='message'
                      type='textarea'
                      rows={10}
                      onClear={() => setFieldValue('message', '')}
                      inputClassName='w-full resize-none border-transparent focus:border-transparent focus:ring-0'
                      className='w-10/12'
                      value={values.message}
                      onChange={handleChange}
                    />
                    <div className='mt-2 flex w-10/12 flex-col items-start justify-center'>
                      <input
                        ref={fileRef}
                        type='file'
                        multiple
                        onChange={(e) => handleFileChange(e)}
                      />
                    </div>
                    <Button
                      onClick={() => handleSubmit()}
                      label='Send'
                      size='medium'
                      theme='primary'
                      className='mt-8'
                    />
                  </div>
                </>
              )}
            </Formik>
          </div>
        </div>
        {/* Map */}
        <GoogleMap />
      </motion.div>
    </motion.section>
  );
};
