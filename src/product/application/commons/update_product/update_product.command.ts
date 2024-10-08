import { UpdateProductDto } from "../../dtos/update_product.dto";

export class UpdateProductByIdCommand {
  constructor(
    public readonly productId: string,
    public readonly product: UpdateProductDto
  ) {}
}