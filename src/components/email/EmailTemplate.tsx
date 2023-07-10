type EmailTemplateProps = { firstName: string };

export const EmailTemplate = ({
  firstName,
}: EmailTemplateProps): JSX.Element => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
