/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import { JSXElementConstructor, ReactElement } from 'react';
import { Resend } from 'resend';

import { EmailTemplate } from '../../components/email/EmailTemplate';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_BnRstoDQ_EDBPGTbko634bHzmdPjNNPW7');

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: 'email@art.comfort.com',
      to: 'krasnoshchokvadim@gmail.com',
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }) as
        | ReactElement<unknown, string | JSXElementConstructor<unknown>>
        | null
        | undefined,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
