import { zodResolver } from '@hookform/resolvers/zod';
import { Alert } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { GoogleMap } from '@/pages/contacts/components/GoogleMap';
import { clsxm } from '@/utils';
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
    setFormStatus('loading');
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }
    for (const valueKey in values) {
      formData.append(valueKey, values[valueKey as keyof typeof values]);
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus('success');
        setTimeout(() => {
          setFormStatus('idle');
        }, 2000);
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
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 2000);
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
              {formStatus === 'loading' && 'Loading...'}
              {formStatus === 'success' && 'Form sent !'}
              {formStatus === 'idle' && t.contacts.sendEmailButtonLabel}
            </button>
          </div>
        </div>
      </div>
      {/* Map */}
      <GoogleMap />
    </section>
  );
};
