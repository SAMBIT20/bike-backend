import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserService } from './user.service';
import { Role } from 'src/role.enum';
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(name: string, email: string, password: string, userType: 'user' | 'admin'): Promise<import("../user.entity").User>;
    login(email: string, password: string, response: Response): Promise<{
        message: string;
        jwt: string;
    }>;
    user(request: Request): Promise<{
        id: string;
        name: string;
        email: string;
        userType: Role;
    }>;
    logout(request: Request, response: Response): Promise<{
        message: string;
    }>;
    updateUser(id: string, data: any): Promise<import("./user.service").responseUser>;
    getAllUser(): Promise<import("../user.entity").User[]>;
    getUser(id: string): Promise<import("./user.service").responseUser>;
    deleteUser(id: string): Promise<import("./user.service").responseUser>;
}
