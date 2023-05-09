import fs from 'fs';
import { read, utils as xlsxUtils } from 'xlsx/xlsx.mjs';
import Inbound from '../../models/Inbound';
import dbConnect from '@/lib/dbConnect';

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
    await new Promise(async (resolve, reject) => {
      await dbConnect();
      for (const gain of gainsListingJSON) {
        try {
          await Inbound.create({
            name: gain['FULL_NAME'],
            rank: gain['GRADE'],
            afsc: gain['DAFSC'],
            maritalStatus: gain['MARITAL_STATUS'],
            assignedSponsor: null,
            rnltd: new Date((gain['RNLTD'] - 25569) * 86400 * 1000),
          });
        } catch (error) {
          reject(error);
        }
      }
      resolve();
    });
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
