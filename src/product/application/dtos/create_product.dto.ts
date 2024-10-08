import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { IsFile } from "nestjs-form-data";
import { Category } from "src/category/schemas/category.schema";


export class CreateProductDto {
   @ApiProperty()
    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly productName: string;
    @ApiProperty()
    @IsString()
    readonly description: string;
    @ApiProperty()
    @IsNumber()
    readonly price: number;
  
   @ApiProperty( 
    {  description: 'The ID of the category',
        type: String, // Swagger dokümantasyonu için}
})
   @IsOptional()
   categoryId: string;
    @ApiProperty()
    @IsOptional()
    //@IsFile()
    imgUrl: string;
  
}
