import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Bike } from './bike.entity';
@Injectable()
export class BikeService {
  createReview(id: string, review: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Bike) private BikeRepository: Repository<Bike>,
  ) {}

  async create(
    model: string,
    color: string,
    location: string,
    isAvailable: boolean,
    avgRating: number,
  ): Promise<Bike> {
    const bike = this.BikeRepository.create({
      model,
      color,
      location,
      isAvailable,
      avgRating,
    });
    return this.BikeRepository.save(bike);
  }

  async getAll(): Promise<Bike[]> {
    return this.BikeRepository.find();
  }

  async getPagiNation(page: number, limit: number) {
    return this.BikeRepository.find({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'ASC',
      },
      where: {
        isAvailable: true,
      },
    });
  }

  async getPagiNationByAdmin(page: number, limit: number) {
    return this.BikeRepository.find({
      skip: (page - 1) * limit,
      take: limit,
      order: {
        id: 'ASC',
      },
    });
  }

  getTotalNumberOfBikes() {
    return this.BikeRepository.count();
  }

  getById(id: string) {
    return this.BikeRepository.findOne(id);
  }

  getByLocation(location: string) {
    return this.BikeRepository.find({ location });
  }

  async findOne(condition: any): Promise<Bike> {
    return this.BikeRepository.findOne(condition);
  }
  async update(
    id: string,
    model: string,
    color: string,
    location: string,
    isAvailable: boolean,
    avgRating: number,
  ): Promise<Bike> {
    const bike = await this.BikeRepository.findOne(id);
    if (!bike) {
      throw new NotFoundException(`Bike with id ${id} not found`);
    }

    Object.assign(bike, {
      model,
      color,
      location,
      isAvailable,
      avgRating,
    });

    return this.BikeRepository.save(bike);
  }

  async remove(id: number) {
    const bike = await this.findOne(id);
    if (!bike) {
      throw new NotFoundException('not found!!!');
    }
    return this.BikeRepository.remove(bike);
  }

  async changeAvailability(id: string, isAvailable: boolean) {
    const bike = await this.findOne(id);
    if (!bike) {
      throw new NotFoundException('not found!!!');
    }
    Object.assign(bike, { isAvailable });
    return this.BikeRepository.save(bike);
  }

  async filterBikes(
    model: string,
    color: string,
    location: string,
    avgRating: number,
  ) {
    return this.BikeRepository.find({
      where: {
        model: Like(`%${model}%`),
        color: Like(`%${color}%`),
        location: Like(`%${location}%`),
        avgRating: Like(`%${avgRating}%`),
      },
    });
  }
}
