import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
  Patch,
} from '@nestjs/common';
import { Reserve } from './reserve.entity';
import { ReserveService } from './reserve.service';

import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('api/reserve')
export class ReserveController {
  constructor(private reserveService: ReserveService) {}
  @Get()
  async findAll(): Promise<Reserve[]> {
    return await this.reserveService.findAll();
  }

  @Post()
  async create(@Body() reserve: Reserve): Promise<Reserve> {
    return await this.reserveService.create(reserve);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Reserve> {
    return await this.reserveService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() reserve: Partial<Reserve>,
  ): Promise<UpdateResult> {
    return await this.reserveService.update(id, reserve);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<DeleteResult> {
    return await this.reserveService.delete(id);
  }

  @Get('user/:userId')
  async finduserReserve(
    @Param('userId') userEmail: string,
  ): Promise<Reserve[]> {
    return await this.reserveService.finduserReserve(userEmail);
  }

  @Get('user/:userId')
  async findReserveByUserId(
    @Param('userId') userId: string,
  ): Promise<Reserve[]> {
    return await this.reserveService.findReserveByUserId(userId);
  }

  @Get('bike/:bikeId')
  async findReserveByBikeId(
    @Param('bikeId') bikeId: number,
  ): Promise<Reserve[]> {
    return await this.reserveService.findReserveByBikeId(bikeId);
  }

  @Get('bike/:bikeId/:startDate/:endDate')
  async calculateAvailableDates(
    @Param('bikeId') bikeId: number,
    @Param('startDate') startDate: Date,
    @Param('endDate') endDate: Date,
  ): Promise<Reserve[]> {
    return await this.reserveService.calculateAvailableDates(
      bikeId,
      startDate,
      endDate,
    );
  }
}
