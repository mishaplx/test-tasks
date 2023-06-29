import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {propertyDTO} from "./property.dto";

@Controller('currency')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('convert')
  convertCurrency(
      @Query() queryParams: propertyDTO
  ): Promise<propertyDTO> {
    return  this.appService.convertCurrency(queryParams.from, queryParams.to = 'tether', queryParams.amount = 1);
  }
}