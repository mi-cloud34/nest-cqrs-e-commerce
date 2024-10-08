import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { AbstractProductRepository } from "src/product/domain/repositories/product.repository"
import { Product } from "src/product/schemas/product.schemas"
import { CreateProductCommand } from "./create_product.command"
import { AbstractCategoryRepository } from "src/category/domain/repositories/category.repositories"
import { Category } from "src/category/schemas/category.schema"

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(
    private readonly productRepository: AbstractProductRepository<Product>,
   
  ) {}

  async execute({ product}: CreateProductCommand) {
   
    const createdProduct = await this.productRepository.create(product)
    return { product: createdProduct }
  }
}