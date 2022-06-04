import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  UpdateResult,
  DeleteResult,
  Between,
  createQueryBuilder,
} from 'typeorm';
import { Reserve } from './reserve.entity';

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(Reserve)
    private reserveRepository: Repository<Reserve>,
  ) {}

  async findAll(): Promise<Reserve[]> {
    return await this.reserveRepository.find();
  }
  async create(reserve: Reserve): Promise<Reserve> {
    return await this.reserveRepository.save(reserve);
  }

  async findOne(id: number): Promise<Reserve> {
    return await this.reserveRepository.findOne(id);
  }

  async update(id: number, reserve: Partial<Reserve>): Promise<UpdateResult> {
    return await this.reserveRepository.update(id, reserve);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.reserveRepository.delete(id);
  }

  async finduserReserve(userId: string): Promise<Reserve[]> {
    return await this.reserveRepository.find({ userId });
  }

  async findReserveByUserId(userId: string): Promise<Reserve[]> {
    return await this.reserveRepository.find({ userId });
  }

  async findReserveByBikeId(bikeId: number): Promise<Reserve[]> {
    return await this.reserveRepository.find({ bikeId });
  }

  async calculateAvailableDates(
    bikeId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<Reserve[]> {
    return await this.reserveRepository.find({
      select: ['startDate', 'endDate'],
      where: {
        bikeId,
        startDate: Between(startDate, endDate),
        status: 'reserve',
      },
    });
  }
}
