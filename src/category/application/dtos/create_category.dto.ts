import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {
   @ApiProperty()
    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    readonly name: string;
  
  
}
