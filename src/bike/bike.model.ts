import { Review } from 'src/review/review.entity';
import { User } from 'src/user.entity';

export class BikeModul {
  constructor(
    public id: number,
    public model: string,
    public color: number,
    public location: string,
    public isAvailable: number,
    public avgRating: string,
    public reviews: Review[],
    public user: User,
    public reserves: any,
  ) {}
}
