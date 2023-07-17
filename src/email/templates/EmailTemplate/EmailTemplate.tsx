type EmailTemplateProps = {
  name: string;
  email: string;
  phone: string;
  message?: string;
  // files?: File
};

export const EmailTemplate = (props: EmailTemplateProps): JSX.Element => {
  const { name, email, message, phone } = props;
  return (
    <div>
      <h1>Ми отримали нове повідомлення від {email}!</h1>
      <hr />
      <h3></h3>
      <p>
        Імʼя: <strong>{name}</strong>
      </p>
      <p>
        Email: <strong>{email}</strong>
      </p>
      <p>
        Phone: <strong>{phone}</strong>
      </p>
      {message && (
        <>
          <h3>З таким повідомленням</h3>
          <p>{message}</p>
        </>
      )}
    </div>
  );
};
