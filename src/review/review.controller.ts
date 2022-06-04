import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

import { ReviewService } from './review.service';
import { Review } from './review.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('api/review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Review> {
    return this.reviewService.findOne(id);
  }

  @Post()
  create(@Body() review: Review): Promise<Review> {
    return this.reviewService.create(review);
  }

  @Put(':id')
  update(@Param('id') id: number, review: Review): Promise<UpdateResult> {
    return this.reviewService.update(id, review);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.reviewService.delete(id);
  }

  @Get('bike/:bike_id')
  findByBikeId(@Param('bike_id') bike_id: number): Promise<Review[]> {
    return this.reviewService.findByBikeId(bike_id);
  }

  @Get('user/:user_id/bike/:bike_id')
  checkUserReviewOrNot(
    @Param('user_id') user_id: number,
    @Param('bike_id') bike_id: number,
  ): Promise<Review> {
    return this.reviewService.checkUserReviewOrNot(user_id, bike_id);
  }
}
