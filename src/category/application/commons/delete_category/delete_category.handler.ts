import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteCategoryByIdCommand } from "./delete_category.command";
import { Category } from "src/category/schemas/category.schema";
import { AbstractCategoryRepository } from "src/category/domain/repositories/category.repositories";

@CommandHandler(DeleteCategoryByIdCommand)
export class DeleteCategoryByIdCommandHandler
  implements ICommandHandler<DeleteCategoryByIdCommand>
{
  constructor(
    private readonly categoryRepository: AbstractCategoryRepository<Category>
  ) {}

  async execute({ categoryId }: DeleteCategoryByIdCommand) {
    await this.categoryRepository.findByIdAndDelete(categoryId)
  }
}