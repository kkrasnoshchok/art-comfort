/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_7Pe1qjn7_NytZ1gHqxejeJjqPsxorYN2f');

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const reqBody = _req.body.formData();
    // const file: File = reqBody.get('file') as unknown as File;
    // const fileBuffer = await file.arrayBuffer();
    // const buffer = Buffer.from(fileBuffer);
    const data = await resend.emails.send({
      from: 'Art-Comfort Website <email@art-comfort.com>',
      to: 'krasnoshchokvadim@gmail.com',
      subject: 'Заявка з сайту Art-Comfort',
      // attachments: [
      //   {
      //     filename: 'random.png',
      //     path: 'https://cdn.ebaumsworld.com/mediaFiles/picture/1151541/84693449.png',
      //   },
      //   ..._req.body.files,
      // ],
      // attachments: JSON.parse(_req.body.files),
      react: EmailTemplate({
        email: 'krasnoshchokvadim@gmail.com',
        name: 'vadym',
        phone: '+546045450340',
        message: 'lol',
      }),
    });

    res.status(200).json({
      success: 'true',
      // body: reqBody,
      // file: file,
      // fileBuffer: fileBuffer,
      // buffer: buffer,
    });
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};
