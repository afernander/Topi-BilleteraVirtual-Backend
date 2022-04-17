import { Test, TestingModule } from '@nestjs/testing';
import { SubsidiesService } from './subsidies.service';

describe('SubsidiesService', () => {
  let service: SubsidiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubsidiesService],
    }).compile();

    service = module.get<SubsidiesService>(SubsidiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
