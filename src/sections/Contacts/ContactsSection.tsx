import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import clsxm from '@/lib/clsxm';

import { useI18n } from '@/utils';

const getRequiredError = (field: string) => `${field} is required`;

const ContactsForm = z
  .object({
    name: z.string().min(1, getRequiredError('name')),
    email: z.string().email().min(1, getRequiredError('email')),
    phone: z.string().min(1, getRequiredError('phone')),
    message: z.string(),
  })
  .required();

type ContactsFormType = z.infer<typeof ContactsForm>;

export const ContactsSection = () => {
  const { t } = useI18n();
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

  const onSubmit: SubmitHandler<ContactsFormType> = (_) => {
    // console.log(`values _> ${JSON.stringify(values)}`);
    // console.log(`errors -> ${JSON.stringify(errors)}`);
    setValue('name', '');
    setValue('email', '');
    setValue('phone', '');
    setValue('message', '');
  };

  return (
    <section id='contacts' className='w-screen px-6 pb-12 pt-28'>
      <h1>{t.contacts.title}</h1>
      <div className='mt-6 flex w-full'>
        <div className='w-1/3'>
          <p className='text-lg font-semibold'>{t.contacts.subtitle}</p>
          <div className='mt-6 flex w-full flex-col items-start gap-2'>
            <input
              className={clsxm([
                'w-10/12 border border-stone-400',
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
                'w-10/12 border border-stone-400',
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
                'w-10/12 border border-stone-400',
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
              className='rows w-10/12 resize-none border border-stone-400'
              rows={10}
              {...register('message')}
            />
            <button
              onClick={handleSubmit(onSubmit)}
              className='mt-2 rounded-lg border px-6 py-2'
            >
              {t.contacts.sendEmailButtonLabel}
            </button>
          </div>
        </div>
        {/* Map */}
        <div className='flex flex-1 bg-slate-500' />
      </div>
    </section>
  );
};
