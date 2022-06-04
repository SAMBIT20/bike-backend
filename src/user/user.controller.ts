import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserService } from './user.service';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/role.enum';
import { AuthGuard } from 'src/roles.guard';

@Controller('api')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('userType') userType: 'user' | 'admin',
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.userService.create({
      name,
      email,
      password: hashedPassword,
      userType,
    });

    delete user.password;

    return user;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,

    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.userService.findOne({ email });

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    // response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'success',
      jwt,
    };
  }

  // @Roles(Role.Admin)
  // @UseGuards(AuthGuard)
  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }
      const user = await this.userService.findOne({ id: data['id'] });
      const { password, ...result } = user;

      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('/logout')
  async logout(@Req() request: Request, @Res() response: Response) {
    response.clearCookie('jwt');
    return {
      message: 'success',
    };
  }

  @Patch('/update/:id')
  async updateUser(@Param('id') id: string, @Body() data: any) {
    return this.userService.updateUser(id, data);
  }

  // @Roles(Role.Admin)
  // @UseGuards(AuthGuard)
  @Get('/alluser')
  async getAllUser() {
    return this.userService.getAllUsers();
  }

  @Get('/user/:id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Delete('/user/:id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
