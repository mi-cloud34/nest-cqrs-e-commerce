import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { CreateCategoryCommand } from "./create_category.command"
import { Category } from "src/category/schemas/category.schema"
import { AbstractCategoryRepository } from "src/category/domain/repositories/category.repositories"

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler
  implements ICommandHandler<CreateCategoryCommand>
{
  constructor(
    private readonly categoryRepository: AbstractCategoryRepository<Category>
  ) {}

  async execute({ category }: CreateCategoryCommand) {
    const createdCategory = await this.categoryRepository.create(category)
    return { category: createdCategory }
  }
}