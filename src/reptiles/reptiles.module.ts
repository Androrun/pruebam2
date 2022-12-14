import { Module } from '@nestjs/common';
import { ReptilesService } from './reptiles.service';
import { ReptilesController } from './reptiles.controller';

@Module({
  controllers: [ReptilesController],
  providers: [ReptilesService]
})
export class ReptilesModule {}
