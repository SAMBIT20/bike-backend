import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user.entity';

export interface responseUser {
  id: string;
  name: string;
  email: string;
  userType: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  // async update(id: number, data: any) {
  //   return this.userRepository.update(id, data);
  // }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder()
      .select(['id', 'name', 'email', 'userType'])
      .execute();
  }

  async updateUser(id: string, user: User): Promise<responseUser> {
    const oldUser = await this.userRepository.findOne(id);
    if (!oldUser)
      throw new HttpException('Invalid User ID', HttpStatus.BAD_REQUEST);
    if (user.password) {
      const hashPassword = bcrypt.hashSync(user.password, 8);
      user = { ...user, password: hashPassword };
    }
    const updateUser = { ...oldUser, ...user };
    const { password, ...rest } = await this.userRepository.save(updateUser);

    return rest;
  }

  async getUserById(id: string): Promise<responseUser> {
    const user = await this.userRepository.findOne(id);
    if (!user)
      throw new HttpException('Invalid User ID', HttpStatus.BAD_REQUEST);
    const { password, ...rest } = user;
    return rest;
  }

  async deleteUser(id: string): Promise<responseUser> {
    const user = await this.userRepository.findOne(id);
    if (!user)
      throw new HttpException('Invalid User ID', HttpStatus.BAD_REQUEST);
    const { password, ...rest } = user;
    await this.userRepository.remove(user);
    return rest;
  }
}
