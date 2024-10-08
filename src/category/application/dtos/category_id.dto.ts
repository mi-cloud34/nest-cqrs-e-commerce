import { ApiProperty } from '@nestjs/swagger'
import { IsMongoId, IsNotEmpty, Validate } from 'class-validator'
import { IsCategoryExist } from './custom_validator/is_categories_exits.validator'

export class CategoryIdDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  @Validate(IsCategoryExist)
  categoryId!: string
}