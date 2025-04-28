import { IsDate, IsNotEmpty, IsNumber, MaxDate, MinDate } from "class-validator";


export class CreateContractsDto {
    @MaxDate(new Date())
    createdAt : Date;
    @MinDate(new Date())
    validUntil : Date;
    @IsNotEmpty()
    type : string;
    @IsNumber()
    price : number;

}