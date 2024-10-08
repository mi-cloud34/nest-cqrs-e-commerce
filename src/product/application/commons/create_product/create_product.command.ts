
import { IsCategoryExist } from "src/category/application/dtos/custom_validator/is_categories_exits.validator";
import { CreateProductDto } from "../../dtos/create_product.dto";

export class CreateProductCommand {
  constructor(public readonly product: CreateProductDto) {}
}