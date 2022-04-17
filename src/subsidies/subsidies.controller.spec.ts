import { Test, TestingModule } from '@nestjs/testing';
import { SubsidiesController } from './subsidies.controller';

describe('SubsidiesController', () => {
  let controller: SubsidiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubsidiesController],
    }).compile();

    controller = module.get<SubsidiesController>(SubsidiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
