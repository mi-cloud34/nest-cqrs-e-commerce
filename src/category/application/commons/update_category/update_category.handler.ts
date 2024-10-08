import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { UpdateCategoryByIdCommand } from "./update_category.command"
import { Category } from "src/category/schemas/category.schema"
import { AbstractCategoryRepository } from "src/category/domain/repositories/category.repositories"


@CommandHandler(UpdateCategoryByIdCommand)
export class UpdateCategoryByIdCommandHandler
  implements ICommandHandler<UpdateCategoryByIdCommand>
{
  constructor(
    private readonly categoryRepository: AbstractCategoryRepository<Category>
  ) {}

  async execute({ categoryId ,category }: UpdateCategoryByIdCommand) {
    const updatedCategory = await this.categoryRepository.findByIdAndUpdate(
      categoryId,
      category
    )
    return { Category: updatedCategory }
  }
}