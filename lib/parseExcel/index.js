import { read, utils as xlsxUtils } from 'xlsx/xlsx.mjs';
import fs from 'fs';

const workbookBuffer = fs.readFileSync('./data/roster.xlsx');
const workbook = read(workbookBuffer);

const gainsListingJSON = xlsxUtils.sheet_to_json(
  workbook.Sheets['GAINS LISTING']
);
