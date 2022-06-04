import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Reserve } from './reserve.entity';
export declare class ReserveService {
    private reserveRepository;
    constructor(reserveRepository: Repository<Reserve>);
    findAll(): Promise<Reserve[]>;
    create(reserve: Reserve): Promise<Reserve>;
    findOne(id: number): Promise<Reserve>;
    update(id: number, reserve: Partial<Reserve>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    finduserReserve(userId: string): Promise<Reserve[]>;
    findReserveByUserId(userId: string): Promise<Reserve[]>;
    findReserveByBikeId(bikeId: number): Promise<Reserve[]>;
    calculateAvailableDates(bikeId: number, startDate: Date, endDate: Date): Promise<Reserve[]>;
}
