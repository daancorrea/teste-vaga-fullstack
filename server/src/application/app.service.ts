import { CsvService } from './../helper/csv/csv.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly csvService: CsvService) {}

  async readCsv(query: { limit?: number; page?: number }) {
    const limit = Number(query.limit);
    const page = Number(query.page);
    const data = await this.csvService.readCsv();

    const offset = limit * page;
    const totalPages = Math.ceil(data.length / limit);
    const paginatedItems = data.slice(offset, offset + limit);
    return {
      previousPage: page > 0 ? Number(page) - 1 : null,
      nextPage: totalPages > Number(page) + 1 ? Number(page) + 1 : null,
      total: data.length,
      totalPages: totalPages,
      data: paginatedItems,
    };
  }
}
