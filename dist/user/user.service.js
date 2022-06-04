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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(data) {
        return this.userRepository.save(data);
    }
    async findOne(condition) {
        return this.userRepository.findOne(condition);
    }
    async findById(id) {
        return this.userRepository.findOne(id);
    }
    async getAllUsers() {
        return this.userRepository
            .createQueryBuilder()
            .select(['id', 'name', 'email', 'userType'])
            .execute();
    }
    async updateUser(id, user) {
        const oldUser = await this.userRepository.findOne(id);
        if (!oldUser)
            throw new common_2.HttpException('Invalid User ID', common_2.HttpStatus.BAD_REQUEST);
        if (user.password) {
            const hashPassword = bcrypt.hashSync(user.password, 8);
            user = Object.assign(Object.assign({}, user), { password: hashPassword });
        }
        const updateUser = Object.assign(Object.assign({}, oldUser), user);
        const _a = await this.userRepository.save(updateUser), { password } = _a, rest = __rest(_a, ["password"]);
        return rest;
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne(id);
        if (!user)
            throw new common_2.HttpException('Invalid User ID', common_2.HttpStatus.BAD_REQUEST);
        const { password } = user, rest = __rest(user, ["password"]);
        return rest;
    }
    async deleteUser(id) {
        const user = await this.userRepository.findOne(id);
        if (!user)
            throw new common_2.HttpException('Invalid User ID', common_2.HttpStatus.BAD_REQUEST);
        const { password } = user, rest = __rest(user, ["password"]);
        await this.userRepository.remove(user);
        return rest;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map