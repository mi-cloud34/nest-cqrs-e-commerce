import { IQueryHandler, QueryHandler } from "@nestjs/cqrs"
import { Category } from "src/category/schemas/category.schema"
import { GetCategoryByIdQuery } from "./get_category_by_id.query"
import { AbstractCategoryRepository } from "src/category/domain/repositories/category.repositories"

@QueryHandler(GetCategoryByIdQuery)
export class GetCategoryByIdQueryHandler
  implements IQueryHandler<GetCategoryByIdQuery>
{
  constructor(
    private readonly categoryRepository: AbstractCategoryRepository<Category>
  ) {}

  async execute({ categoryId }: GetCategoryByIdQuery) {
    const category = await this.categoryRepository.findById(categoryId).populate({path:'category',select:'name'})
    return { category }
  }
}