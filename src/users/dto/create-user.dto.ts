import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '../role.enum';
import { Address } from '../address.interface';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  lastName: string;

  roles: Role[];

  addresses: Address;

  isActive: boolean;
}
