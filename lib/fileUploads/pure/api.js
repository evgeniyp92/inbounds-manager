import fs from 'fs';
import { read, utils as xlsxUtils } from 'xlsx/xlsx.mjs';

export default async function handler(req, res) {
  const { query } = req;
  const filePath = `${process.cwd()}/uploads/${query.fileName}`;

  // create a write stream (in append mode)
  await new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(filePath);

    // pipe the request into writeStream
    req.pipe(writeStream);

    // resolve promise when request is finished
    writeStream.on('finish', () => resolve());

    // reject the promise if there's an error writing the file
    writeStream.on('error', error => reject(error));
  });

  // req.on('data', chunk => {
  //   fs.writeFileSync(`${process.cwd()}/uploads/${query.fileName}`, chunk);
  // });

  await new Promise(resolve => {
    // Check if the file exists, retrying every 500ms if it doesn't
    const intervalId = setInterval(() => {
      if (fs.existsSync(filePath)) {
        clearInterval(intervalId);
        resolve();
      }
    }, 500);
  });

  try {
    const workbookBuffer = fs.readFileSync(filePath);
    const workbook = await read(workbookBuffer);
    const gainsListingJSON = xlsxUtils.sheet_to_json(
      workbook.Sheets['GAINS LISTING']
    );
    res.status(200).json({ success: true, data: gainsListingJSON });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

// const fs = require('fs');

// async function waitForFile(filePath) {
//   while (true) {
//     try {
//       await fs.promises.access(filePath, fs.constants.F_OK);
//       const fileContents = await fs.promises.readFile(filePath, 'utf-8');
//       console.log(`File ${filePath} exists! Contents:`, fileContents);
//       break;
//     } catch (err) {
//       console.error(`File ${filePath} does not exist yet. Retrying in 1 second...`);
//       await new Promise(resolve => setTimeout(resolve, 1000));
//     }
//   }
// }

// waitForFile('/path/to/my/file.txt')
//   .then(() => {
//     console.log('Finished waiting for file.');
//     // Do something with the file now that it exists...
//   })
//   .catch(err => {
//     console.error(`Error waiting for file: ${err}`);
//   });
