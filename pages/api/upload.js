import fs from 'fs';
import { read, utils as xlsxUtils } from 'xlsx/xlsx.mjs';

// req.on('data', chunk => {
//   fs.appendFileSync(`./public/uploads/${query.fileName}`, chunk);
// });

// req.on('end', () => {
//   const buffer = fs.readFileSync(`./public/uploads/${query.fileName}`);

//   if (buffer.byteLength === query.byteLength) {
//     const workbook = read(buffer);
//     if (workbook.Sheets['GAINS LISTING']) {
//       const gainsListingJSON = xlsxUtils.sheet_to_json(
//         workbook.Sheets['GAINS LISTING']
//       );
//       console.log(gainsListingJSON);
//     } else {
//       console.log('no gains listing sheet found');
//     }
//   } else {
//     console.log('file not fully uploaded');
//   }

//   res.status(200).json({ data: 'success' });
// });

// const extractedData = read(data);
// console.log(extractedData);
// const gainsListingJSON = xlsxUtils.sheet_to_json(
//   extractedData.Sheets['Sheet1']
// );
// res.status(200).json({ message: 'success' });

// export default function handler(req, res) {
//   const { query } = req;
//   let data = '';

//   req.on('data', chunk => {
//     data += chunk;
//   });

//   req.on('end', () => {
//     fs.writeFileSync(`./public/uploads/${query.fileName}`, data);
//     res.status(200).json({ data: 'success' });
//   });
// }

export default function handler(req, res) {
  if (req.method === 'POST') {
    const file = req.body;
    const filename = Math.random().toString(36) + '.xlsx';
    const filePath = `./public/uploads/${filename}`;

    // create a write stream
    const writeStream = fs.createWriteStream(filePath);

    // add a data event listener to write the file content
    writeStream.on('open', () => {
      writeStream.write(file.data);
      writeStream.end();
    });

    // handle any errors that may occur during the writing process
    writeStream.on('error', error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to write file' });
    });

    // send back a success response
    res.status(200).json({ data: 'success' });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
