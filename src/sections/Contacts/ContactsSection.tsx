import { Formik } from 'formik';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { clsxm, useI18n } from '@/utils';
import { cn } from '@/utils/cn';

import { GoogleMap } from './components/GoogleMap';

export const ContactsSection = () => {
  const { locale } = useRouter();
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
    if (locale === 'ua') {
      return t.contacts.inputError;
    }
    `${field}${t.contacts.inputError}`;
  };

  const ContactsForm = z.object({
    name: z.string().min(1, getRequiredError('Name')),
    email: z
      .string()
      .email(t.contacts.emailInputError)
      .min(1, getRequiredError('Email')),
    phone: z.string().min(1, getRequiredError('Phone')),
  });

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, easings: ['easeIn', 'easeOut'] },
    },
  };

  return (
    <SectionWrapper sectionProps={{ id: 'contacts' }}>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true }}
        className={clsxm('w-full max-w-7xl')}
      >
        <h1 className='h2 text-grayscale-headerWeak'>{t.contacts.title}</h1>
        <div className='grid grid-cols-8 gap-8 pt-4'>
          <div className='col-span-4 flex flex-col'>
            <div className='flex w-full flex-col items-center lg:items-start'>
              <p className='text-lg font-semibold'>Звʼязатись напряму</p>
              <div className='mt-6 flex w-full gap-2'>
                <div
                  className={cn(
                    'w-full rounded-xl p-2',
                    'bg-grayscale-bg border-grayscale-headerWeak border'
                  )}
                >
                  {[
                    {
                      id: 0,
                      label: 'Lifecell',
                      buttonLabel: '+380931231231232',
                      buttonHref: 'tel:+380931231231232',
                    },
                    {
                      id: 1,
                      label: 'Vodafone',
                      buttonLabel: '+380971231231232',
                      buttonHref: 'tel:+380971231231232',
                    },
                    {
                      id: 2,
                      label: 'Kyivstar',
                      buttonLabel: '+380961231231232',
                      buttonHref: 'tel:+380961231231232',
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className='flex flex-row items-center gap-1'
                    >
                      <p className='text-primary-defaultWeak text-sm'>
                        {item.label}:{' '}
                      </p>
                      <Button
                        className='contacts-section__button-phone'
                        theme='ghost'
                        size='small'
                        label={item.buttonLabel}
                        href={item.buttonHref}
                      />
                    </div>
                  ))}
                </div>
                <div
                  className={cn(
                    'w-full rounded-xl p-2',
                    'bg-grayscale-bg border-grayscale-headerWeak border'
                  )}
                >
                  {[
                    {
                      id: 0,
                      label: 'CEO',
                      buttonLabel: 'oleg@art-comfort.com',
                      buttonHref: 'mailto:oleg@art-comfort.com',
                    },
                    {
                      id: 1,
                      label: 'Projects Lead',
                      buttonLabel: 'natalia@art-comfort.com',
                      buttonHref: 'mailto:natalia@art-comfort.com',
                    },
                    {
                      id: 2,
                      label: 'HR',
                      buttonLabel: 'kateryna@art-comfort.com',
                      buttonHref: 'mailto:kateryna@art-comfort.com',
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className='flex flex-row items-center gap-1'
                    >
                      <p className='text-primary-defaultWeak text-sm'>
                        {item.label}:{' '}
                      </p>
                      <Button
                        className='contacts-section__button-phone'
                        theme='ghost'
                        size='small'
                        label={item.buttonLabel}
                        href={item.buttonHref}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='mt-2 flex flex-1'>
              <GoogleMap />
            </div>
          </div>
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

              formData.append('to', 'krasnoshchokvadim@gmail.com');

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
              <div className='col-span-4'>
                <p className='text-grayscale-headerWeak text-lg font-semibold'>
                  {t.contacts.subtitle}
                </p>
                <div className='mt-6 flex w-full flex-col gap-4'>
                  <div className='flex w-full flex-grow gap-4'>
                    <Input
                      label='Name'
                      name='name'
                      onClear={() => setFieldValue('name', '')}
                      value={values.name}
                      onChange={handleChange}
                      className='flex-1'
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
                      className='flex-1'
                      error={errors.email}
                      success={
                        !!(!errors.email && values.email.length && hasSubmitted)
                      }
                    />
                  </div>
                  <Input
                    label='Phone'
                    name='phone'
                    onClear={() => setFieldValue('phone', '')}
                    value={values.phone}
                    disabled={isSubmitting}
                    onChange={handleChange}
                    // className='w-10/12'
                    error={errors.phone}
                    success={
                      !!(!errors.phone && values.phone.length && hasSubmitted)
                    }
                  />
                  <Input
                    label='Message'
                    name='message'
                    disabled={isSubmitting}
                    type='textarea'
                    rows={10}
                    onClear={() => setFieldValue('message', '')}
                    inputClassName='w-full resize-none border-transparent focus:border-transparent focus:ring-0'
                    // className='w-10/12'
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
                      onClick={() => {
                        handleSubmit();
                      }}
                      label='Надіслати'
                      size='medium'
                      theme='primary'
                      className='mt-8'
                    />
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
