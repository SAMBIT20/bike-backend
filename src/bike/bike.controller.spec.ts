import { Test, TestingModule } from '@nestjs/testing';
import { BikeController } from './bike.controller';

describe('BikeController', () => {
  let controller: BikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikeController],
    }).compile();

    controller = module.get<BikeController>(BikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
