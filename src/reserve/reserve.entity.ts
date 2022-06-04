import { Bike } from 'src/bike/bike.entity';
import { Review } from 'src/review/review.entity';
import { User } from 'src/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('reserves')
export class Reserve {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  userId: string;

  @Column()
  bikeId: number;

  @Column()
  userEmail: string;

  @Column()
  bikeModel: string;

  @Column()
  status: string;
}
