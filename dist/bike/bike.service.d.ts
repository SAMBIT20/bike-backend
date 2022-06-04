import { Repository } from 'typeorm';
import { Bike } from './bike.entity';
export declare class BikeService {
    private BikeRepository;
    createReview(id: string, review: any): void;
    constructor(BikeRepository: Repository<Bike>);
    create(model: string, color: string, location: string, isAvailable: boolean, avgRating: number): Promise<Bike>;
    getAll(): Promise<Bike[]>;
    getPagiNation(page: number, limit: number): Promise<Bike[]>;
    getPagiNationByAdmin(page: number, limit: number): Promise<Bike[]>;
    getTotalNumberOfBikes(): Promise<number>;
    getById(id: string): Promise<Bike>;
    getByLocation(location: string): Promise<Bike[]>;
    findOne(condition: any): Promise<Bike>;
    update(id: string, model: string, color: string, location: string, isAvailable: boolean, avgRating: number): Promise<Bike>;
    remove(id: number): Promise<Bike>;
    changeAvailability(id: string, isAvailable: boolean): Promise<Bike>;
    filterBikes(model: string, color: string, location: string, avgRating: number): Promise<Bike[]>;
}
