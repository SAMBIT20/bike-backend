import { Reserve } from './reserve.entity';
import { ReserveService } from './reserve.service';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class ReserveController {
    private reserveService;
    constructor(reserveService: ReserveService);
    findAll(): Promise<Reserve[]>;
    create(reserve: Reserve): Promise<Reserve>;
    findOne(id: number): Promise<Reserve>;
    update(id: number, reserve: Partial<Reserve>): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
    finduserReserve(userEmail: string): Promise<Reserve[]>;
    findReserveByUserId(userId: string): Promise<Reserve[]>;
    findReserveByBikeId(bikeId: number): Promise<Reserve[]>;
    calculateAvailableDates(bikeId: number, startDate: Date, endDate: Date): Promise<Reserve[]>;
}
