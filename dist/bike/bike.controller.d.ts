import { BikeService } from './bike.service';
import { Bike } from './bike.entity';
export declare class BikeController {
    private bikeService;
    constructor(bikeService: BikeService);
    search(data: Bike): Promise<Bike[]>;
    create(data: Bike): Promise<Bike>;
    getBikePagination(page: number, limit: number): Promise<Bike[]>;
    getBikePaginationByAdmin(page: number, limit: number): Promise<Bike[]>;
    getTotalBikes(): Promise<number>;
    getBikeById(id: string): Promise<Bike>;
    update(id: string, data: Bike): Promise<Bike>;
    delete(id: string): Promise<Bike>;
    updateIsAvailable(id: string, data: Bike): Promise<Bike>;
}
