import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCsvData(@Query() query: { limit?: number; page?: number }) {
    return this.appService.readCsv(query);
  }
}