import {IsEmail, IsNumber, IsString} from "class-validator";
import {Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";
export interface IpropertyDTO {
    from: string
    to: string;
    amount: number;
    result?: string;
}
export class propertyDTO implements IpropertyDTO{
    @IsString()
    @ApiProperty({required:true, description:'ключ монеты из которой конвертируем'})
    from: string;

    @ApiProperty({required:true, description:'ключ монеты в которую конвертируем. Необязателен, По умолчанию tether',default:'tether'})
    @IsString()
    to: string;

    @ApiProperty({required:false, description:'количество монет которое конвертируем. Необязателен, По умолчанию 1',default:1})
    @IsNumber()
    @Type(()=> Number)
    amount: number ;

    result?: string
}
