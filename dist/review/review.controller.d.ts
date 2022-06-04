import { ReviewService } from './review.service';
import { Review } from './review.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    create(review: Review): Promise<Review>;
    update(id: number, review: Review): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    findByBikeId(bike_id: number): Promise<Review[]>;
    checkUserReviewOrNot(user_id: number, bike_id: number): Promise<Review>;
}
