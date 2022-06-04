"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bike_entity_1 = require("./bike.entity");
let BikeService = class BikeService {
    constructor(BikeRepository) {
        this.BikeRepository = BikeRepository;
    }
    createReview(id, review) {
        throw new Error('Method not implemented.');
    }
    async create(model, color, location, isAvailable, avgRating) {
        const bike = this.BikeRepository.create({
            model,
            color,
            location,
            isAvailable,
            avgRating,
        });
        return this.BikeRepository.save(bike);
    }
    async getAll() {
        return this.BikeRepository.find();
    }
    async getPagiNation(page, limit) {
        return this.BikeRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'ASC',
            },
            where: {
                isAvailable: true,
            },
        });
    }
    async getPagiNationByAdmin(page, limit) {
        return this.BikeRepository.find({
            skip: (page - 1) * limit,
            take: limit,
            order: {
                id: 'ASC',
            },
        });
    }
    getTotalNumberOfBikes() {
        return this.BikeRepository.count();
    }
    getById(id) {
        return this.BikeRepository.findOne(id);
    }
    getByLocation(location) {
        return this.BikeRepository.find({ location });
    }
    async findOne(condition) {
        return this.BikeRepository.findOne(condition);
    }
    async update(id, model, color, location, isAvailable, avgRating) {
        const bike = await this.BikeRepository.findOne(id);
        if (!bike) {
            throw new common_1.NotFoundException(`Bike with id ${id} not found`);
        }
        Object.assign(bike, {
            model,
            color,
            location,
            isAvailable,
            avgRating,
        });
        return this.BikeRepository.save(bike);
    }
    async remove(id) {
        const bike = await this.findOne(id);
        if (!bike) {
            throw new common_1.NotFoundException('not found!!!');
        }
        return this.BikeRepository.remove(bike);
    }
    async changeAvailability(id, isAvailable) {
        const bike = await this.findOne(id);
        if (!bike) {
            throw new common_1.NotFoundException('not found!!!');
        }
        Object.assign(bike, { isAvailable });
        return this.BikeRepository.save(bike);
    }
    async filterBikes(model, color, location, avgRating) {
        return this.BikeRepository.find({
            where: {
                model: (0, typeorm_2.Like)(`%${model}%`),
                color: (0, typeorm_2.Like)(`%${color}%`),
                location: (0, typeorm_2.Like)(`%${location}%`),
                avgRating: (0, typeorm_2.Like)(`%${avgRating}%`),
            },
        });
    }
};
BikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bike_entity_1.Bike)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BikeService);
exports.BikeService = BikeService;
//# sourceMappingURL=bike.service.js.map