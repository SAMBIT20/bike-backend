import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeController } from './bike.controller';
import { BikeService } from './bike.service';
import { Bike } from './bike.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  providers: [BikeService],
  controllers: [BikeController],
  exports: [BikeService],
})
export class BikeModule {}
