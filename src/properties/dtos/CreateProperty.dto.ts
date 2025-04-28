import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePropertyDto {
  @IsNotEmpty()
  location : string;
}
