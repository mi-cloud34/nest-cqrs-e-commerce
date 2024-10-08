import { GetProductByIdQueryHandler } from "./get_product_by_id/get_product_by_id.handler";
import { GetProductsQueryHandler } from "./get_products/get_products.handler";

export const ProductQueryHandlers = [
  GetProductsQueryHandler,
  GetProductByIdQueryHandler
]