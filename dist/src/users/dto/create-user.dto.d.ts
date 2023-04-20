import { Role } from '../role.enum';
import { Address } from '../address.interface';
export declare class CreateUserDto {
    email: string;
    firstName: string;
    userName: string;
    password: string;
    lastName: string;
    roles: Role[];
    addresses: Address;
    isActive: boolean;
}
