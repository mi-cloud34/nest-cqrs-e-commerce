import { IQueryHandler, QueryHandler } from "@nestjs/cqrs"
import { GetProductsQuery } from "./get_product.query"
import { AbstractProductRepository } from "src/product/domain/repositories/product.repository"
import { Product } from "src/product/schemas/product.schemas"


@QueryHandler(GetProductsQuery)
export class GetProductsQueryHandler implements IQueryHandler<GetProductsQuery> {
  constructor(
    private readonly productRepository: AbstractProductRepository<Product>
  ) {}

  // eslint-disable-next-line
  async execute({query}: GetProductsQuery) {
    const products = await this.productRepository.find(query).populate({path:'colorId',select:'name description userId'})
    return { products }
  }
}

