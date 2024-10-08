import { IQueryHandler, QueryHandler } from "@nestjs/cqrs"
import { Category } from "src/category/schemas/category.schema"
import { GetCategorysQuery } from "./get_category.query"
import { AbstractCategoryRepository } from "src/category/domain/repositories/category.repositories"

@QueryHandler(GetCategorysQuery)
export class GetCategorysQueryHandler implements IQueryHandler<GetCategorysQuery> {
  constructor(
    private readonly categoryRepository: AbstractCategoryRepository<Category>
  ) {}

  // eslint-disable-next-line
  async execute({query}: GetCategorysQuery) {
    const categorys = await this.categoryRepository.find(query)
    return { categorys }
  }
}

