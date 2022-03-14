import { Test, TestingModule } from '@nestjs/testing';
import { PromosService } from './promos.service';

describe('PromosService', () => {
  let service: PromosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromosService],
    }).compile();

    service = module.get<PromosService>(PromosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
