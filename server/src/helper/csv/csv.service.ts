import { Injectable } from '@nestjs/common';
import * as csv from 'csv-parser';
import * as fs from 'fs';
import * as path from 'path';
import { isValidCpforCNPJ } from '../../validators';
import {
  cpforCnpjFormatter,
  currencyFormatter,
  dateFormatter,
} from '../formatter';
import { AppDto } from 'src/application/app.dto';

@Injectable()
export class CsvService {
  async readCsv(): Promise<AppDto[]> {
    const rows = [];
    const filePath = path.resolve(__dirname, '..', '..', '..', 'data.csv');
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row: AppDto) => {
          if (isValidCpforCNPJ(row.nrCpfCnpj)) {
            rows.push({
              ...row,
              nrCpfCnpj: cpforCnpjFormatter(row.nrCpfCnpj),
              vlTotal: currencyFormatter(row.vlTotal),
              vlPresta: currencyFormatter(row.vlPresta),
              vlMora: currencyFormatter(row.vlMora),
              dtContrato: dateFormatter(row.dtContrato),
              dtVctPre: dateFormatter(row.dtVctPre),
            });
          }
        })
        .on('end', () => {
          resolve(rows);
        })
        .on('error', (error: any) => {
          reject(error);
        });
    });
  }
}
