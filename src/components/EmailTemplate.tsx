import { MdEmail, MdMessage, MdPerson, MdPhone } from 'react-icons/md';

type EmailTemplateProps = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export const EmailTemplate = (props: EmailTemplateProps): JSX.Element => {
  const { name, email, message, phone } = props;
  return (
    <div>
      <h3>Нове повідомлення</h3>
      <hr />
      <div className='mt-8 flex flex-col gap-2 rounded-lg border p-4'>
        {[
          {
            Icon: <MdPerson size={24} />,
            label: 'Імʼя:',
            value: name,
          },
          {
            Icon: <MdEmail size={24} />,
            label: 'Email:',
            value: email,
          },
          {
            Icon: <MdPhone size={24} />,
            label: 'Телефон:',
            value: phone,
          },
          {
            Icon: <MdMessage size={24} />,
            label: 'Повідомлення:',
            value: message,
          },
        ].map((row) => (
          <div key={row.label} className='flex flex-row items-start gap-2'>
            <div className='flex w-1/2 flex-row items-center gap-1'>
              {row.Icon}
              <p className='italic'>{row.label}</p>
            </div>
            <p className='flex-1 flex-wrap break-words text-sm font-bold'>
              {row.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
