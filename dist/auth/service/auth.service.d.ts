import { Repository } from 'typeorm';
import { Users } from '../user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwt;
    constructor(userRepository: Repository<Users>, jwt: JwtService);
    signup(user: Users): Promise<Users>;
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
