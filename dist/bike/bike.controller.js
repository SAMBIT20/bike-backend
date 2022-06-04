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
exports.BikeController = void 0;
const common_1 = require("@nestjs/common");
const bike_service_1 = require("./bike.service");
const bike_entity_1 = require("./bike.entity");
let BikeController = class BikeController {
    constructor(bikeService) {
        this.bikeService = bikeService;
    }
    async search(data) {
        let { model, color, location, avgRating } = data;
        let res = await this.bikeService.filterBikes(model, color, location, avgRating);
        return res;
    }
    async create(data) {
        let { model, color, location, isAvailable, avgRating } = data;
        console.log(isAvailable);
        let res = await this.bikeService.create(model, color, location, isAvailable, avgRating);
        return res;
    }
    async getBikePagination(page, limit) {
        let data = await this.bikeService.getPagiNation(page, 10);
        return data;
    }
    async getBikePaginationByAdmin(page, limit) {
        let data = await this.bikeService.getPagiNationByAdmin(page, 10);
        return data;
    }
    async getTotalBikes() {
        let data = await this.bikeService.getTotalNumberOfBikes();
        return data;
    }
    async getBikeById(id) {
        let data = await this.bikeService.getById(id.trim());
        console.log(id, data);
        return data;
    }
    async update(id, data) {
        let { model, color, location, isAvailable, avgRating } = data;
        console.log(isAvailable);
        let res = await this.bikeService.update(id, model, color, location, isAvailable, avgRating);
        return res;
    }
    async delete(id) {
        return await this.bikeService.remove(parseInt(id));
    }
    async updateIsAvailable(id, data) {
        let { isAvailable } = data;
        console.log(isAvailable);
        let res = await this.bikeService.changeAvailability(id, isAvailable);
        return res;
    }
};
__decorate([
    (0, common_1.Post)('/search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bike_entity_1.Bike]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "search", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bike_entity_1.Bike]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "getBikePagination", null);
__decorate([
    (0, common_1.Get)('/admin'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "getBikePaginationByAdmin", null);
__decorate([
    (0, common_1.Get)('bikecount'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "getTotalBikes", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "getBikeById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bike_entity_1.Bike]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)('updateAval/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bike_entity_1.Bike]),
    __metadata("design:returntype", Promise)
], BikeController.prototype, "updateIsAvailable", null);
BikeController = __decorate([
    (0, common_1.Controller)('api/bike'),
    __metadata("design:paramtypes", [bike_service_1.BikeService])
], BikeController);
exports.BikeController = BikeController;
//# sourceMappingURL=bike.controller.js.map