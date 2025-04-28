import { IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    @IsString()
    email? : string;
    @IsOptional()
    @IsStrongPassword()
    @IsString()
    password? : string;
}