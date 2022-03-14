import { Test, TestingModule } from '@nestjs/testing';
import { PaysService } from './pays.service';

describe('PaysService', () => {
  let service: PaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaysService],
    }).compile();

    service = module.get<PaysService>(PaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
