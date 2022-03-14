import { Test, TestingModule } from '@nestjs/testing';
import { PaysController } from './pays.controller';

describe('PaysController', () => {
  let controller: PaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaysController],
    }).compile();

    controller = module.get<PaysController>(PaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
