import { AuthService } from '../service/auth.service';
import { Users } from '../user.entity';
export declare class AuthController {
    private usersService;
    constructor(usersService: AuthService);
    signup(user: Users): Promise<Users>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
