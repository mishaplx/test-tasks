import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  const  queryParam = {
    from:'bitcoin',to:'lisk',amount:10000000000000000000000000000000000000000000000
  }
  describe('bitcoin/lisk', () => {
    it('not Infinity ', async () => {

      const data = await appController.convertCurrency(queryParam)
    expect(String(data.result)).not.toEqual("Infinity");
    });
    it('not NaN ', async () => {
      const data = await appController.convertCurrency(queryParam)
      expect(data.result).not.toEqual("NaN");
    });
  });
});
