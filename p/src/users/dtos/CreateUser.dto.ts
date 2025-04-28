import { IsEmail, IsMobilePhone, isNotEmpty, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}
