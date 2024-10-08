import { CreateCategoryDto } from "../../dtos/create_category.dto";

export class CreateCategoryCommand {
  constructor(public readonly category: CreateCategoryDto) {}
}