import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {IpropertyDTO, propertyDTO} from "./property.dto";
import {ApiOkResponse} from "@nestjs/swagger";
import {PropertyResponse} from "./property.response";

@ApiOkResponse({type:PropertyResponse})
@Controller('currency')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('convert')
  convertCurrency(
      @Query() queryParams: propertyDTO
  ): Promise<PropertyResponse> {
    return  this.appService.convertCurrency(queryParams.from, queryParams.to = 'tether', queryParams.amount = 1);
  }
}