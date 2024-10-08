import { CreateProductCommandHandler } from "./create_product/create_product.handler";
import { DeleteProductByIdCommandHandler } from "./delete_product/delete_product.handler";
import { UpdateProductByIdCommandHandler } from "./update_product/update_product.handler";

export const ProductCommandHandlers = [
  CreateProductCommandHandler,
  UpdateProductByIdCommandHandler,
  DeleteProductByIdCommandHandler
]