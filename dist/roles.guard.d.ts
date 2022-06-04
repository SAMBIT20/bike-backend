import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthGuard implements CanActivate {
    private reflector;
    private usersService;
    private jwtService;
    constructor(reflector: Reflector, usersService: UserService, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
