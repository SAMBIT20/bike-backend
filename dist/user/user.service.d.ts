import { Repository } from 'typeorm';
import { User } from 'src/user.entity';
export interface responseUser {
    id: string;
    name: string;
    email: string;
    userType: string;
}
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(data: any): Promise<User>;
    findOne(condition: any): Promise<User>;
    findById(id: number): Promise<User>;
    getAllUsers(): Promise<User[]>;
    updateUser(id: string, user: User): Promise<responseUser>;
    getUserById(id: string): Promise<responseUser>;
    deleteUser(id: string): Promise<responseUser>;
}
