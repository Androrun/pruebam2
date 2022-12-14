import { Test, TestingModule } from '@nestjs/testing';
import { ReptilesController } from './reptiles.controller';
import { ReptilesService } from './reptiles.service';

describe('ReptilesController', () => {
  let controller: ReptilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReptilesController],
      providers: [ReptilesService],
    }).compile();

    controller = module.get<ReptilesController>(ReptilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
