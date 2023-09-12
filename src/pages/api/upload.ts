// pages/api/upload.js
import formidable from 'formidable';
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { Resend } from 'resend';

import { EmailTemplate } from '@/email/templates/EmailTemplate';

const resend = new Resend('re_7Pe1qjn7_NytZ1gHqxejeJjqPsxorYN2f');

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), 'uploads'), // Upload directory
    keepExtensions: true,
    filename: (name, ext) => `${name}${ext}`,
    multiples: true,
  });

  type ReturnFile = {
    content?: string | Buffer;
    filename?: string | false | undefined;
    path?: string;
  };

  try {
    const formData: {
      fields: unknown;
      files: ReturnFile[];
      pathes: { path: string }[];
    } = await new Promise((resolve, reject) => {
      const filesData: ReturnFile[] = [];
      const pathes: { path: string }[] = [];
      form.parse(req, async (err, fields, files) => {
        if (err) reject(err);
        if (files.files) {
          for (const file of files.files) {
            const content = await fs.readFile(file.filepath);
            filesData.push({
              filename: file.originalFilename as string,
              content: content,
            });
            pathes.push({
              path: file.filepath,
            });
          }
          resolve({ fields, files: filesData, pathes });
        }
      });
    });

    const data = await resend.emails.send({
      from: 'Art-Comfort Website <email@art-comfort.com>',
      to: 'krasnoshchokvadim@gmail.com',
      subject: 'Заявка з сайту Art-Comfort',
      attachments: formData.files,
      react: EmailTemplate({
        email: 'krasnoshchokvadim@gmail.com',
        name: 'vadym',
        phone: '+546045450340',
        message: 'lol',
      }),
    });

    // Clean up uploaded files
    for (const file of Object.values(formData.pathes)) {
      await fs.unlink(file.path);
    }

    res.status(200).json({
      message: `Files uploaded successfully: ${data.id}`,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Error uploading files -> ${error.message}` });
  }
};

export default upload;
