import { Upload, UploadFile } from 'antd';
import { Button as AntDesignButton } from 'antd';
import { Formik, FormikHelpers } from 'formik';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { FaUpload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { SectionWrapper } from '@/components/sectionWrapper';

import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { clsxm, useTranslations } from '@/utils';

import { GoogleMap } from './components/GoogleMap';

export const ContactsSection = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { contacts: contactsTranslations, form } = useTranslations();

  const ContactsForm = z.object({
    name: z.string({ required_error: form.name.error }).min(1),
    email: z
      .string({ required_error: form.email.error })
      .email(form.email.invalidError)
      .min(1),
    phone: z.string({ required_error: form.phone.error }).min(1),
    message: z.string().optional(),
    files: z.array(z.object({})).optional(),
  });

  type ContactsFormType = z.infer<typeof ContactsForm>;

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const initialValues: ContactsFormType = {
    name: '',
    email: '',
    phone: '',
    message: '',
    files: [], // Add files field to initialValues
  };

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

    formData.append('to', 'krasnoshchokvadim@gmail.com');

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
    <SectionWrapper sectionProps={{ id: 'contacts' }}>
      <motion.div
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5, easings: ['easeIn', 'easeOut'] }}
        className={clsxm('w-full max-w-7xl')}
      >
        <h1 className='h2 text-grayscale-headerWeak'>
          {contactsTranslations.title}
        </h1>
        <div className='grid grid-cols-8 gap-8 pt-4'>
          <div className='col-span-4 flex flex-col'>
            <div className='flex w-full flex-col items-center lg:items-start'>
              <p className='text-lg font-semibold'>
                {contactsTranslations.contactUsDirectly}
              </p>
              <div className='mt-6 flex w-full flex-col gap-2'>
                <div className='flex flex-row items-center'>
                  <Button
                    Icon={<MdEmail color='#1e293b' size={24} />}
                    className='contacts-section__button-phone items-center'
                    theme='ghost'
                    label='info@art-comfort.com'
                    labelClassName='ml-2 text-slate-800'
                    href='mailto:info@art-comfort.com'
                    size='small'
                  />
                </div>
                <div className='flex flex-row items-center'>
                  <Button
                    Icon={<TiLocation color='#1e293b' size={24} />}
                    className='contacts-section__button-phone items-center'
                    theme='ghost'
                    label={contactsTranslations.locationLabel}
                    labelClassName='ml-2 text-slate-800'
                    href='https://maps.app.goo.gl/sSCxtqTTNVne8Y4s5'
                    size='small'
                  />
                </div>
                <div className='flex flex-row items-center'>
                  <Button
                    Icon={<AiFillPhone color='#1e293b' size={24} />}
                    className='contacts-section__button-phone items-center'
                    theme='ghost'
                    label='+380732792891'
                    labelClassName='ml-2 text-slate-800'
                    href='tel:+380732792891'
                    size='small'
                  />
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
              await onFormSubmit(
                values,
                helpers as FormikHelpers<ContactsFormType>
              );
            }}
            initialValues={initialValues}
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
                  {contactsTranslations.leaveRequest}
                </p>
                <div className='mt-6 flex w-full flex-col gap-4'>
                  <div className='flex w-full gap-4'>
                    <Input
                      label={form.name.label}
                      name='name'
                      inputClassName='h-full'
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
                      label={form.email.label}
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
                    label={form.phone.label}
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
                    label={form.message.label}
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
                        values.message?.length &&
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
              </div>
            )}
          </Formik>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
