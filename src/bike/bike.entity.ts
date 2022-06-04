import { Reserve } from 'src/reserve/reserve.entity';
import { Review } from 'src/review/review.entity';
import { User } from 'src/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Bike {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  model: string;
  @Column()
  color: string;
  @Column()
  location: string;
  @Column()
  isAvailable: boolean;
  @Column()
  avgRating: number;
}
