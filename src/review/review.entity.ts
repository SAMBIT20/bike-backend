import { Bike } from 'src/bike/bike.entity';
import { Reserve } from 'src/reserve/reserve.entity';
import { User } from 'src/user.entity';
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  userName: string;

  @Column()
  bike_id: number;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  created_at: Date;
}
