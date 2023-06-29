import {IsEmail, IsNumber, IsString} from "class-validator";
import {Type} from "class-transformer";

export class propertyDTO {
    @IsString()
    from: string;

    @IsString()
    to: string;

    @IsNumber()
    @Type(()=> Number)
    amount: number ;

    result?: string
}