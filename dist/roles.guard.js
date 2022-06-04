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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_decorator_1 = require("./roles.decorator");
const user_service_1 = require("./user/user.service");
const jwt_1 = require("@nestjs/jwt");
let AuthGuard = class AuthGuard {
    constructor(reflector, usersService, jwtService) {
        this.reflector = reflector;
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = request.headers.jwt;
        console.log(token);
        const data = this.jwtService.verify(token);
        console.log(data);
        if (!data) {
            throw new common_1.UnauthorizedException();
        }
        const user = await this.usersService.findById(data.id);
        console.log(user);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        request.user = user;
        return requiredRoles && requiredRoles.includes(user.userType);
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=roles.guard.js.map