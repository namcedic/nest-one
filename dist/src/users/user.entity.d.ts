import { Role } from './role.enum';
import { Address } from './address.interface';
export declare class User {
    id: number;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    password: string;
    addresses: Address;
    roles: Role[];
}
