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
exports.ReserveService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reserve_entity_1 = require("./reserve.entity");
let ReserveService = class ReserveService {
    constructor(reserveRepository) {
        this.reserveRepository = reserveRepository;
    }
    async findAll() {
        return await this.reserveRepository.find();
    }
    async create(reserve) {
        return await this.reserveRepository.save(reserve);
    }
    async findOne(id) {
        return await this.reserveRepository.findOne(id);
    }
    async update(id, reserve) {
        return await this.reserveRepository.update(id, reserve);
    }
    async delete(id) {
        return await this.reserveRepository.delete(id);
    }
    async finduserReserve(userId) {
        return await this.reserveRepository.find({ userId });
    }
    async findReserveByUserId(userId) {
        return await this.reserveRepository.find({ userId });
    }
    async findReserveByBikeId(bikeId) {
        return await this.reserveRepository.find({ bikeId });
    }
    async calculateAvailableDates(bikeId, startDate, endDate) {
        return await this.reserveRepository.find({
            select: ['startDate', 'endDate'],
            where: {
                bikeId,
                startDate: (0, typeorm_2.Between)(startDate, endDate),
                status: 'reserve',
            },
        });
    }
};
ReserveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reserve_entity_1.Reserve)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReserveService);
exports.ReserveService = ReserveService;
//# sourceMappingURL=reserve.service.js.map