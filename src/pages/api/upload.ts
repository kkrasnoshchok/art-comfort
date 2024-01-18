// pages/api/upload.js
import type { File } from 'formidable';
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

// #region general types
type ReturnFile = {
  content?: string | Buffer;
  filename?: string | false | undefined;
  path?: string;
};

type FormFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
  to: string;
};
// #endregion general types

//#region `processFiles` function

type ProcessFilesProps = {
  files: File[];
  filesData: ReturnFile[];
  pathes: { path: string }[];
};

type ProcessFilesFunction = (props: ProcessFilesProps) => Promise<void>;

const processFiles: ProcessFilesFunction = async ({
  files,
  filesData,
  pathes,
}) => {
  if (Array.isArray(files)) {
    for (const file of files) {
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
    const file: formidable.File = files;
    const content = await fs.readFile(file.filepath);
    filesData.push({
      filename: file.originalFilename as string,
      content: content,
    });
    pathes.push({
      path: file.filepath,
    });
  }
};

//#endregion

// #region `handleFormParse` function

type HandleFormParseProps = {
  form: IncomingForm;
  req: NextApiRequest;
  resolve: (
    value:
      | GetFormDataFunctionReturnType
      | PromiseLike<GetFormDataFunctionReturnType>
  ) => void;
  reject: (reason?: unknown) => void;
  filesData: ReturnFile[];
  pathes: { path: string }[];
};

type HandleFormParseFunction = (props: HandleFormParseProps) => Promise<void>;

const handleFormParse: HandleFormParseFunction = async ({
  form,
  req,
  resolve,
  reject,
  filesData,
  pathes,
}) => {
  form.parse(req, async (err, fields, files) => {
    if (err) {
      reject(err);
      return;
    }

    if (!files.files) {
      resolve({
        fields: fields as unknown as FormFields,
        files: filesData,
        pathes,
      });
      return;
    }

    await processFiles({ files: files.files, filesData, pathes });

    resolve({
      fields: fields as unknown as FormFields,
      files: filesData,
      pathes,
    });
  });
};

// #endregion handleFormParse function

// #region `getFormData` function

type GetFormDataFunctionInputType = {
  form: IncomingForm;
  req: NextApiRequest;
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

    handleFormParse({ form, req, resolve, reject, filesData, pathes });
  });
// #endregion

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

    const withoutFiles = formData.files.length === 0;

    // Sending an email
    const data = await resend.emails.send({
      from: 'Art-Comfort Website <email@art-comfort.com>',
      to: formData.fields.to,
      subject: 'Заявка з сайту Art-Comfort',
      attachments: withoutFiles ? [] : formData.files,
      react: EmailTemplate({
        email: formData.fields.email,
        name: formData.fields.name,
        phone: formData.fields.phone,
        message: formData.fields.message,
      }),
    });

    // Clean up uploaded files
    if (!withoutFiles) {
      for (const file of Object.values(formData.pathes)) {
        await fs.unlink(file.path);
      }
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
