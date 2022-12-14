import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReptilesModule } from './reptiles/reptiles.module';

@Module({
  imports: [ReptilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
