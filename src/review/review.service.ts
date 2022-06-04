import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Review } from './review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async findAll(): Promise<Review[]> {
    return await this.reviewRepository.find();
  }

  async findOne(id: number): Promise<Review> {
    return await this.reviewRepository.findOne(id);
  }

  async create(review: Review): Promise<Review> {
    return await this.reviewRepository.save(review);
  }

  async update(id: number, review: Review): Promise<UpdateResult> {
    return await this.reviewRepository.update(id, review);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.reviewRepository.delete(id);
  }

  async findByBikeId(bike_id: number): Promise<Review[]> {
    return await this.reviewRepository.find({
      where: { bike_id },
    });
  }

  async checkUserReviewOrNot(
    user_id: number,
    bike_id: number,
  ): Promise<Review> {
    return await this.reviewRepository.findOne({
      where: { user_id, bike_id },
    });
  }
}
