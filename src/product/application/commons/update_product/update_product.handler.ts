import { CommandHandler, ICommandHandler } from "@nestjs/cqrs"
import { UpdateProductByIdCommand } from "./update_product.command"
import { AbstractProductRepository } from "src/product/domain/repositories/product.repository"
import { Product } from "src/product/schemas/product.schemas"


@CommandHandler(UpdateProductByIdCommand)
export class UpdateProductByIdCommandHandler
  implements ICommandHandler<UpdateProductByIdCommand>
{
  constructor(
    private readonly ProductRepository: AbstractProductRepository<Product>
  ) {}

  async execute({ productId ,product }: UpdateProductByIdCommand) {
    const updatedProduct = await this.ProductRepository.findByIdAndUpdate(
      productId,
      product
    )
    return { Product: updatedProduct }
  }
}