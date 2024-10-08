import { UpdateCategoryDto } from "../../dtos/update_category.dto";

export class UpdateCategoryByIdCommand {
  constructor(
    public readonly categoryId: string,
    public readonly category: UpdateCategoryDto
  ) {}
}