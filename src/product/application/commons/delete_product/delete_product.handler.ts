import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteProductByIdCommand } from "./delete_product.command";
import { AbstractProductRepository } from "src/product/domain/repositories/product.repository";
import { Product } from "src/product/schemas/product.schemas";

@CommandHandler(DeleteProductByIdCommand)
export class DeleteProductByIdCommandHandler
  implements ICommandHandler<DeleteProductByIdCommand>
{
  constructor(
    private readonly movieRepository: AbstractProductRepository<Product>
  ) {}

  async execute({ productId }: DeleteProductByIdCommand) {
    await this.movieRepository.findByIdAndDelete(productId)
  }
}