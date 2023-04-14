import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SigninDto): Promise<any>;
    getProfile(req: any): any;
}
