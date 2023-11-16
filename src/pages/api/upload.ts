// pages/api/upload.js
import formidable from 'formidable';
import IncomingForm from 'formidable/Formidable';
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { Resend } from 'resend';

import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend('re_7Pe1qjn7_NytZ1gHqxejeJjqPsxorYN2f');

export const config = {
  api: {
    bodyParser: false,
  },
};

type ReturnFile = {
  content?: string | Buffer;
  filename?: string | false | undefined;
  path?: string;
};

const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), 'uploads'), // Upload directory
    keepExtensions: true,
    filename: (name, ext) => `${name}${ext}`,
    multiples: true,
  });

  try {
    const formData = await getFormData({
      form,
      req,
    });

    // Sending an email
    const data = await resend.emails.send({
      from: 'Art-Comfort Website <email@art-comfort.com>',
      to: 'krasnoshchokvadim@gmail.com',
      subject: 'Заявка з сайту Art-Comfort',
      attachments: formData.files,
      react: EmailTemplate({
        email: formData.fields.email,
        name: formData.fields.name,
        phone: formData.fields.phone,
        message: formData.fields.message,
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
    res.status(500).json({
      message: `Error uploading files -> ${(error as Error).message}`,
    });
  }
};

export default upload;

type GetFormDataFunctionInputType = {
  form: IncomingForm;
  req: NextApiRequest;
};

type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type GetFormDataFunctionReturnType = {
  fields: FormFields;
  files: ReturnFile[];
  pathes: { path: string }[];
};

type GetFormDataFunctionType = (
  props: GetFormDataFunctionInputType
) => Promise<GetFormDataFunctionReturnType>;

const getFormData: GetFormDataFunctionType = async ({ form, req }) =>
  await new Promise((resolve, reject) => {
    const filesData: ReturnFile[] = [];
    const pathes: { path: string }[] = [];
    form.parse(req, async (err, fields, files) => {
      if (err) reject(err);
      if (files.files) {
        if (Array.isArray(files.files)) {
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
        } else {
          const file: formidable.File = files.files;
          const content = await fs.readFile(file.filepath);
          filesData.push({
            filename: file.originalFilename as string,
            content: content,
          });
          pathes.push({
            path: file.filepath,
          });
        }

        resolve({
          fields: fields as unknown as FormFields,
          files: filesData,
          pathes,
        });
      }
    });
  });
