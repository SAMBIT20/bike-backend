import { Review } from 'src/review/review.entity';
import { User } from 'src/user.entity';
export declare class BikeModul {
    id: number;
    model: string;
    color: number;
    location: string;
    isAvailable: number;
    avgRating: string;
    reviews: Review[];
    user: User;
    reserves: any;
    constructor(id: number, model: string, color: number, location: string, isAvailable: number, avgRating: string, reviews: Review[], user: User, reserves: any);
}
