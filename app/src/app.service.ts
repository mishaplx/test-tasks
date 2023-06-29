import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import axios from 'axios';
import * as process from "process";
import Decimal from "decimal.js";
interface objCash {
  key: string,
  price: number,
  volume: number
}
@Injectable()
export class AppService {
  async convertCurrency(
      from: string,
      to: string,
      amount: number,
  ): Promise<any> {
    const prices: [objCash] = await this.fetchPrices();
    const fromPrice = prices.find((el)=> {
     return  el.key === from
    });
    const toPrice = prices.find((el)=> {
      return  el.key === to
    });
    if (!fromPrice || !toPrice) {
     return new HttpException('Invalid currency',HttpStatus.BAD_REQUEST)
    }

    const result = this.convert(fromPrice.price,toPrice.price,amount)

    return {
      amount,
      from,
      to,
      result,
    };
  }

  async fetchPrices(): Promise<[objCash]> {
    const response = await axios.get(
        'https://tstapi.cryptorank.io/v0/coins/prices/',
    );
    return response.data.data;
  }
  convert( fromPrice:number,   toPrice:number,  amount: number){
    const value = fromPrice * amount / toPrice
    if(!isFinite(value)){
      const decimalfromPrice = new Decimal(fromPrice);
      const decimalamount = new Decimal(amount);
      const decimaltoPrice = new Decimal(toPrice);

      const result = decimalfromPrice.times(decimalamount).dividedBy(decimaltoPrice);
      return result.toString()
    }
    return value.toFixed(20) ;
  }
}





//// Функция для сложения двух чисел
// function add(a, b) {
//   return a + b;
// }
//
// // Тест для функции add
// test('Сложение двух чисел', () => {
//   // Ожидаемый результат
//   const expected = 10;
//
//   // Вызываем функцию add с аргументами 6 и 4
//   const result = add(6, 4);
//
//   // Проверяем, что результат равен ожидаемому значению
//   expect(result).toBe(expected);
// });