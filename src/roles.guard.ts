import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './role.enum';
import { UserService } from './user/user.service';
import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
// import * as dotenv from 'dotenv';
// dotenv.config();
// console.log(process.env.SECRET_KEY);
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
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
      throw new UnauthorizedException();
    }
    // @ts-ignore: Unreachable code error
    const user = await this.usersService.findById(data.id);
    console.log(user);

    if (!user) {
      throw new UnauthorizedException();
    }
    request.user = user;
    return requiredRoles && requiredRoles.includes(user.userType);
  }
}
