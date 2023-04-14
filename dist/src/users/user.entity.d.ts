import { Role } from './role.enum';
export declare class User {
    id: number;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    password: string;
    roles: Role[];
}
