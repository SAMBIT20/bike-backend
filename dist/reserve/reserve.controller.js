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
exports.ReserveController = void 0;
const common_1 = require("@nestjs/common");
const reserve_entity_1 = require("./reserve.entity");
const reserve_service_1 = require("./reserve.service");
let ReserveController = class ReserveController {
    constructor(reserveService) {
        this.reserveService = reserveService;
    }
    async findAll() {
        return await this.reserveService.findAll();
    }
    async create(reserve) {
        return await this.reserveService.create(reserve);
    }
    async findOne(id) {
        return await this.reserveService.findOne(id);
    }
    async update(id, reserve) {
        return await this.reserveService.update(id, reserve);
    }
    async delete(id) {
        return await this.reserveService.delete(id);
    }
    async finduserReserve(userEmail) {
        return await this.reserveService.finduserReserve(userEmail);
    }
    async findReserveByUserId(userId) {
        return await this.reserveService.findReserveByUserId(userId);
    }
    async findReserveByBikeId(bikeId) {
        return await this.reserveService.findReserveByBikeId(bikeId);
    }
    async calculateAvailableDates(bikeId, startDate, endDate) {
        return await this.reserveService.calculateAvailableDates(bikeId, startDate, endDate);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reserve_entity_1.Reserve]),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "finduserReserve", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "findReserveByUserId", null);
__decorate([
    (0, common_1.Get)('bike/:bikeId'),
    __param(0, (0, common_1.Param)('bikeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "findReserveByBikeId", null);
__decorate([
    (0, common_1.Get)('bike/:bikeId/:startDate/:endDate'),
    __param(0, (0, common_1.Param)('bikeId')),
    __param(1, (0, common_1.Param)('startDate')),
    __param(2, (0, common_1.Param)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date,
        Date]),
    __metadata("design:returntype", Promise)
], ReserveController.prototype, "calculateAvailableDates", null);
ReserveController = __decorate([
    (0, common_1.Controller)('api/reserve'),
    __metadata("design:paramtypes", [reserve_service_1.ReserveService])
], ReserveController);
exports.ReserveController = ReserveController;
//# sourceMappingURL=reserve.controller.js.map