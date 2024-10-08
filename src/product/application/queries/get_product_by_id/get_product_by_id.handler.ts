import { IQueryHandler, QueryHandler } from "@nestjs/cqrs"
import { GetProductByIdQuery } from "./get_product_by_id.query"
import { AbstractProductRepository } from "src/product/domain/repositories/product.repository"
import { Product } from "src/product/schemas/product.schemas"
@QueryHandler(GetProductByIdQuery)
export class GetProductByIdQueryHandler
  implements IQueryHandler<GetProductByIdQuery>
{
  constructor(
    private readonly productRepository: AbstractProductRepository<Product>
  ) {}

  async execute({ productId }: GetProductByIdQuery) {
    const product = await this.productRepository.findById(productId).populate({path:'category',select:'name'})
    return { product }
  }
}