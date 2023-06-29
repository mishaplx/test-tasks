import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('currency')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('convert')
  convertCurrency(
      @Query('from') from: string,
      @Query('to') to: string = 'tether',
      @Query('amount') amount: number = 1,
  ): any {
    return this.appService.convertCurrency(from, to, amount);
  }
}