import { promises as fs } from 'fs';
import path from 'path';
import formidable from 'formidable';
import { cwd } from 'process';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  let status = 200,
    resultBody = { status: 'ok', message: 'Files were uploaded successfully' };

  const files = await new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();
    const files = [];
    form.on('file', function (field, file) {
      files.push([field, file]);
    });
    form.on('end', () => resolve(files));
    form.on('error', error => reject(error));
    form.parse(request, () => {});
  }).catch(e => {
    console.log(e);
    status = 500;
    resultBody = { status: 'fail', message: 'Upload error' };
  });

  console.log(cwd());

  if (files?.length) {
    const targetPath = path.join(process.cwd(), `/uploads/`);
    try {
      await fs.access(targetPath);
    } catch (error) {
      console.log(`couldn't access directory`);
      console.log(error);
      await fs.mkdir(targetPath);
    }

    for (const file of files) {
      const tempPath = file[1].filepath;
      await fs.rename(tempPath, targetPath + file[1].originalFilename);
    }
  }
  response.status(status).json(resultBody);
}
