import { IsEmail, IsNotEmpty } from 'class-validator';
export class SigninDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  password: string;
}
