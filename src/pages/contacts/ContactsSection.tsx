import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { clsxm } from '@/utils';
import { useI18n } from '@/utils';

type FileObject = {
  filename: string;
  content: ArrayBuffer | null;
};

export type FilesArray = FileObject[];

export const ContactsSection = () => {
  const { locale } = useRouter();
  const [formSent, setFormSent] = useState(false);
  const [filesArray, setFilesArray] = useState<FilesArray>([]);
  const filesFormData = new FormData();

  const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    console.log('selected files', selectedFiles);

    if (!selectedFiles) {
      return null;
    }

    for (const file of selectedFiles) {
      filesFormData.append('file', file);
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

  type ContactsFormType = z.infer<typeof ContactsForm>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactsFormType>({
    resolver: zodResolver(ContactsForm),
    defaultValues: {
      email: 'krasnos@gmail.com',
      name: 'Vadym',
      phone: '+4360606060606',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  });

  const onSubmit: SubmitHandler<ContactsFormType> = async (values) => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: filesFormData,
      });
      // Emptying values
      if (response.ok) {
        setFormSent(true);
        setValue('name', '');
        setValue('email', '');
        setValue('phone', '');
        setValue('message', '');
      }
    } catch (error) {
      const tError = error as Error;
      throw new Error(tError.message, { cause: tError.cause });
    }
  };

  return (
    <section
      id='contacts'
      className='flex w-screen flex-col px-6 py-24 lg:flex-row'
    >
      <div className='flex w-full flex-col items-center lg:w-1/3 lg:items-start'>
        <h1>{t.contacts.title}</h1>
        <div className='mt-6 flex w-full flex-col items-center lg:items-start'>
          {/* Form */}
          <p className='text-lg font-semibold'>{t.contacts.subtitle}</p>
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
              placeholder={t.contacts.messageInputPlaceholder}
              className='rows w-full resize-none border border-slate-300 lg:w-10/12'
              rows={10}
              {...register('message')}
            />
            <div className='mt-2 flex flex-col items-start justify-center lg:mt-6'>
              <input
                type='file'
                multiple
                onChange={(e) => handleFileSelect(e)}
              />
              {filesArray.length > 0 &&
                filesArray.map((file, index) => (
                  <p key={index}>
                    File {index + 1}: {file.filename}
                  </p>
                ))}
            </div>
            <button
              onClick={handleSubmit(onSubmit)}
              className='mt-4 border border-slate-200 px-12 py-2 lg:mt-6'
            >
              {t.contacts.sendEmailButtonLabel}
            </button>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className='mt-8 flex aspect-square w-full border border-slate-300 bg-slate-200 lg:mt-0 lg:aspect-video lg:h-auto lg:flex-1'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2537.8692753430482!2d30.358270321621863!3d50.499390702292644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd2d5e855555%3A0x40150a97676ff1c7!2sTov%20%22Art-Komfort%22!5e0!3m2!1sru!2sat!4v1689071912467!5m2!1sru!2sat'
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </section>
  );
};
