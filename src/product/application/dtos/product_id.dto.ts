import { ApiProperty } from '@nestjs/swagger'
import { IsMongoId, IsNotEmpty, Validate } from 'class-validator'
import { IsProductExist } from './custom_validator/is_product_exits.validator'

export class ProductIdDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  @Validate(IsProductExist)
  productId!: string
}