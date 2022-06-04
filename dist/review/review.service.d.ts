import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Review } from './review.entity';
export declare class ReviewService {
    private reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    create(review: Review): Promise<Review>;
    update(id: number, review: Review): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    findByBikeId(bike_id: number): Promise<Review[]>;
    checkUserReviewOrNot(user_id: number, bike_id: number): Promise<Review>;
}
