import { Test, TestingModule } from '@nestjs/testing';
import { ReptilesService } from './reptiles.service';

describe('ReptilesService', () => {
  let service: ReptilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReptilesService],
    }).compile();

    service = module.get<ReptilesService>(ReptilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
