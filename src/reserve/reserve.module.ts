import { Module } from '@nestjs/common';
import { ReserveController } from './reserve.controller';
import { Reserve } from './reserve.entity';
import { ReserveService } from './reserve.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reserve])],
  controllers: [ReserveController],
  providers: [ReserveService],
})
export class ReserveModule {}
