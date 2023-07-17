/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

import { EmailTemplate } from '@/email/templates/EmailTemplate';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_MGCca8vQ_DjuNdpJ7sEiXnz2U2yNEaMo2');

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: 'Art-Comfort Website <email@art-comfort.com>',
      to: 'krasnoshchokvadim@gmail.com',
      subject: 'Заявка з сайту Art-Comfort',
      react: EmailTemplate({ ...JSON.parse(_req.body) }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
