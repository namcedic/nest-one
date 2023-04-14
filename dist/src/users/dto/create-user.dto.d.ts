import { Role } from '../role.enum';
export declare class CreateUserDto {
    email: string;
    firstName: string;
    userName: string;
    password: string;
    lastName: string;
    roles: Role[];
    isActive: boolean;
}
